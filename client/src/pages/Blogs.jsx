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

      {/* Featured Article */}
      <section className="featured-blog section" ref={featuredRef}>
        <div className="container">
          <div className="featured-blog__card fade-in">
            <div className="featured-blog__image-wrapper">
              <img src={featuredBlog.image} alt={featuredBlog.title} className="featured-blog__image" />
              <span className="featured-blog__badge">Featured</span>
            </div>
            <div className="featured-blog__content">
              <div className="featured-blog__meta">
                <span className="featured-blog__category">{featuredBlog.category}</span>
                <span className="featured-blog__date">{featuredBlog.date}</span>
                <span className="featured-blog__read-time">{featuredBlog.readTime}</span>
              </div>
              <h2 className="featured-blog__title">
                <Link to={`/blogs/${featuredBlog.id}`}>{featuredBlog.title}</Link>
              </h2>
              <p className="featured-blog__excerpt">{featuredBlog.excerpt}</p>
              <div className="featured-blog__author">
                <img src={featuredBlog.authorAvatar} alt={featuredBlog.author} className="featured-blog__avatar" />
                <span className="featured-blog__author-name">{featuredBlog.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="blog-listing section" ref={gridRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-header__title">All Articles</h2>
            <p className="section-header__subtitle">Browse our complete collection of insights and tutorials</p>
          </div>

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

          <div className="blogs-grid stagger-children">
            {filteredBlogs.map(blog => (
              <div key={blog.id} className="fade-in">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;