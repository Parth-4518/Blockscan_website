import { useEffect, useRef, useState } from 'react'
import './About.css'
import AnimatedCounter from '../components/AnimatedCounter'
import ScrollReveal from '../components/ScrollReveal'

const About = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.style.opacity = '0'
      pageRef.current.style.transform = 'translateY(24px)'
      requestAnimationFrame(() => {
        if (pageRef.current) {
          pageRef.current.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          pageRef.current.style.opacity = '1'
          pageRef.current.style.transform = 'translateY(0)'
        }
      })
    }
  }, [])

  const timeline = [
    { year: '2019', title: 'Founded', desc: 'OpenScan.AI began as a vision to make blockchain data accessible to everyone.' },
    { year: '2020', title: 'First Explorer', desc: 'Launched our first multi-chain blockchain explorer with real-time indexing.' },
    { year: '2021', title: 'Security Division', desc: 'Established our smart contract auditing team with enterprise-grade standards.' },
    { year: '2022', title: 'AI Integration', desc: 'Integrated machine learning for anomaly detection and predictive analytics.' },
    { year: '2023', title: 'Enterprise Suite', desc: 'Released comprehensive infrastructure tools for institutional clients.' },
    { year: '2024', title: 'OpenScan.AI', desc: 'Rebranded and expanded to a full-stack blockchain intelligence platform.' },
  ]

  const values = [
    { title: 'Innovation', desc: 'Pushing boundaries in blockchain technology.' },
    { title: 'Transparency', desc: 'Open, verifiable systems. Always.' },
    { title: 'Security', desc: 'Maximum protection of digital assets.' },
    { title: 'Decentralization', desc: 'True ownership and control.' },
  ]

  return (
    <div className="about-page" ref={pageRef}>
      {/* Section 1 — Origin */}
      <section className="about-section about-origin">
        <div className="about-horizon-glow" />
        <div className="about-content">
          <ScrollReveal direction="up" delay={0}>
            <span className="about-section-number">01</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="about-section-title-large">THE ORIGIN</h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="about-section-subtitle">Every network begins with a single node.</p>
          </ScrollReveal>
        </div>
        <div className="about-scroll-indicator">
          <span>Scroll</span>
          <div className="about-scroll-line" />
        </div>
      </section>

      {/* Section 2 — Mission */}
      <section className="about-section about-mission">
        <div className="about-content">
          <ScrollReveal direction="up" delay={0}>
            <span className="about-section-label">02 — MISSION</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="about-section-title-large about-title-mission">Democratizing<br />Blockchain Access</h2>
          </ScrollReveal>
          <div className="about-metrics">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="about-metric">
                <span className="about-metric-number">
                  <AnimatedCounter endValue={50} suffix="M+" />
                </span>
                <span className="about-metric-label">Transactions Scanned</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <div className="about-metric">
                <span className="about-metric-number">
                  <AnimatedCounter endValue={99} suffix=".9%" />
                </span>
                <span className="about-metric-label">Uptime Guaranteed</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <div className="about-metric">
                <span className="about-metric-number">
                  <AnimatedCounter endValue={200} suffix="+" />
                </span>
                <span className="about-metric-label">Contracts Audited</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 3 — Vision */}
      <section className="about-section about-vision">
        <div className="about-horizon-glow about-horizon-cyan" />
        <div className="about-content">
          <ScrollReveal direction="up" delay={0}>
            <span className="about-section-label">03 — VISION</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="about-section-title-large about-title-vision">A World Powered<br />by Trust</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="about-vision-text">
              We envision a future where blockchain is the invisible backbone of global commerce, 
              governance, and communication. A world where trust is programmatic, transparency is default, 
              and intermediaries are obsolete.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <p className="about-vision-text">
              OpenScan.AI is building the infrastructure to make this vision a reality — one block at a time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4 — Timeline */}
      <section className="about-section about-timeline">
        <div className="about-content">
          <ScrollReveal direction="up" delay={0}>
            <span className="about-section-label">04 — TIMELINE</span>
          </ScrollReveal>
          <div className="about-timeline-container">
            <div className="about-timeline-line" />
            {timeline.map((item, index) => (
              <ScrollReveal
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={0.1}
              >
                <div className={`about-timeline-node about-timeline-${index % 2 === 0 ? 'left' : 'right'}`}>
                  <span className="about-timeline-year">{item.year}</span>
                  <span className="about-timeline-title">{item.title}</span>
                  <span className="about-timeline-desc">{item.desc}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Values */}
      <section className="about-section about-values">
        <div className="about-content">
          <ScrollReveal direction="up" delay={0}>
            <span className="about-section-label">05 — VALUES</span>
          </ScrollReveal>
          <div className="about-values-list">
            {values.map((value, index) => (
              <ScrollReveal
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={0.15}
                duration={0.8}
              >
                <div className="about-value-row">
                  <div className="about-value-main">
                    <span className="about-value-number">0{index + 1}</span>
                    <h3 className="about-value-title">{value.title}</h3>
                  </div>
                  <p className="about-value-desc">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Closing */}
      <section className="about-section about-closing">
        <div className="about-horizon-glow about-horizon-green" />
        <div className="about-content about-content-center">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="about-closing-text">The future is decentralized.</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <a href="/services" className="about-closing-button">Explore Services</a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default About
