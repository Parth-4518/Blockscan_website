import { useState } from 'react';
import BlogCard from '../components/BlogCard';
import blogs from '../data/blogs';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Blogs.css';

const ITEMS_PER_PAGE = 6;

function Blogs() {
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const headerRef = useScrollAnimation();
  const signalsRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  const categories = ['All', ...new Set(blogs.map(b => b.category))];
  const filteredBlogs = filter === 'All'
    ? blogs
    : blogs.filter(b => b.category === filter);

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleFilter = (category) => {
    setFilter(category);
    setCurrentPage(1);
  };

  const signals = [
    { label: 'AI INFRASTRUCTURE', change: '+12.4%', icon: 'brain' },
    { label: 'CLOUD SYSTEMS', change: '+8.7%', icon: 'cloud' },
    { label: 'EXPLORER RESEARCH', change: '+16.2%', icon: 'globe' },
    { label: 'SECURITY', change: '+6.1%', icon: 'shield' },
  ];

  return (
    <div className="blogs-page">
      {/* Thin grid background */}
      <div className="blogs-page__grid" aria-hidden="true" />

      {/* Page Header */}
      <section className="journal-header" ref={headerRef}>
        <div className="container">
          <div className="journal-header__label">INTELLIGENCE JOURNAL</div>
          <h1 className="journal-header__title">BLOGS</h1>
          <p className="journal-header__subtitle">
            Insights, research and engineering notes from the teams building blockchain infrastructure.
          </p>
        </div>
      </section>

      {/* Today's Signals Bar */}
      <section className="signals-bar" ref={signalsRef}>
        <div className="container">
          <div className="signals-bar__inner">
            <div className="signals-bar__title">TODAY'S SIGNALS</div>
            <div className="signals-bar__items">
              {signals.map((signal) => (
                <div key={signal.label} className="signal-item">
                  <span className="signal-item__icon">
                    <SignalIcon name={signal.icon} />
                  </span>
                  <span className="signal-item__label">{signal.label}</span>
                  <span className="signal-item__change">{signal.change}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="journal-listing" ref={gridRef}>
        <div className="container">
          {/* Section Header */}
          <div className="journal-section__header">
            <span className="journal-section__label">LATEST ENTRIES</span>
            <div className="journal-section__line" />
            <span className="journal-section__count">
              {String(filteredBlogs.length).padStart(2, '0')} ARTICLES
            </span>
          </div>

          {/* Filter Bar */}
          <div className="filter-bar filter-bar-scroll">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-chip ${filter === category ? 'active' : ''}`}
                onClick={() => handleFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="journal-grid">
            {paginatedBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="journal-pagination">
              <button
                className="journal-pagination__btn"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                ←
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  className={`journal-pagination__page ${currentPage === page ? 'active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}

              <button
                className="journal-pagination__btn"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                →
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function SignalIcon({ name }) {
  const icons = {
    brain: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z" />
      </svg>
    ),
    cloud: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19c0-1.7-1.3-3-3-3h-11a3 3 0 0 1-3-3 3 3 0 0 1 3-3h.5" />
        <path d="M17.5 19a5 5 0 0 0 0-10h-1.5" />
        <path d="M13 6a5 5 0 0 0-10 0 4.5 4.5 0 0 0 0 9h1" />
      </svg>
    ),
    globe: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    shield: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  };
  return icons[name] || null;
}

export default Blogs;