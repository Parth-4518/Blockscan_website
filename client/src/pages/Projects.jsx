import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Explorer', 'API', 'Analytics', 'Security', 'Wallet', 'DeFi', 'Cloud', 'AI Infrastructure'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="projects-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <span className="tag">Portfolio</span>
          <h1 className="page-header__title">Projects</h1>
          <p className="page-header__subtitle">
            OpenScanAI builds the infrastructure that powers the future of blockchain. 
            Explore our suite of tools and platforms for the XDC ecosystem.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid section">
        <div className="container">
          {/* Filter Buttons */}
          <div className="filter-bar">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;