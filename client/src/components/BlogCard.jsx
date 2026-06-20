import { Link } from 'react-router-dom';
import './BlogCard.css';

function BlogCard({ blog }) {
  return (
    <article className="blog-card">
      <div className="blog-card__image-wrapper">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="blog-card__image"
        />
        <span className="blog-card__category">{blog.category}</span>
      </div>
      <div className="blog-card__content">
        <div className="blog-card__meta">
          <span className="blog-card__date">{blog.date}</span>
          <span className="blog-card__read-time">{blog.readTime}</span>
        </div>
        <h3 className="blog-card__title">
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </h3>
        <p className="blog-card__excerpt">{blog.excerpt}</p>
        <div className="blog-card__author">
          <img src={blog.authorAvatar} alt={blog.author} className="blog-card__avatar" />
          <span className="blog-card__author-name">{blog.author}</span>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
