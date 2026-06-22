import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const Lerp = (a, b, t) => a + (b - a) * t
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v))

function hexToVec3(hex) {
  const n = parseInt(hex.slice(1), 16)
  return new THREE.Vector3(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255)
}

// Fixed parameters
const colorLow = '#050816'
const colorHigh = '#2BF0FF'
const opacity = 0.35
const pointSize = 6.0
const brightness = 0.55
const waveHeight = 2.5
const flow = 1
const tilt = 0
const scale = 0.3
const scrollRise = 1.2
const camStartY = 7, camStartZ = 16
const camEndY = 0.6, camEndZ = -3
const lookStartZ = 2, lookEndZ = -14
const parallax = 1.0
const pointerRadius = 6.0
const pointerStrength = 0.8

const SNOISE = `
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0); const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + 1.0 * C.xxx; vec3 x2 = x0 - i2 + 2.0 * C.xxx; vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 1.0/7.0; vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
  vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ *ns.x + ns.yyyy; vec4 y = y_ *ns.x + ns.yyyy; vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0; vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy,h.x); vec3 p1 = vec3(a0.zw,h.y); vec3 p2 = vec3(a1.xy,h.z); vec3 p3 = vec3(a1.zw,h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0); m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`

const nodeVertexShader = `
uniform float uTime; uniform float uStream; uniform float uSize; uniform float uWaveHeight; uniform float uFlow; uniform float uScale;
uniform vec3 uColLow; uniform vec3 uColHigh;
uniform vec3 uCursor; uniform float uRepelRadius; uniform float uRepelStrength; uniform float uActivity;
varying float vFade; varying vec3 vColor;
${SNOISE}
void main() {
  vec3 wp = vec3(position.x * 13.0, 0.0, position.z * 25.0);
  wp.x += position.y * 6.0;
  float zc = wp.z + uStream;
  float wn = snoise(vec3(wp.x * 0.08, zc * 0.08, uTime * 0.15 * uFlow)) * 2.0;
  wn += snoise(vec3(wp.x * 0.16, zc * 0.16, uTime * 0.3 * uFlow)) * 0.8;
  wp.y += wn * uWaveHeight;

  vec3 finalPos = wp * uScale;
  vec4 modelPosition = modelMatrix * vec4(finalPos, 1.0);
  vec3 toP = modelPosition.xyz - uCursor;
  float cd = length(toP);
  float fall = smoothstep(uRepelRadius, 0.0, cd);
  modelPosition.xyz += normalize(toP + vec3(0.0001)) * fall * uRepelStrength * uActivity;
  vec4 mvPosition = viewMatrix * modelPosition;

  float colMix = smoothstep(-3.0, 3.0, position.y + position.x * 0.5);
  vColor = mix(uColLow, uColHigh, clamp(colMix, 0.0, 1.0));
  vFade = 1.0;

  gl_PointSize = uSize * (10.0 / -mvPosition.z);
  gl_PointSize = max(gl_PointSize, 1.5);
  gl_Position = projectionMatrix * mvPosition;
}
`

const nodeFragmentShader = `
uniform float uOpacity; uniform float uBrightness; uniform float uAppear;
varying float vFade; varying vec3 vColor;
void main() {
  vec2 xy = gl_PointCoord - 0.5;
  float ll = length(xy);
  if (ll > 0.5) discard;
  float a = smoothstep(0.5, 0.1, ll);
  gl_FragColor = vec4(vColor * uBrightness, vFade * a * uOpacity * uAppear);
}
`

const atmoVertexShader = `
attribute float size; attribute float seed; uniform float uTime; uniform vec2 uRes;
varying float vA;
vec3 warp(vec3 p, float t){ float c=0.9,a=1.9,b=0.02,s=0.05; p*=2.;
  p.x+=c*sin(s*t+a*p.y)+t*b; p.y+=c*cos(s*t+a*p.x); p.y+=c*sin(s*t+a*p.z)+t*b;
  p.z+=c*cos(s*t+a*p.y); p.z+=c*sin(s*t+a*p.x)+t*b; p.x+=c*cos(s*t+a*p.z);
  return cos(p+vec3(1,2,4)); }
void main(){
  vec3 v = position*4.0 + warp(position, uTime)*1.2;
  vec4 mv = modelViewMatrix * vec4(v, 1.0);
  float r = length(v); float farF = 1.0 - smoothstep(5.0, 6.5, r); float nearF = smoothstep(0.0, 0.5, -mv.z);
  vA = farF * nearF;
  gl_PointSize = size * uRes.y / 900.0 / -mv.z; gl_PointSize = max(gl_PointSize, 1.0);
  gl_Position = projectionMatrix * mv;
}
`

const atmoFragmentShader = `
uniform vec3 uColor; varying float vA;
void main(){ vec2 p = gl_PointCoord - 0.5; float l = length(p); if (l > 0.5) discard;
  float tex = smoothstep(0.5, 0.0, l); gl_FragColor = vec4(uColor * tex, tex * vA * 0.6); }
`

// ============================================
// SCENE COMPONENTS — all R3F hooks inside here
// ============================================

