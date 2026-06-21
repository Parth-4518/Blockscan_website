import { useState } from 'react';
import VhsCarousel from '../components/projects/VhsCarousel';
import projects from '../data/projects';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="projects-page">
      {/* Background layers */}
      <div className="projects-page__grid" aria-hidden="true" />
      <div className="projects-page__scanlines" aria-hidden="true" />

      {/* Header */}
      <header className="archive-header">
        <div className="archive-meta">
          <span className="archive-meta__id">ARCHIVE // X7K9M2P1</span>
          <span className="archive-meta__divider" />
          <span className="archive-meta__count">{String(filteredProjects.length).padStart(2, '0')} ENTRIES</span>
          <span className="archive-meta__divider" />
          <span className="archive-meta__status">ACCESS GRANTED</span>
        </div>
        <h1 className="archive-title">PROJECT ARCHIVE</h1>
        <p className="archive-subtitle">
          Explore the Blockscan ecosystem. A curated collection of blockchain infrastructure, 
          analytics tools, and decentralized applications.
        </p>
        <div className="archive-timeline">
          <div className="archive-timeline__line" />
          <div className="archive-timeline__marker" />
          <span className="archive-timeline__label">CURRENT VIEW</span>
          <div className="archive-timeline__line" />
        </div>
      </header>

      {/* Filter */}
      <section className="projects-filter">
        <div className="filter-label">FILTER BY CATEGORY</div>
        <div className="filter-bar">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Carousel */}
      <section className="projects-carousel">
        <VhsCarousel projects={filteredProjects} />
      </section>

      {/* Footer */}
      <footer className="archive-footer">
        <div className="archive-footer__line" />
        <div className="archive-footer__meta">
          <span>END OF ARCHIVE</span>
          <span>•</span>
          <span>{String(filteredProjects.length).padStart(2, '0')} ENTRIES INDEXED</span>
          <span>•</span>
          <span>LAST UPDATED: 2026.06.20</span>
        </div>
        <div className="archive-footer__deco">BLOCKSCAN SYSTEM // V.2.4</div>
      </footer>
    </div>
  );
}

export default Projects;