import { useState } from 'react';
import careers from '../data/careers';
import './Careers.css';

function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="careers-page">
      {/* Page Header */}
      <section className="page-header">
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
      <section className="company-culture section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Why Blockscan</h2>
            <p className="section-header__subtitle">
              We're building a team of passionate individuals who believe in open, accessible blockchain data
            </p>
          </div>
          
          <div className="culture-grid">
            <div className="culture-card">
              <div className="culture-card__icon">🚀</div>
              <h3 className="culture-card__title">Remote First</h3>
              <p className="culture-card__text">Work from anywhere in the world. We believe great talent isn't limited by geography.</p>
            </div>
            <div className="culture-card">
              <div className="culture-card__icon">⚡</div>
              <h3 className="culture-card__title">Fast Moving</h3>
              <p className="culture-card__text">Ship fast, iterate faster. We value momentum and continuous improvement.</p>
            </div>
            <div className="culture-card">
              <div className="culture-card__icon">🔗</div>
              <h3 className="culture-card__title">Open Source</h3>
              <p className="culture-card__text">We contribute to and build open source tools that benefit the entire ecosystem.</p>
            </div>
            <div className="culture-card">
              <div className="culture-card__icon">💡</div>
              <h3 className="culture-card__title">Learning Culture</h3>
              <p className="culture-card__text">Deep dive into blockchain technology. We encourage exploration and growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="open-positions section">
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
                    {selectedJob === job.id ? '−' : '+'}
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
                    <button className="btn btn--primary">Apply Now</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="apply-cta section">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-box__title">Don't see a perfect fit?</h2>
            <p className="cta-box__text">
              We're always interested in meeting talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="btn btn--primary btn--large">Send Open Application</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;