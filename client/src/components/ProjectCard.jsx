import './ProjectCard.css';

function ProjectCard({ project }) {
  const isExternal = project.link && project.link !== '#';
  
  return (
    <div className="project-card">
      <div className="project-card__image-wrapper">
        <img 
          src={project.image} 
          alt={project.title}
          className="project-card__image"
        />
        <div className="project-card__overlay">
          <span className="project-card__tag">{project.category}</span>
        </div>
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__meta">
          <span className="project-card__tech">{project.tech}</span>
          {isExternal ? (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-card__link"
            >
              View Project →
            </a>
          ) : (
            <span className="project-card__link project-card__link--disabled">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
