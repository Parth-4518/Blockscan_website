import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Engagement from './pages/Engagement'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <>
      <div className="crt-overlay active" aria-hidden="true" />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Projects />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="engagement" element={<Engagement />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App