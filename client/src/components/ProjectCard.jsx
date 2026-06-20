import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ project }) {
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
          <Link to={`/projects/${project.id}`} className="project-card__link">
            View Project →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
