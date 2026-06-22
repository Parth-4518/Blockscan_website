import { useEffect, useRef } from 'react'
import './Services.css'
import ScrollReveal from '../components/ScrollReveal'

const Services = () => {
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

  const layers = [
    {
      number: '01',
      title: 'Blockchain Explorer',
      desc: 'Real-time transaction tracking, block verification, and wallet analytics across multiple chains with enterprise-grade reliability.',
      features: ['Multi-chain support', 'Real-time indexing', 'Advanced filtering', 'API access'],
      accent: '#2BF0FF',
    },
    {
      number: '02',
      title: 'Security Audits',
      desc: 'Comprehensive smart contract auditing and vulnerability assessment to protect your decentralized applications.',
      features: ['Static analysis', 'Dynamic testing', 'Manual review', 'Remediation reports'],
      accent: '#7A3CFF',
    },
    {
      number: '03',
      title: 'Analytics Platform',
      desc: 'Deep insights into on-chain activity, token metrics, and network health with customizable dashboards.',
      features: ['Custom dashboards', 'Alert system', 'Historical data', 'Export tools'],
      accent: '#2BF0FF',
    },
    {
      number: '04',
      title: 'Node Infrastructure',
      desc: 'High-availability RPC nodes and validator services ensuring 99.9% uptime for your blockchain operations.',
      features: ['Global distribution', 'Auto-scaling', 'Load balancing', '24/7 monitoring'],
      accent: '#7A3CFF',
    },
    {
      number: '05',
      title: 'Token Integration',
      desc: 'Seamless token listing, verification, and integration services for exchanges and DeFi platforms.',
      features: ['ERC-20/721/1155', 'Custom standards', 'Metadata management', 'Verification badges'],
      accent: '#2BF0FF',
    },
    {
      number: '06',
      title: 'Wallet Solutions',
      desc: 'Secure multi-signature wallet infrastructure with institutional-grade key management and recovery.',
      features: ['Multi-sig support', 'HSM integration', 'Social recovery', 'Hardware compatibility'],
      accent: '#7A3CFF',
    },
  ]

  return (
    <div className="services-page" ref={pageRef}>
      {/* Section 1 — Entrance */}
      <section className="services-section services-entrance">
        <div className="services-horizon-glow" />
        <div className="services-content">
          <ScrollReveal direction="up" delay={0}>
            <span className="services-label">PROTOCOL LAYERS</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="services-title-large">Six services.<br />One infrastructure.</h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="services-subtitle">End-to-end blockchain tooling for enterprises, developers, and DeFi protocols.</p>
          </ScrollReveal>
        </div>
        <div className="services-scroll-indicator">
          <span>Scroll</span>
          <div className="services-scroll-line" />
        </div>
      </section>

      {/* Service Layers */}
      {layers.map((layer, index) => (
        <section key={index} className="services-section services-layer">
          <div className="services-layer-accent" style={{ background: `radial-gradient(circle at 80% 50%, ${layer.accent}15 0%, transparent 60%)` }} />
          <div className="services-content">
            <ScrollReveal direction="up" delay={0}>
              <span className="services-layer-number" style={{ color: layer.accent }}>{layer.number}</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="services-layer-title">{layer.title}</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="services-layer-desc">{layer.desc}</p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <div className="services-layer-features">
                {layer.features.map((feature, fIndex) => (
                  <span key={fIndex} className="services-layer-feature">
                    <span className="services-feature-dot" style={{ background: layer.accent }} />
                    {feature}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* Closing */}
      <section className="services-section services-closing">
        <div className="services-horizon-glow services-horizon-green" />
        <div className="services-content services-content-center">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="services-closing-text">Ready to build?</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <a href="/team" className="services-closing-button">Meet the Team</a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default Services
