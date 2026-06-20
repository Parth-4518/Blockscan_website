import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Team from './pages/Team'
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
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
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
