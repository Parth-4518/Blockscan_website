import { useEffect, useState, useRef } from 'react';
import './LoadingScreen.css';

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('enter'); // enter | counting | ringhold | ringfade | brand | brandhold | brandfade | exit
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);

  // Cinematic timing
  const COUNT_DURATION = 1400;
  const RING_HOLD = 400;       // Ring stays at 100% for 0.4s
  const RING_FADE = 500;       // Ring fades out smoothly
  const BRAND_FADE_IN = 700;   // Brand fades in over 700ms
  const BRAND_HOLD = 2000;     // Brand holds for 2 seconds
  const BRAND_FADE_OUT = 800;  // Brand fades out over 800ms
  const EXIT_PAUSE = 200;      // Brief black before exit

  useEffect(() => {
    const enterTimer = setTimeout(() => {
      setPhase('counting');
      startTimeRef.current = performance.now();

      const animate = (now) => {
        const elapsed = now - startTimeRef.current;
        const raw = Math.min(elapsed / COUNT_DURATION, 1);
        const eased = 1 - Math.pow(1 - raw, 3);
        const current = Math.floor(eased * 100);
        setProgress(current);

        if (raw < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          setProgress(100);
          setPhase('ringhold');
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    }, 200);

    return () => {
      clearTimeout(enterTimer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (phase === 'ringhold') {
      const t = setTimeout(() => setPhase('ringfade'), RING_HOLD);
      return () => clearTimeout(t);
    }
    if (phase === 'ringfade') {
      const t = setTimeout(() => setPhase('brand'), RING_FADE);
      return () => clearTimeout(t);
    }
    if (phase === 'brand') {
      const t = setTimeout(() => setPhase('brandhold'), BRAND_FADE_IN);
      return () => clearTimeout(t);
    }
    if (phase === 'brandhold') {
      const t = setTimeout(() => setPhase('brandfade'), BRAND_HOLD);
      return () => clearTimeout(t);
    }
    if (phase === 'brandfade') {
      const t = setTimeout(() => setPhase('exit'), BRAND_FADE_OUT);
      return () => clearTimeout(t);
    }
    if (phase === 'exit') {
      const t = setTimeout(() => onComplete(), EXIT_PAUSE);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  const circumference = 2 * Math.PI * 110;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const isRingVisible = phase === 'enter' || phase === 'counting' || phase === 'ringhold' || phase === 'ringfade';
  const isBrandVisible = phase === 'brand' || phase === 'brandhold' || phase === 'brandfade';
  const ringFading = phase === 'ringfade';
  const brandFading = phase === 'brandfade';
  const brandHolding = phase === 'brandhold';
  const brandEntering = phase === 'brand';

  return (
    <div className={`loading-screen ${phase === 'exit' ? 'loading-exit' : ''} ${phase === 'enter' ? 'loading-enter' : ''}`}>
      {/* Ring + Counter Phase */}
      {isRingVisible && (
        <div className={`loading-ring-phase ${ringFading ? 'ring-fading' : ''}`}>
          <div className="loading-ring-container">
            <svg className="loading-ring-glow" width="280" height="280" viewBox="0 0 280 280">
              <circle cx="140" cy="140" r="110" fill="none" stroke="rgba(43, 240, 255, 0.12)" strokeWidth="1" />
            </svg>
            <svg className="loading-ring" width="280" height="280" viewBox="0 0 280 280">
              <defs>
                <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2BF0FF" />
                  <stop offset="100%" stopColor="#7A3CFF" />
                </linearGradient>
                <filter id="ringGlow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <circle cx="140" cy="140" r="110" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" />
              <circle
                cx="140" cy="140" r="110" fill="none" stroke="url(#ringGradient)" strokeWidth="1.5"
                strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
                transform="rotate(-90 140 140)"
                filter="url(#ringGlow)"
                style={{ transition: 'stroke-dashoffset 0.03s linear' }}
              />
            </svg>
            <div className="loading-percentage">
              <span className="loading-number">{progress}</span>
              <span className="loading-percent-sign">%</span>
            </div>
          </div>
        </div>
      )}

      {/* Solo Brand Phase */}
      {isBrandVisible && (
        <div className={`loading-brand-solo ${brandEntering ? 'brand-entering' : ''} ${brandHolding ? 'brand-holding' : ''} ${brandFading ? 'brand-fading' : ''}`}>
          <div className="loading-brand-particles">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="loading-particle" style={{ '--i': i }} />
            ))}
          </div>
          <div className="loading-brand-text-wrapper">
            <span className="loading-brand-text">
              {'OpenScan.AI'.split('').map((char, i) => (
                <span key={i} className="loading-brand-char" style={{ animationDelay: `${i * 40}ms` }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </div>
          <div className="loading-brand-line" />
          <div className="loading-brand-glow" />
        </div>
      )}
    </div>
  );
}

export default LoadingScreen;
