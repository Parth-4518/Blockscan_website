import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand-section">
            <div className="footer__brand">BLOCK<span>SCAN</span></div>
            <p className="footer__description">
              The fastest growing Blockchain Explorer, Search, API and Analytics Platform. 
              Built for the EVM ecosystem with the mission of providing equitable access to blockchain data.
            </p>
          </div>
          
          <div className="footer__column">
            <h4 className="footer__heading">Platform</h4>
            <ul className="footer__links">
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/engagement">Engagement</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer__column">
            <h4 className="footer__heading">Resources</h4>
            <ul className="footer__links">
              <li><a href="#" target="_blank" rel="noopener noreferrer">API Docs</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Explorer</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Analytics</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
          
          <div className="footer__column">
            <h4 className="footer__heading">Connect</h4>
            <ul className="footer__links">
              <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Telegram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Blockscan. All rights reserved.
          </p>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="Discord">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
