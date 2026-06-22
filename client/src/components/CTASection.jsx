import { ArrowRight } from 'lucide-react';

const CTASection = ({ title, subtitle, buttonText, buttonLink, variant = 'default' }) => {
  return (
    <section className={`cta-section cta-section--${variant}`}>
      <div className="container">
        <div className="cta-card">
          <h2 className="cta-card__title">{title}</h2>
          <p className="cta-card__subtitle">{subtitle}</p>
          <a href={buttonLink} className="btn btn-primary">
            {buttonText} <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
