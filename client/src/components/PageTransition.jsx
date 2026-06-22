import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './PageTransition.css'

function PageTransition({ children }) {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState('fadeIn')

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fadeOut')
      const timer = setTimeout(() => {
        setDisplayLocation(location)
        setTransitionStage('black')
      }, 350)
      return () => clearTimeout(timer)
    }
  }, [location, displayLocation])

  useEffect(() => {
    if (transitionStage === 'black') {
      const timer = setTimeout(() => {
        setTransitionStage('fadeIn')
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [transitionStage])

  return (
    <div className="page-transition-wrapper">
      <div className={`page-transition ${transitionStage}`} key={displayLocation.pathname}>
        {children}
      </div>
      <div className={`page-black-overlay ${transitionStage === 'black' ? 'overlay-visible' : ''}`} />
    </div>
  )
}

export default PageTransition
