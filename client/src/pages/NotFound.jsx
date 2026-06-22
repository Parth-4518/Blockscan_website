import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__code glitch-text" data-text="404">404</div>
      <h1 className="not-found__title">Page Not Found</h1>
      <p className="not-found__text">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn--primary btn--large">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
