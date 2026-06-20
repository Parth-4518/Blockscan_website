import React from 'react';

const CommunityCard = ({ icon: Icon, title, description, members, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="community-card">
      <div className="community-card__icon">
        <Icon size={28} />
      </div>
      <div className="community-card__content">
        <h3 className="community-card__title">{title}</h3>
        <p className="community-card__desc">{description}</p>
        {members && <span className="community-card__members">{members} members</span>}
      </div>
      <div className="community-card__arrow">→</div>
    </a>
  );
};

export default CommunityCard;
