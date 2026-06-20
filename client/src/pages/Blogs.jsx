import BlogCard from '../components/BlogCard';
import blogs from '../data/blogs';
import './Blogs.css';

function Blogs() {
  return (
    <div className="blogs-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <span className="tag">Insights</span>
          <h1 className="page-header__title">Blogs</h1>
          <p className="page-header__subtitle">
            Thoughts, tutorials, and insights from the team building the future of blockchain exploration.
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="blog-listing section">
        <div className="container">
          <div className="blogs-grid">
            {blogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;