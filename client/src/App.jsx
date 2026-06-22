import { useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import BlockchainNetwork from './components/three/BlockchainNetwork'
import LoadingScreen from './components/LoadingScreen'
import PageTransition from './components/PageTransition'
import Hero from './components/Hero'
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

function Home({ reveal }) {
  return (
    <>
      <Hero reveal={reveal} />
    </>
  )
}

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false)

  const handleLoadingComplete = useCallback(() => {
    setLoadingComplete(true)
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <BlockchainNetwork active={loadingComplete} />
      {!loadingComplete && <LoadingScreen onComplete={handleLoadingComplete} />}
      <Navbar visible={loadingComplete} />
      <main className="app-main">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home reveal={loadingComplete} />} />
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
        </PageTransition>
      </main>
    </BrowserRouter>
  )
}

export default App
