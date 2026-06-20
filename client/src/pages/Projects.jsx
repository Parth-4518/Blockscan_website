import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Explorer', 'API', 'Analytics', 'Security', 'Wallet', 'DeFi'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);
  
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="projects-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <span className="tag">Portfolio</span>
          <h1 className="page-header__title">Projects</h1>
          <p className="page-header__subtitle">
            Building the infrastructure that powers the future of blockchain. 
            Explore our suite of tools and platforms.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">Featured Projects</h2>
            <p className="section-header__subtitle">
              Our flagship products leading innovation in blockchain technology
            </p>
          </div>
          <div className="featured-grid">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">All Projects</h2>
            <p className="section-header__subtitle">
              Complete portfolio of our blockchain tools and platforms
            </p>
          </div>
          
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
