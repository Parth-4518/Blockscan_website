import React from 'react';
import './About.css';

const About = () => {
  const coreValues = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries in blockchain technology to deliver cutting-edge solutions that redefine industry standards.'
    },
    {
      title: 'Transparency',
      description: 'Building trust through open, verifiable systems where every transaction is traceable and accountable.'
    },
    {
      title: 'Security',
      description: 'Implementing robust protocols and advanced cryptography to ensure maximum protection of digital assets.'
    },
    {
      title: 'Decentralization',
      description: 'Empowering users with true ownership and control, eliminating single points of failure and intermediaries.'
    }
  ];

  return (
    <div className="about-page">
      {/* Company Overview */}
      <section className="about-section about-hero">
        <div className="about-container">
          <span className="about-label">About Us</span>
          <h1 className="about-title">OpenScan.ai Technologies</h1>
          <p className="about-subtitle">
            Pioneering the future of blockchain infrastructure. We build the tools 
            that power the decentralized economy — from enterprise-grade explorers 
            to real-time analytics platforms.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="about-section about-mission">
        <div className="about-container">
          <div className="about-grid">
            <div className="about-grid-content">
              <span className="about-label">Our Mission</span>
              <h2 className="about-section-title">Democratizing Blockchain Access</h2>
              <p className="about-text">
                We believe blockchain technology should be accessible to everyone. 
                Our mission is to bridge the gap between complex decentralized systems 
                and everyday users, creating intuitive interfaces that make interacting 
                with blockchain networks as simple as browsing the web.
              </p>
              <p className="about-text">
                By providing transparent, reliable, and user-friendly tools, we empower 
                developers, enterprises, and individuals to participate fully in the 
                decentralized revolution.
              </p>
            </div>
            <div className="about-grid-visual">
              <div className="about-visual-box">
                <span className="about-visual-number">50M+</span>
                <span className="about-visual-label">Transactions Scanned</span>
              </div>
              <div className="about-visual-box">
                <span className="about-visual-number">99.9%</span>
                <span className="about-visual-label">Uptime Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="about-section about-vision">
        <div className="about-container">
          <div className="about-grid about-grid-reverse">
            <div className="about-grid-visual">
              <div className="about-visual-accent">
                <div className="about-accent-line"></div>
                <div className="about-accent-line"></div>
                <div className="about-accent-line"></div>
              </div>
            </div>
            <div className="about-grid-content">
              <span className="about-label">Our Vision</span>
              <h2 className="about-section-title">A World Powered by Trust</h2>
              <p className="about-text">
                We envision a future where blockchain is the invisible backbone of 
                global commerce, governance, and communication. A world where trust is 
                programmatic, transparency is default, and intermediaries are obsolete.
              </p>
              <p className="about-text">
                OpenScan.ai is building the infrastructure to make this vision a reality — 
                one block at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-section about-values">
        <div className="about-container">
          <span className="about-label">What We Stand For</span>
          <h2 className="about-section-title">Core Values</h2>
          <div className="about-values-grid">
            {coreValues.map((value, index) => (
              <div className="about-value-card" key={index}>
                <span className="about-value-number">0{index + 1}</span>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
