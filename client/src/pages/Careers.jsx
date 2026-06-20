import { useState } from 'react';
import careers from '../data/careers';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Careers.css';

function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applyModal, setApplyModal] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', resume: '', coverLetter: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const headerRef = useScrollAnimation();
  const cultureRef = useScrollAnimation();
  const positionsRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const openApply = (job) => {
    setApplyModal(job);
    setSubmitted(false);
    setFormData({ name: '', email: '', resume: '', coverLetter: '' });
  };

  const closeApply = () => {
    setApplyModal(null);
    setSubmitted(false);
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => closeApply(), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const cultureValues = [
    {
      icon: 'globe',
      title: 'Remote First',
      text: 'Work from anywhere in the world. We believe great talent isn\'t limited by geography.',
    },
    {
      icon: 'zap',
      title: 'Fast Moving',
      text: 'Ship fast, iterate faster. We value momentum and continuous improvement.',
    },
    {
      icon: 'git-branch',
      title: 'Open Source',
      text: 'We contribute to and build open source tools that benefit the entire ecosystem.',
    },
    {
      icon: 'book-open',
      title: 'Learning Culture',
      text: 'Deep dive into blockchain technology. We encourage exploration and growth.',
    },
  ];

  return (
    <div className="careers-page">
      {/* Page Header */}
      <section className="page-header" ref={headerRef}>
        <div className="container">
          <span className="tag">Join Us</span>
          <h1 className="page-header__title">Careers</h1>
          <p className="page-header__subtitle">
            Help us build the infrastructure that powers the future of blockchain.
            We're always looking for exceptional talent.
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="company-culture section" ref={cultureRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Why Blockscan</h2>
            <p className="section-header__subtitle">
              We're building a team of passionate individuals who believe in open, accessible blockchain data
            </p>
          </div>

          <div className="culture-grid stagger-children">
            {cultureValues.map((item, index) => (
              <div key={index} className="culture-card fade-in scale-in">
                <div className="culture-card__icon">
                  <CultureIcon name={item.icon} />
                </div>
                <h3 className="culture-card__title">{item.title}</h3>
                <p className="culture-card__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="open-positions section" ref={positionsRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Open Positions</h2>
            <p className="section-header__subtitle">
              Find your next role and help us build the future of blockchain exploration
            </p>
          </div>

          <div className="positions-list">
            {careers.map(job => (
              <div
                key={job.id}
                className={`position-card ${selectedJob === job.id ? 'expanded' : ''}`}
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
              >
                <div className="position-card__header">
                  <div className="position-card__info">
                    <h3 className="position-card__title">{job.title}</h3>
                    <div className="position-card__meta">
                      <span className="position-card__department">{job.department}</span>
                      <span className="position-card__location">{job.location}</span>
                      <span className="position-card__type">{job.type}</span>
                    </div>
                  </div>
                  <div className="position-card__arrow">
                    {selectedJob === job.id ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    )}
                  </div>
                </div>

                {selectedJob === job.id && (
                  <div className="position-card__details">
                    <p className="position-card__description">{job.description}</p>
                    <div className="position-card__requirements">
                      <h4>Requirements:</h4>
                      <ul>
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <button className="btn btn--primary" onClick={(e) => { e.stopPropagation(); openApply(job); }}>
                      Apply Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="apply-cta section" ref={ctaRef}>
        <div className="container">
          <div className="cta-box fade-in scale-in">
            <h2 className="cta-box__title">Don't see a perfect fit?</h2>
            <p className="cta-box__text">
              We're always interested in meeting talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="btn btn--primary btn--large" onClick={() => openApply({ title: 'Open Application' })}>
              Send Open Application
            </button>
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      {applyModal && (
        <div className="modal-overlay" onClick={closeApply}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeApply} aria-label="Close modal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>

            <h2 className="modal__title">Apply for {applyModal.title}</h2>
            <p className="modal__subtitle">Fill out the form below and we'll get back to you within 48 hours.</p>

            {submitted ? (
              <div className="form-success" style={{ marginTop: '24px' }}>
                <strong>Application sent!</strong><br />
                Thank you for your interest. We'll review your application and contact you soon.
              </div>
            ) : (
              <form className="apply-form" onSubmit={handleApplySubmit}>
                <div className="form-group">
                  <label htmlFor="apply-name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="apply-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="apply-email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="apply-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="apply-resume" className="form-label">Resume Link</label>
                  <input
                    type="url"
                    id="apply-resume"
                    name="resume"
                    value={formData.resume}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="apply-cover" className="form-label">Cover Letter</label>
                  <textarea
                    id="apply-cover"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows="4"
                    className="form-textarea"
                    placeholder="Tell us why you're interested in this role..."
                  />
                </div>

                <button type="submit" className={`btn btn--primary btn--large ${submitting ? 'btn-loading' : ''}`} disabled={submitting}>
                  {submitting ? 'Sending...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function CultureIcon({ name }) {
  const icons = {
    globe: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    zap: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    'git-branch': (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>
      </svg>
    ),
    'book-open': (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  };
  return icons[name] || null;
}

export default Careers;