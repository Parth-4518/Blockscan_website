import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar({ visible = true }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [shouldShow, setShouldShow] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      if (y > 80) {
        setShouldShow(true)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!visible) {
      setShouldShow(false)
      return
    }
    const timer = setTimeout(() => {
      setShouldShow(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [visible])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const navLinks = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/team', label: 'Team' },
  ]

  const isVisible = visible && shouldShow

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${isVisible ? 'navbar-visible' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand" onClick={closeMobileMenu}>
          <span className="navbar-brand-text">OpenScan.AI</span>
        </NavLink>

        <div className={`navbar-links ${mobileMenuOpen ? 'navbar-links-open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `navbar-link ${isActive ? 'navbar-link-active' : ''}`
              }
              onClick={closeMobileMenu}
            >
              <span className="navbar-link-text">{link.label}</span>
              <span className="navbar-link-underline" />
            </NavLink>
          ))}
        </div>

        <button
          className="navbar-mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`navbar-hamburger ${mobileMenuOpen ? 'navbar-hamburger-open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
