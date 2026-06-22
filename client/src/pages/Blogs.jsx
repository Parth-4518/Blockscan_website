import { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import blogs from '../data/blogs';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Blogs.css';

function Blogs() {
  const [filter, setFilter] = useState('All');
  const headerRef = useScrollAnimation();
  const featuredRef = useScrollAnimation();
  const gridRef = useScrollAnimation();

  const categories = ['All', ...new Set(blogs.map(b => b.category))];
  const featuredBlog = blogs[0];
  const filteredBlogs = filter === 'All'
    ? blogs.slice(1)
    : blogs.filter(b => b.category === filter);

  return (
    <div className="blogs-page">
      {/* Page Header */}
      <section className="page-header" ref={headerRef}>
        <div className="container">
          <span className="tag">Insights</span>
          <h1 className="page-header__title">Blogs</h1>
          <p className="page-header__subtitle">
            Thoughts, tutorials, and insights from the team building the future of blockchain exploration.
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="blog-listing section" ref={gridRef}>
        <div className="container">
          {/* Filter Bar */}
          <div className="filter-bar filter-bar-scroll">
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

          <div className="blogs-grid">
            {filteredBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;