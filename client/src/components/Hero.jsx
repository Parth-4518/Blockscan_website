import { useEffect, useRef, useState } from 'react';
import './Hero.css';

function Hero({ reveal = false }) {
  const [phase, setPhase] = useState('hidden');
  const heroRef = useRef(null);

  useEffect(() => {
    if (reveal && phase === 'hidden') {
      const timer = setTimeout(() => {
        setPhase('entering');
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [reveal, phase]);

  useEffect(() => {
    if (phase === 'entering') {
      const timer = setTimeout(() => {
        setPhase('visible');
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className={`hero-label ${phase !== 'hidden' ? 'hero-animate-in' : ''}`}>
          <span className="hero-label-number">01</span>
          <span className="hero-label-divider" />
          <span className="hero-label-text">BLOCKCHAIN INTELLIGENCE</span>
        </div>

        <h1 className={`hero-title ${phase !== 'hidden' ? 'hero-animate-in' : ''}`}>
          Building the Future of
          <br />
          Blockchain Infrastructure
        </h1>

        <p className={`hero-subtitle ${phase !== 'hidden' ? 'hero-animate-in' : ''}`}>
          OpenScan.AI delivers blockchain analytics, explorer solutions,
          security auditing, and AI-powered intelligence for modern Web3 ecosystems.
        </p>

        <div className={`hero-buttons ${phase !== 'hidden' ? 'hero-animate-in' : ''}`}>
          <button
            className="hero-btn hero-btn-primary"
            onClick={() => scrollToSection('services')}
          >
            <span>Explore Services</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="hero-btn hero-btn-secondary"
            onClick={() => scrollToSection('projects')}
          >
            <span>View Projects</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
