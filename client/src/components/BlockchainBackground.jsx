import { useEffect, useRef } from 'react';
import './BlockchainBackground.css';

function BlockchainBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = 1;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Colors
    const COLORS = {
      cyan: { r: 43, g: 240, b: 255 },
      purple: { r: 122, g: 60, b: 255 },
      green: { r: 57, g: 255, b: 136 },
    };

    // Layer configs
    const LAYER_CONFIG = [
      { count: 30, speedMin: 0.02, speedMax: 0.06, radiusMin: 0.6, radiusMax: 1.4, glowMin: 0.15, glowMax: 0.25, connDist: 140, connAlpha: 0.05, lineWidth: 0.3, parallax: 0.015 },
      { count: 24, speedMin: 0.04, speedMax: 0.10, radiusMin: 1.2, radiusMax: 2.4, glowMin: 0.35, glowMax: 0.55, connDist: 200, connAlpha: 0.08, lineWidth: 0.5, parallax: 0.04 },
      { count: 14, speedMin: 0.08, speedMax: 0.16, radiusMin: 2.2, radiusMax: 4.0, glowMin: 0.55, glowMax: 0.85, connDist: 260, connAlpha: 0.13, lineWidth: 0.8, parallax: 0.10 },
    ];

    // Activity states
    const STATE = { IDLE: 0, RECEIVING: 1, TRANSMITTING: 2 };

    class Node {
      constructor(layerIdx, clusterId = -1) {
        this.layer = layerIdx;
        this.clusterId = clusterId;
        this.cfg = LAYER_CONFIG[layerIdx];
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        const speed = this.cfg.speedMin + Math.random() * (this.cfg.speedMax - this.cfg.speedMin);
        const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.radius = this.cfg.radiusMin + Math.random() * (this.cfg.radiusMax - this.cfg.radiusMin);
        this.glow = this.cfg.glowMin + Math.random() * (this.cfg.glowMax - this.cfg.glowMin);
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.006 + Math.random() * 0.012;
        this.type = Math.random() > 0.5 ? 'cyan' : 'purple';

        this.state = STATE.IDLE;
        this.stateTimer = 0;
        this.isHub = false;
        this.clusterMembers = [];
      }

      update() {
        if (prefersReducedMotion) return;

        this.x += this.vx;
        this.y += this.vy;

        // Wrap edges
        if (this.x < -30) this.x = width + 30;
        if (this.x > width + 30) this.x = -30;
        if (this.y < -30) this.y = height + 30;
        if (this.y > height + 30) this.y = -30;

        this.pulsePhase += this.pulseSpeed;

        // State decay
        if (this.state !== STATE.IDLE) {
          this.stateTimer -= 1;
          if (this.stateTimer <= 0) {
            this.state = STATE.IDLE;
          }
        }
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.15 + 0.85;
        let alpha = this.glow * pulse;
        let r = this.radius * pulse;
        let col = COLORS[this.type];

        // State visual effects
        if (this.state === STATE.RECEIVING) {
          alpha = Math.min(alpha * 1.8, 0.95);
          r *= 1.3;
          // Shift toward white when receiving
          const t = this.stateTimer / 20;
          col = {
            r: col.r + (255 - col.r) * (1 - t) * 0.3,
            g: col.g + (255 - col.g) * (1 - t) * 0.3,
            b: col.b + (255 - col.b) * (1 - t) * 0.3,
          };
        } else if (this.state === STATE.TRANSMITTING) {
          alpha = Math.min(alpha * 2.2, 1.0);
          r *= 1.5;
        }

        if (this.isHub) {
          r *= 1.2;
          alpha = Math.min(alpha * 1.3, 1.0);
        }

        const px = this.x - mouseRef.current.x * this.cfg.parallax;
        const py = this.y - mouseRef.current.y * this.cfg.parallax;

        ctx.fillStyle = `rgba(${col.r | 0}, ${col.g | 0}, ${col.b | 0}, ${alpha})`;
        ctx.shadowColor = `rgba(${col.r | 0}, ${col.g | 0}, ${col.b | 0}, ${0.35 + this.layer * 0.12})`;
        ctx.shadowBlur = (8 + this.layer * 6) * (this.state === STATE.TRANSMITTING ? 1.5 : 1);
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Hub ring
        if (this.isHub) {
          ctx.strokeStyle = `rgba(${col.r | 0}, ${col.g | 0}, ${col.b | 0}, ${0.2 * pulse})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.arc(px, py, r * 2.2, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    }

    class Route {
      constructor(nodeA, nodeB) {
        this.a = nodeA;
        this.b = nodeB;
        this.activity = 0; // 0-1, fades over time
        this.lastUsed = 0;
      }

      update() {
        if (this.activity > 0) {
          this.activity -= 0.003;
          if (this.activity < 0) this.activity = 0;
        }
        this.lastUsed += 1;
      }

      draw() {
        if (this.activity <= 0) return;
        const ax = this.a.x - mouseRef.current.x * this.a.cfg.parallax;
        const ay = this.a.y - mouseRef.current.y * this.a.cfg.parallax;
        const bx = this.b.x - mouseRef.current.x * this.b.cfg.parallax;
        const by = this.b.y - mouseRef.current.y * this.b.cfg.parallax;

        const colA = COLORS[this.a.type];
        const colB = COLORS[this.b.type];
        const midR = ((colA.r + colB.r) / 2) | 0;
        const midG = ((colA.g + colB.g) / 2) | 0;
        const midB = ((colA.b + colB.b) / 2) | 0;

        ctx.strokeStyle = `rgba(${midR}, ${midG}, ${midB}, ${this.activity * 0.25})`;
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.stroke();
      }
    }

    class DataPacket {
      constructor(startNode, endNode, route) {
        this.startNode = startNode;
        this.endNode = endNode;
        this.route = route;
        this.progress = 0;
        this.speed = 0.012 + Math.random() * 0.018;
        this.active = true;
        this.type = startNode.type;
        this.trail = [];
        this.trailLength = 6;
      }

      update() {
        if (prefersReducedMotion) return;
        this.progress += this.speed;

        const sx = this.startNode.x - mouseRef.current.x * this.startNode.cfg.parallax;
        const sy = this.startNode.y - mouseRef.current.y * this.startNode.cfg.parallax;
        const ex = this.endNode.x - mouseRef.current.x * this.endNode.cfg.parallax;
        const ey = this.endNode.y - mouseRef.current.y * this.endNode.cfg.parallax;

        const x = sx + (ex - sx) * this.progress;
        const y = sy + (ey - sy) * this.progress;
        this.trail.push({ x, y });
        if (this.trail.length > this.trailLength) this.trail.shift();

        if (this.progress >= 1) {
          this.active = false;
          this.endNode.state = STATE.RECEIVING;
          this.endNode.stateTimer = 20;
          if (this.route) this.route.activity = 1.0;
          // Spawn ripple at destination
          ripples.push(new Ripple(ex, ey, this.type));
          // Spawn wave if hub
          if (this.endNode.isHub) {
            waves.push(new Wave(ex, ey, this.type, this.endNode.cfg.connDist * 0.6));
          }
        }
      }

      draw() {
        if (!this.active) return;
        const col = COLORS[this.type];

        for (let i = 0; i < this.trail.length; i++) {
          const t = this.trail[i];
          const a = (i / this.trail.length) * 0.4;
          const s = 0.8 + (i / this.trail.length) * 1.4;
          ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${a})`;
          ctx.beginPath();
          ctx.arc(t.x, t.y, s, 0, Math.PI * 2);
          ctx.fill();
        }

        const head = this.trail[this.trail.length - 1];
        if (head) {
          ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, 0.95)`;
          ctx.shadowColor = `rgba(${col.r}, ${col.g}, ${col.b}, 0.9)`;
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.arc(head.x, head.y, 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    class Ripple {
      constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.radius = 0;
        this.maxRadius = 20 + Math.random() * 15;
        this.alpha = 0.5;
        this.active = true;
        this.speed = 0.7 + Math.random() * 0.4;
      }

      update() {
        this.radius += this.speed;
        this.alpha = 0.5 * (1 - this.radius / this.maxRadius);
        if (this.radius >= this.maxRadius) this.active = false;
      }

      draw() {
        if (!this.active) return;
        const col = COLORS[this.type];
        ctx.strokeStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${this.alpha})`;
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    class Wave {
      constructor(x, y, type, maxRadius) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.radius = 0;
        this.maxRadius = maxRadius;
        this.alpha = 0.35;
        this.active = true;
        this.speed = 1.5 + Math.random() * 1.0;
      }

      update() {
        this.radius += this.speed;
        this.alpha = 0.35 * (1 - this.radius / this.maxRadius);
        if (this.radius >= this.maxRadius) this.active = false;
      }

      draw() {
        if (!this.active) return;
        const col = COLORS[this.type];
        ctx.strokeStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${this.alpha})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    class DataStream {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + 10;
        this.speed = 0.3 + Math.random() * 0.5;
        this.length = 20 + Math.random() * 40;
        this.alpha = 0.08 + Math.random() * 0.12;
        this.width = 0.5 + Math.random() * 0.8;
        this.active = true;
        this.type = Math.random() > 0.5 ? 'cyan' : 'purple';
      }

      update() {
        if (prefersReducedMotion) return;
        this.y -= this.speed;
        if (this.y < -this.length) {
          this.reset();
        }
      }

      draw() {
        const col = COLORS[this.type];
        const grad = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.length);
        grad.addColorStop(0, `rgba(${col.r}, ${col.g}, ${col.b}, 0)`);
        grad.addColorStop(0.5, `rgba(${col.r}, ${col.g}, ${col.b}, ${this.alpha})`);
        grad.addColorStop(1, `rgba(${col.r}, ${col.g}, ${col.b}, 0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = this.width;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.stroke();
      }
    }

    const nodes = [];
    const routes = [];
    const packets = [];
    const ripples = [];
    const waves = [];
    const streams = [];
    const clusters = [];

    function buildClusters() {
      clusters.length = 0;
      const clusterCount = 5 + Math.floor(Math.random() * 3);
      for (let c = 0; c < clusterCount; c++) {
        const cx = Math.random() * width * 0.8 + width * 0.1;
        const cy = Math.random() * height * 0.8 + height * 0.1;
        const radius = 80 + Math.random() * 120;
        clusters.push({ x: cx, y: cy, radius, members: [], hub: null });
      }
    }

    function init() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      buildClusters();

      nodes.length = 0;
      LAYER_CONFIG.forEach((cfg, layerIdx) => {
        for (let i = 0; i < cfg.count; i++) {
          const node = new Node(layerIdx);
          // Assign to nearest cluster
          let bestCluster = -1;
          let bestDist = Infinity;
          clusters.forEach((cl, ci) => {
            const dx = node.x - cl.x;
            const dy = node.y - cl.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < bestDist) {
              bestDist = d;
              bestCluster = ci;
            }
          });
          if (bestCluster >= 0 && bestDist < clusters[bestCluster].radius) {
            node.clusterId = bestCluster;
            clusters[bestCluster].members.push(node);
          }
          nodes.push(node);
        }
      });

      // Assign hubs
      clusters.forEach(cl => {
        if (cl.members.length > 0) {
          const hub = cl.members[Math.floor(Math.random() * cl.members.length)];
          hub.isHub = true;
          cl.hub = hub;
        }
      });

      // Build routes
      routes.length = 0;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          if (a.layer !== b.layer) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < a.cfg.connDist) {
            routes.push(new Route(a, b));
          }
        }
      }

      // Hub-to-hub cross-cluster routes
      clusters.forEach((cl, i) => {
        clusters.forEach((cl2, j) => {
          if (i >= j) return;
          if (!cl.hub || !cl2.hub) return;
          const dx = cl.hub.x - cl2.hub.x;
          const dy = cl.hub.y - cl2.hub.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 400) {
            routes.push(new Route(cl.hub, cl2.hub));
          }
        });
      });

      packets.length = 0;
      ripples.length = 0;
      waves.length = 0;

      streams.length = 0;
      for (let i = 0; i < 12; i++) {
        streams.push(new DataStream());
      }
    }

    function drawBaseConnections() {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          if (a.layer !== b.layer) continue;

          const ax = a.x - mouseRef.current.x * a.cfg.parallax;
          const ay = a.y - mouseRef.current.y * a.cfg.parallax;
          const bx = b.x - mouseRef.current.x * b.cfg.parallax;
          const by = b.y - mouseRef.current.y * b.cfg.parallax;
          const dx = ax - bx;
          const dy = ay - by;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const cfg = LAYER_CONFIG[a.layer];

          if (dist < cfg.connDist) {
            const opacity = (1 - dist / cfg.connDist) * cfg.connAlpha;
            const colA = COLORS[a.type];
            const colB = COLORS[b.type];
            const midR = ((colA.r + colB.r) / 2) | 0;
            const midG = ((colA.g + colB.g) / 2) | 0;
            const midB = ((colA.b + colB.b) / 2) | 0;

            ctx.strokeStyle = `rgba(${midR}, ${midG}, ${midB}, ${opacity})`;
            ctx.lineWidth = cfg.lineWidth;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }
    }

    function drawHorizonGlow() {
      const horizonY = height * 0.80;
      const glowH = height * 0.28;

      const grad = ctx.createLinearGradient(0, horizonY - glowH, 0, height);
      grad.addColorStop(0, 'rgba(57, 255, 136, 0)');
      grad.addColorStop(0.2, 'rgba(43, 240, 255, 0.06)');
      grad.addColorStop(0.5, 'rgba(57, 255, 136, 0.04)');
      grad.addColorStop(0.75, 'rgba(122, 60, 255, 0.03)');
      grad.addColorStop(1, 'rgba(5, 8, 22, 0)');

      ctx.fillStyle = grad;
      ctx.fillRect(0, horizonY - glowH, width, glowH * 1.5);

      // Purple radial from bottom-left
      const pGrad = ctx.createRadialGradient(
        width * 0.22, height * 0.92, 0,
        width * 0.22, height * 0.92, width * 0.42
      );
      pGrad.addColorStop(0, 'rgba(122, 60, 255, 0.03)');
      pGrad.addColorStop(1, 'rgba(122, 60, 255, 0)');
      ctx.fillStyle = pGrad;
      ctx.fillRect(0, 0, width, height);
    }

    function spawnPacketBurst() {
      if (packets.length >= 14) return;
      if (Math.random() > 0.035) return;

      // Prefer hub-to-member or hub-to-hub
      const hubs = nodes.filter(n => n.isHub);
      if (hubs.length === 0) return;

      const hub = hubs[Math.floor(Math.random() * hubs.length)];
      const candidates = nodes.filter(n => {
        if (n === hub) return false;
        const dx = n.x - hub.x;
        const dy = n.y - hub.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        return dist < hub.cfg.connDist && n.layer === hub.layer;
      });

      if (candidates.length === 0) return;

      // Burst: 1-3 packets from hub
      const burstCount = 1 + Math.floor(Math.random() * 3);
      for (let i = 0; i < burstCount; i++) {
        const target = candidates[Math.floor(Math.random() * candidates.length)];
        const route = routes.find(r =>
          (r.a === hub && r.b === target) || (r.a === target && r.b === hub)
        );
        const pkt = new DataPacket(hub, target, route);
        packets.push(pkt);
        hub.state = STATE.TRANSMITTING;
        hub.stateTimer = 15;
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      drawHorizonGlow();

      // Data streams (behind everything)
      streams.forEach(s => {
        s.update();
        s.draw();
      });

      // Base connections
      drawBaseConnections();

      // Active routes
      routes.forEach(r => {
        r.update();
        r.draw();
      });

      // Nodes
      nodes.forEach(node => {
        node.update();
        node.draw();
      });

      // Packets
      spawnPacketBurst();
      for (let i = packets.length - 1; i >= 0; i--) {
        packets[i].update();
        packets[i].draw();
        if (!packets[i].active) packets.splice(i, 1);
      }

      // Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].update();
        ripples[i].draw();
        if (!ripples[i].active) ripples.splice(i, 1);
      }

      // Waves
      for (let i = waves.length - 1; i >= 0; i--) {
        waves[i].update();
        waves[i].draw();
        if (!waves[i].active) waves.splice(i, 1);
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left - width / 2;
      mouseRef.current.y = e.clientY - rect.top - height / 2;
    }

    function handleResize() {
      init();
    }

    init();
    animate();

    canvas.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="blockchain-background"
      aria-hidden="true"
    />
  );
}

export default BlockchainBackground;