function Scene({ scrollRef, mouseRef, pointerRef }) {
  const { camera } = useThree()

  useFrame(() => {
    const t = performance.now() / 1000

    // Camera update
    const scroll = scrollRef.current
    const mouse = mouseRef.current
    const ea = Math.min(scroll / 0.35, 1.0)
    const e = ea * ea * (3 - 2 * ea)
    const camY = Lerp(camStartY, camEndY, e)
    const camZ = Lerp(camStartZ, camEndZ, e)
    camera.position.set(mouse.x * parallax, camY + mouse.y * parallax * 0.3, camZ)
    camera.lookAt(mouse.x * parallax * 0.5, Lerp(0.0, 0.6, e), Lerp(lookStartZ, lookEndZ, e))

    // Pointer world update
    const _ndc = new THREE.Vector3()
    const _dir = new THREE.Vector3()
    const _tgt = new THREE.Vector3()

    _tgt.set(0, 0, 0)
    if (pointerRef.current.active) {
      _ndc.set(mouseRef.current.x, mouseRef.current.y, 0.5).unproject(camera)
      _dir.copy(_ndc).sub(camera.position).normalize()
      const dn = _dir.z
      if (Math.abs(dn) > 1e-4) {
        const tt = -camera.position.z / dn
        if (tt > 0 && Number.isFinite(tt)) {
          _tgt.copy(camera.position).addScaledVector(_dir, tt)
        }
      }
    }
    pointerRef.current.world.lerp(_tgt, 0.12)
    const idle = (performance.now() - pointerRef.current.lastMove) / 1000
    pointerRef.current.activity += (((pointerRef.current.active && idle < 3) ? 1 : 0) - pointerRef.current.activity) * 0.06
  })

  return (
    <>
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 0, 15]} />
      <NetworkPoints scrollRef={scrollRef} mouseRef={mouseRef} pointerRef={pointerRef} />
      <AmbientMotes />
    </>
  )
}

function NetworkPoints({ scrollRef, mouseRef, pointerRef }) {
  const meshRef = useRef()
  const groupRef = useRef()
  const streamRef = useRef(0)
  const appearStartRef = useRef(performance.now())
  const t0Ref = useRef(performance.now() / 1000)

  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(4.2, 80, 240)
    geo.frustumCulled = false
    return geo
  }, [])

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uStream: { value: 0 },
        uAppear: { value: 0 },
        uColLow: { value: hexToVec3(colorLow) },
        uColHigh: { value: hexToVec3(colorHigh) },
        uOpacity: { value: opacity },
        uSize: { value: pointSize },
        uBrightness: { value: brightness },
        uWaveHeight: { value: waveHeight },
        uFlow: { value: flow },
        uScale: { value: scale },
        uCursor: { value: new THREE.Vector3() },
        uRepelRadius: { value: pointerRadius },
        uRepelStrength: { value: pointerStrength },
        uActivity: { value: 0 },
      },
      vertexShader: nodeVertexShader,
      fragmentShader: nodeFragmentShader,
    })
  }, [])

  useFrame(() => {
    const t = performance.now() / 1000
    const dt = Math.min(0.05, t - t0Ref.current)
    t0Ref.current = t

    const scroll = scrollRef.current

    streamRef.current += dt * (flow * 2.0) * 4.0

    const uniforms = material.uniforms
    uniforms.uTime.value = t
    uniforms.uStream.value = streamRef.current
    uniforms.uWaveHeight.value = waveHeight * (1 + scroll * scrollRise)
    uniforms.uCursor.value.copy(pointerRef.current.world)
    uniforms.uActivity.value = pointerRef.current.activity

    const elapsed = (performance.now() - appearStartRef.current) / 1000
    uniforms.uAppear.value = Math.max(0, Math.min(1, (elapsed - 0.2) / 1.4))

    if (groupRef.current) {
      groupRef.current.rotation.x = -tilt
      groupRef.current.rotation.y = 0
    }
  })

  return (
    <group ref={groupRef}>
      <points ref={meshRef} geometry={geometry} material={material} />
    </group>
  )
}

function AmbientMotes() {
  const pointsRef = useRef()
  const { camera } = useThree()

  const { geometry, material } = useMemo(() => {
    const N = Math.round(200)
    const positions = new Float32Array(N * 3)
    const sizes = new Float32Array(N)
    const seeds = new Float32Array(N)

    for (let i = 0; i < N; i++) {
      positions[i * 3] = 2 * Math.random() - 1
      positions[i * 3 + 1] = 2 * Math.random() - 1
      positions[i * 3 + 2] = 2 * Math.random() - 1
      sizes[i] = 20 * (0.4 + Math.random())
      seeds[i] = Math.random()
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    geo.setAttribute('seed', new THREE.BufferAttribute(seeds, 1))
    geo.frustumCulled = false

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: hexToVec3('#2BF0FF') },
        uRes: { value: new THREE.Vector2(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio) },
      },
      vertexShader: atmoVertexShader,
      fragmentShader: atmoFragmentShader,
    })

    return { geometry: geo, material: mat }
  }, [])

  useFrame(() => {
    const t = performance.now() / 1000
    material.uniforms.uTime.value = t * 0.8 * 8.0
    if (pointsRef.current && camera) {
      pointsRef.current.position.copy(camera.position)
    }
  })

  return (
    <points ref={pointsRef} geometry={geometry} material={material} />
  )
}

// ============================================
// WRAPPER — no R3F hooks here
// ============================================

export default function BlockchainNetwork({ active }) {
  const scrollRef = useRef(0)
  const mouseRef = useRef({ x: 0, y: 0 })
  const pointerRef = useRef({
    world: new THREE.Vector3(),
    activity: 0,
    active: false,
    lastMove: performance.now(),
  })

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      scrollRef.current = max > 0 ? clamp(window.scrollY / max, 0, 1) : 0
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -((e.clientY / window.innerHeight) * 2 - 1)
      pointerRef.current.active = true
      pointerRef.current.lastMove = performance.now()
    }
    const handleMouseOut = () => {
      pointerRef.current.active = false
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseout', handleMouseOut)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  if (!active) return null

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas
        gl={{ antialias: true, alpha: false }}
        camera={{ position: [0, 7, 16], fov: 45, near: 0.1, far: 400 }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <Scene scrollRef={scrollRef} mouseRef={mouseRef} pointerRef={pointerRef} />
      </Canvas>
    </div>
  )
}
