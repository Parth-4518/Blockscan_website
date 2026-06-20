import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', inquiryType: '', subject: '', message: '', newsletter: false });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const faqRef = useScrollAnimation();

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setErrors({ submit: 'Failed to send message. Please try again.' });
      }
    } catch (err) {
      setErrors({ submit: 'Network error. Please try again later.' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const contactReasons = [
    {
      icon: 'api',
      title: 'API Access',
      desc: 'Get your API key for XDCScan and OpenScanAI data feeds.',
    },
    {
      icon: 'partner',
      title: 'Partnerships',
      desc: 'Integrate with XDCScan or explore enterprise blockchain solutions.',
    },
    {
      icon: 'support',
      title: 'Support',
      desc: 'Need help with our explorer, API, or wallet tools?',
    },
    {
      icon: 'career',
      title: 'Careers',
      desc: 'Join our team in Mumbai. Check open roles on our Careers page.',
    },
  ];

  const faqs = [
    {
      q: 'How do I get API access?',
      a: 'Fill out the contact form with "API Access" as the subject. Our team will provision your API key within 24 hours.',
    },
    {
      q: 'What chains does XDCScan support?',
      a: 'Currently XDC Network mainnet and apothem testnet. We are expanding to other EVM-compatible chains.',
    },
    {
      q: 'Can I integrate XDCScan into my dApp?',
      a: 'Yes. Use our OpenScan API for programmatic access to blocks, transactions, and smart contract data.',
    },
    {
      q: 'Where is OpenScanAI based?',
      a: 'We are headquartered in Mumbai, Maharashtra, India with team members working remotely across the country.',
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header" ref={headerRef}>
        <div className="container">
          <span className="tag">Get in Touch</span>
          <h1 className="page-header__title">Contact Us</h1>
          <p className="page-header__subtitle">
            Have a question, partnership idea, or need API access? 
            Our team in Mumbai is here to help.
          </p>
        </div>
      </section>

      {/* Contact Reasons */}
      <section className="contact-reasons section">
        <div className="container">
          <div className="reasons-grid">
            {contactReasons.map((reason, i) => (
              <div className="reason-card" key={i}>
                <div className="reason-card__icon">
                  {reason.icon === 'api' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                    </svg>
                  )}
                  {reason.icon === 'partner' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  )}
                  {reason.icon === 'support' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  )}
                  {reason.icon === 'career' && (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                  )}
                </div>
                <h3 className="reason-card__title">{reason.title}</h3>
                <p className="reason-card__desc">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="contact-content section" ref={contentRef}>
        <div className="container">
          <div className="contact-grid contact-grid--form-first">
            {/* Contact Form - NOW ON THE LEFT/TOP */}
            <div className="contact-form-wrapper fade-in-left">
              <h2 className="contact-form__title">Send a Message</h2>
              <p className="contact-form__subtitle">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
              {submitted ? (
                <div className="form-success">
                  <div className="form-success__icon">
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#DFFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <h3 className="form-success__title">Message Sent!</h3>
                  <p className="form-success__text">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  {errors.submit && <div className="form-error form-error--banner">{errors.submit}</div>}

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        placeholder="Your name"
                        autoComplete="name"
                      />
                      {errors.name && <div className="form-error">{errors.name}</div>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="your@email.com"
                        autoComplete="email"
                      />
                      {errors.email && <div className="form-error">{errors.email}</div>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="company" className="form-label">Company / Organization (Optional)</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Acme Corp"
                        autoComplete="organization"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiryType" className="form-label">Inquiry Type *</label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className={`form-select ${errors.inquiryType ? 'error' : ''}`}
                    >
                      <option value="">Select an option</option>
                      <option value="api">API Access</option>
                      <option value="partnership">Partnership / Enterprise</option>
                      <option value="support">Technical Support</option>
                      <option value="careers">Careers</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    {errors.inquiryType && <div className="form-error">{errors.inquiryType}</div>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`form-input ${errors.subject ? 'error' : ''}`}
                      placeholder="How can we help?"
                    />
                    {errors.subject && <div className="form-error">{errors.subject}</div>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                      placeholder="Tell us more about your project or question..."
                    />
                    {errors.message && <div className="form-error">{errors.message}</div>}
                  </div>

                  <div className="form-checkbox-group">
                    <label className="form-checkbox-label">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="form-checkbox"
                      />
                      <span className="form-checkbox__text">Subscribe to our newsletter for product updates and blockchain insights</span>
                    </label>
                  </div>

                  <button type="submit" className={`btn btn--primary btn--large ${submitting ? 'btn-loading' : ''}`} disabled={submitting}>
                    {submitting ? (
                      <>
                        <span className="btn-spinner" />
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information - NOW ON THE RIGHT/BOTTOM */}
            <div className="contact-info fade-in-right">
              <h2 className="contact-info__title">Let's Talk</h2>
              <p className="contact-info__text">
                Whether you're interested in our API, have a partnership proposal, or just want to say hello — we're here. Based in Mumbai, Maharashtra, India.
              </p>

              <div className="contact-info__items">
                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>hello@openscan.ai</p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>Mumbai, Maharashtra, India</p>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="contact-info__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Response Time</h4>
                    <p>Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <h4>Follow Us</h4>
                <div className="contact-social__links">
                  <a href="https://twitter.com/openscanai" target="_blank" rel="noopener noreferrer" className="contact-social__link" aria-label="Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/openscanai" target="_blank" rel="noopener noreferrer" className="contact-social__link" aria-label="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                  </a>
                  <a href="https://discord.gg/openscanai" target="_blank" rel="noopener noreferrer" className="contact-social__link" aria-label="Discord">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/company/openscanai" target="_blank" rel="noopener noreferrer" className="contact-social__link" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a href="https://t.me/openscanai" target="_blank" rel="noopener noreferrer" className="contact-social__link" aria-label="Telegram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 3L2 10l7 3.5L18 6l-8.5 9L18 21l4-18z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section" ref={faqRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Frequently Asked Questions</h2>
            <p className="section-header__subtitle">Quick answers to common questions</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className={`faq-item ${openFaq === i ? 'open' : ''}`} key={i}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="faq-chevron">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
