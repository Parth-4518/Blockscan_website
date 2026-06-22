import React from 'react';

const EngagementCard = ({ icon: Icon, title, description, link, linkText }) => {
  return (
    <div className="engagement-card">
      <div className="engagement-card__icon">
        <Icon size={32} />
      </div>
      <h3 className="engagement-card__title">{title}</h3>
      <p className="engagement-card__desc">{description}</p>
      {link && (
        <a href={link} className="engagement-card__link">
          {linkText || 'Learn More'} →
        </a>
      )}
    </div>
  );
};

export default EngagementCard;
