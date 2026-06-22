import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/careers', label: 'Careers' },
    { path: '/engagement', label: 'Engagement' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          BLOCK<span>SCAN</span>
        </Link>
        
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path}
                className={`navbar__link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
