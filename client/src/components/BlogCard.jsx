import { Link } from 'react-router-dom';
import './BlogCard.css';

// Category icon mapping
const categoryIcons = {
  'AI Infrastructure': 'brain',
  'Cloud Systems': 'cloud',
  'Explorer Research': 'globe',
  'Security': 'shield',
  'Engineering': 'code',
  'Analytics': 'chart',
  'Technology': 'cpu',
  'Infrastructure': 'server',
  'Industry': 'briefcase',
  'Cloud': 'cloud',
};

function BlogCard({ blog }) {
  const iconName = categoryIcons[blog.category] || 'file';
  const articleId = `BS-${String(blog.id).padStart(3, '0')}`;

  return (
    <article className="intel-card">
      {/* Top bar: ID + Category */}
      <div className="intel-card__header">
        <span className="intel-card__id">{articleId}</span>
        <span className="intel-card__category">{blog.category}</span>
      </div>

      {/* Content area — 80% */}
      <div className="intel-card__content">
        <h3 className="intel-card__title">
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </h3>
        <p className="intel-card__excerpt">{blog.excerpt}</p>
      </div>

      {/* Visual icon area — 20% with HUD circles */}
      <div className="intel-card__visual">
        <div className="intel-card__hud">
          <div className="hud-circle hud-circle--outer" />
          <div className="hud-circle hud-circle--inner" />
          <div className="hud-icon">
            <CategoryIcon name={iconName} />
          </div>
        </div>
      </div>

      {/* Footer: Author + Read Time + CTA */}
      <div className="intel-card__footer">
        <div className="intel-card__author">
          <img src={blog.authorAvatar} alt={blog.author} className="intel-card__avatar" />
          <span className="intel-card__author-name">{blog.author}</span>
        </div>
        <span className="intel-card__read-time">{blog.readTime}</span>
      </div>

      <Link to={`/blogs/${blog.id}`} className="intel-card__cta">
        READ MORE <span className="intel-card__cta-arrow">→</span>
      </Link>
    </article>
  );
}

function CategoryIcon({ name }) {
  const icons = {
    brain: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z" />
      </svg>
    ),
    cloud: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19c0-1.7-1.3-3-3-3h-11a3 3 0 0 1-3-3 3 3 0 0 1 3-3h.5" />
        <path d="M17.5 19a5 5 0 0 0 0-10h-1.5" />
        <path d="M13 6a5 5 0 0 0-10 0 4.5 4.5 0 0 0 0 9h1" />
      </svg>
    ),
    globe: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    shield: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    code: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    chart: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
    cpu: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M15 2v2" /><path d="M15 20v2" />
        <path d="M2 15h2" /><path d="M2 9h2" />
        <path d="M20 15h2" /><path d="M20 9h2" />
        <path d="M9 2v2" /><path d="M9 20v2" />
      </svg>
    ),
    server: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <path d="M6 6h.01" /><path d="M6 18h.01" />
      </svg>
    ),
    briefcase: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    file: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  };
  return icons[name] || icons.file;
}

export default BlogCard;
