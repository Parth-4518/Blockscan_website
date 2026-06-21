import './VhsProject.css';

function VhsProject({ project, isActive, index }) {
  const categoryColors = {
    'Explorer': '#2BF0FF',
    'Cloud': '#4ECDC4',
    'Analytics': '#7B8FA8',
    'AI': '#39FF88',
    'AI Infrastructure': '#7A3CFF',
    'Security': '#C75B5B',
    'Wallet': '#7A3CFF',
    'DeFi': '#4ECDC4',
    'API': '#7B8FA8',
  };

  const accentColor = categoryColors[project.category] || '#2BF0FF';

  // Generate pseudo-random coordinates based on project id
  const coordX = (40 + project.id * 3.7).toFixed(4);
  const coordY = (-74 + project.id * 2.3).toFixed(4);

  return (
    <div className={`vhs-project ${isActive ? 'active' : ''}`}>
      {/* VHS Tape Case */}
      <div className="vhs-project__case" style={{ '--accent': accentColor }}>
        {/* Wear marks */}
        <div className="vhs-project__wear" />

        {/* Spine */}
        <div className="vhs-project__spine">
          <div className="vhs-project__spine-index">{String(index).padStart(2, '0')}</div>
          <div className="vhs-project__spine-line" style={{ backgroundColor: accentColor }} />
          <div className="vhs-project__spine-title">{project.title}</div>
          <div className="vhs-project__spine-category" style={{ color: accentColor }}>
            {project.category}
          </div>
          <div className="vhs-project__spine-coords">
            X:{coordX} Y:{coordY}
          </div>
        </div>

        {/* Cover (visible when active) */}
        <div className="vhs-project__cover">
          {/* Layer 1: SVG Artwork Background */}
          <div className="vhs-project__cover-artwork">
            <img
              src={project.image}
              alt=""
              className="vhs-project__cover-artwork-img"
              loading="eager"
            />
          </div>

          {/* Layer 2: Premium Typography Overlay */}
          <div className="vhs-project__cover-typography">
            <span className="vhs-project__cover-tag" style={{ color: accentColor }}>
              {project.category}
            </span>
            <h3 className="vhs-project__cover-title">{project.title}</h3>
            <div className="vhs-project__cover-divider" style={{ backgroundColor: accentColor }} />
            <p className="vhs-project__cover-subtitle">{project.tech.split('·')[0]}</p>
          </div>

          {/* Layer 3: Material Effects */}
          <div className="vhs-project__cover-material">
            <div className="vhs-project__cover-grain" />
            <div className="vhs-project__cover-scratches" />
            <div className="vhs-project__cover-wear" />
            <div className="vhs-project__cover-glow" style={{ '--glow-color': accentColor }} />
            <div className="vhs-project__cover-vignette" />
          </div>
        </div>
      </div>

      {/* Bottom label strip */}
      <div className="vhs-project__label">
        <span className="vhs-project__label-text">{project.title}</span>
        <div className="vhs-project__label-barcode">
          <div className="vhs-project__label-barcode-line" />
          <div className="vhs-project__label-barcode-line" />
          <div className="vhs-project__label-barcode-line" />
          <div className="vhs-project__label-barcode-line" />
          <div className="vhs-project__label-barcode-line" />
        </div>
        <span className="vhs-project__label-index">{String(index).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

export default VhsProject;