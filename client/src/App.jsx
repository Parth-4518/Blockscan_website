import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Services from './pages/Services'
import Team from './pages/Team'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Engagement from './pages/Engagement'
import Enhancement from './pages/Enhancement'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav className="app-nav">
        <div className="nav-brand">OpenScan.ai</div>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/engagement">Engagement</NavLink>
          <NavLink to="/enhancement">Enhancement</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/enhancement" element={<Enhancement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <section id="center">
      <h1>OpenScan.ai Technologies</h1>
      <p>Welcome to the future of blockchain infrastructure.</p>
    </section>
  )
}

export default App
