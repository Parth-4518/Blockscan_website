const EngagementCard = ({ icon: Icon, title, description, link, linkText, badge, badgeColor, toolIcon }) => {
  return (
    <div className="engagement-card">
      <div className="engagement-card__header">
        <div className="engagement-card__icon">
          <Icon size={24} />
        </div>
        {badge && (
          <span 
            className="engagement-card__badge"
            style={{ 
              color: badgeColor,
              borderColor: `${badgeColor}30`,
              backgroundColor: `${badgeColor}10`
            }}
          >
            {badge}
          </span>
        )}
      </div>
      {toolIcon && (
        <div className="engagement-card__tool-icon">{toolIcon}</div>
      )}
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
