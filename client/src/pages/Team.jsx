import { useEffect, useRef } from 'react'
import './Team.css'
import ScrollReveal from '../components/ScrollReveal'

const Team = () => {
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

  const leadership = [
    { number: '01', name: 'Alex Chen', role: 'Chief Executive Officer', bio: 'Former VP of Engineering at Chainalysis. 15 years in distributed systems.' },
    { number: '02', name: 'Sarah Williams', role: 'Chief Technology Officer', bio: 'PhD in Cryptography from MIT. Led protocol development at Ethereum Foundation.' },
    { number: '03', name: 'Marcus Johnson', role: 'Head of Security', bio: 'Ex-NSA cybersecurity specialist. 200+ smart contract audits completed.' },
  ]

  const team = [
    { name: 'Emily Zhang', role: 'Lead Frontend Engineer', bio: 'React ecosystem expert. Previously built trading interfaces at Coinbase.' },
    { name: 'David Park', role: 'Blockchain Architect', bio: 'Core contributor to multiple L1 protocols. Consensus and sharding specialist.' },
    { name: 'Lisa Kumar', role: 'Product Designer', bio: 'Award-winning UX designer. Making complex systems accessible.' },
    { name: 'James Rodriguez', role: 'DevOps Lead', bio: 'Kubernetes and cloud-native expert. Maintains 99.99% uptime.' },
    { name: 'Anna Petrov', role: 'Data Scientist', bio: 'On-chain analytics and anomaly detection. Former quantitative researcher.' },
    { name: 'Michael Foster', role: 'Business Development', bio: 'Closed $50M+ in enterprise blockchain contracts.' },
  ]

  return (
    <div className="team-page" ref={pageRef}>
      {/* Section 1 — Introduction */}
      <section className="team-section team-intro">
        <div className="team-horizon-glow" />
        <div className="team-content">
          <ScrollReveal direction="up" delay={0}>
            <span className="team-label">THE ARCHITECTS</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="team-title-large">Builders of the<br />decentralized future.</h1>
          </ScrollReveal>
        </div>
        <div className="team-scroll-indicator">
          <span>Scroll</span>
          <div className="team-scroll-line" />
        </div>
      </section>

      {/* Section 2 — Leadership */}
      <section className="team-section team-leadership">
        <div className="team-content">
          <ScrollReveal direction="up" delay={0}>
            <span className="team-section-label">LEADERSHIP</span>
          </ScrollReveal>
          <div className="team-leadership-list">
            {leadership.map((member, index) => (
              <ScrollReveal key={index} direction="left" delay={0.1}>
                <div className="team-leadership-row">
                  <span className="team-leadership-number">{member.number}</span>
                  <div className="team-leadership-info">
                    <h3 className="team-leadership-name">{member.name}</h3>
                    <span className="team-leadership-role">{member.role}</span>
                    <p className="team-leadership-bio">{member.bio}</p>
                  </div>
                  <div className="team-leadership-glow">
                    <div className="team-glow-ring" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Team */}
      <section className="team-section team-members">
        <div className="team-content">
          <ScrollReveal direction="up" delay={0}>
            <span className="team-section-label">THE CREW</span>
          </ScrollReveal>
          <div className="team-members-grid">
            {team.map((member, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <div className="team-member-card">
                  <h3 className="team-member-name">{member.name}</h3>
                  <span className="team-member-role">{member.role}</span>
                  <p className="team-member-bio">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Join */}
      <section className="team-section team-closing">
        <div className="team-horizon-glow team-horizon-green" />
        <div className="team-content team-content-center">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="team-closing-text">Join the network.</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="team-closing-subtitle">We're always looking for exceptional builders.</p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <a href="/about" className="team-closing-button">Learn More</a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default Team
