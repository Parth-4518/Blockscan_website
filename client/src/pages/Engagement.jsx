import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Engagement.css';

function Engagement() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const headerRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const partnersRef = useScrollAnimation();
  const eventsRef = useScrollAnimation();
  const newsletterRef = useScrollAnimation();

  const stats = [
    { value: '2.4M+', label: 'API Calls Daily', icon: 'activity' },
    { value: '150K+', label: 'Active Developers', icon: 'users' },
    { value: '45+', label: 'Supported Chains', icon: 'link' },
    { value: '99.9%', label: 'Uptime SLA', icon: 'shield' },
  ];

  const partners = [
    { name: 'Ethereum Foundation', logo: 'EF' },
    { name: 'Polygon Labs', logo: 'PL' },
    { name: 'Arbitrum', logo: 'ARB' },
    { name: 'Optimism', logo: 'OP' },
    { name: 'Chainlink', logo: 'CL' },
    { name: 'The Graph', logo: 'TG' },
  ];

  const events = [
    {
      title: 'ETHGlobal Hackathon',
      date: 'July 15-17, 2026',
      location: 'San Francisco, CA',
      description: 'Join us for a 48-hour hackathon building the next generation of blockchain explorers.',
      status: 'Upcoming',
    },
    {
      title: 'Blockscan Developer Summit',
      date: 'August 22, 2026',
      location: 'Virtual Event',
      description: 'Annual summit for developers building on the Blockscan API and Explorer platform.',
      status: 'Registration Open',
    },
    {
      title: 'Smart Contract Security Workshop',
      date: 'September 10, 2026',
      location: 'Remote',
      description: 'Hands-on workshop covering verification tools and security best practices.',
      status: 'Coming Soon',
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="engagement-page">
      {/* Page Header */}
      <section className="page-header" ref={headerRef}>
        <div className="container">
          <span className="tag">Community</span>
          <h1 className="page-header__title glitch-text" data-text="Engagement">Engagement</h1>
          <p className="page-header__subtitle">
            Join a growing ecosystem of developers, researchers, and blockchain enthusiasts building the future of on-chain data.
          </p>
        </div>
      </section>

      {/* Community Stats */}
      <section className="community-stats section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card fade-in scale-in" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="stat-card__icon">
                  <StatIcon name={stat.icon} />
                </div>
                <div className="stat-card__value">{stat.value}</div>
                <div className="stat-card__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners-section section" ref={partnersRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Ecosystem Partners</h2>
            <p className="section-header__subtitle">
              Trusted by leading protocols and infrastructure providers across the blockchain space
            </p>
          </div>
          <div className="partners-grid stagger-children">
            {partners.map((partner, index) => (
              <div key={index} className="partner-card fade-in scale-in">
                <div className="partner-card__logo">{partner.logo}</div>
                <div className="partner-card__name">{partner.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="events-section section" ref={eventsRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Upcoming Events</h2>
            <p className="section-header__subtitle">
              Connect with the community at conferences, hackathons, and workshops
            </p>
          </div>
          <div className="events-list stagger-children">
            {events.map((event, index) => (
              <div key={index} className="event-card fade-in">
                <div className="event-card__content">
                  <div className="event-card__meta">
                    <span className="event-card__status">{event.status}</span>
                    <span className="event-card__date">{event.date}</span>
                  </div>
                  <h3 className="event-card__title">{event.title}</h3>
                  <p className="event-card__description">{event.description}</p>
                  <div className="event-card__location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="event-card__action">
                  <button className="btn btn--outline btn--small">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section section" ref={newsletterRef}>
        <div className="container">
          <div className="newsletter-box fade-in scale-in">
            <div className="newsletter-content">
              <h2 className="newsletter__title">Stay in the Loop</h2>
              <p className="newsletter__text">
                Get the latest updates on new features, API releases, and community events delivered to your inbox.
              </p>
            </div>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              {subscribed ? (
                <div className="form-success">Thanks for subscribing! Check your inbox for confirmation.</div>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="form-input newsletter-input"
                    required
                  />
                  <button type="submit" className="btn btn--primary newsletter-btn">
                    Subscribe
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatIcon({ name }) {
  const icons = {
    activity: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    users: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    link: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    shield: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  };
  return icons[name] || null;
}

export default Engagement;
