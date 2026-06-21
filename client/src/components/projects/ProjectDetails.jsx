import './ProjectDetails.css';

function ProjectDetails({ project, isVisible }) {
  if (!project) return null;

  const isExternal = project.link && project.link !== '#';

  return (
    <div className={`project-details ${isVisible ? 'visible' : ''}`}>
      <div className="project-details__poster">
        {/* LEFT: Editorial Info */}
        <div className="project-details__info">
          <span className="project-details__category">{project.category}</span>

          <h2 className="project-details__title">
            {project.title}
          </h2>

          <p className="project-details__description">
            {project.description}
          </p>

          {isExternal ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-details__cta"
            >
              <span>OPEN PROJECT</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          ) : (
            <span className="project-details__cta project-details__cta--disabled">
              COMING SOON
            </span>
          )}

          <div className="project-details__meta-row">
            <div className="project-details__meta-item">
              <span className="project-details__meta-label">PROJECT ID</span>
              <span className="project-details__meta-value">{String(project.id).padStart(2, '0')}</span>
            </div>
            <div className="project-details__meta-item">
              <span className="project-details__meta-label">STATUS</span>
              <span className="project-details__meta-value project-details__meta-value--active">
                <span className="project-details__status-dot" />
                ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Showcase Panel */}
        <div className="project-details__showcase">
          <div className="project-details__corner project-details__corner--tl" aria-hidden="true" />
          <div className="project-details__corner project-details__corner--tr" aria-hidden="true" />
          <div className="project-details__corner project-details__corner--bl" aria-hidden="true" />
          <div className="project-details__corner project-details__corner--br" aria-hidden="true" />

          {/* Project showcase image */}
          <div className="project-details__showcase-map-wrapper">
            <img
              src={project.explanationImage || project.image}
              alt=""
              className="project-details__showcase-map"
              loading="eager"
            />
          </div>

          <span className="project-details__index" aria-hidden="true">
            {String(project.id).padStart(2, '0')} / 05
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;