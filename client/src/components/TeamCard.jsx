import React from 'react';
import './TeamCard.css';

const TeamCard = ({ name, role, bio, imagePlaceholder }) => {
  return (
    <div className="team-card">
      <div className="team-card-image">
        {imagePlaceholder ? (
          <img src={imagePlaceholder} alt={name} />
        ) : (
          <div className="team-card-placeholder">
            <span>{name.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="team-card-content">
        <h3 className="team-card-name">{name}</h3>
        <p className="team-card-role">{role}</p>
        <p className="team-card-bio">{bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;