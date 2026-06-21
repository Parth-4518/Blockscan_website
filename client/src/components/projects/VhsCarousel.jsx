import { useState, useRef, useEffect } from 'react';
import VhsProject from './VhsProject';
import ProjectDetails from './ProjectDetails';
import './VhsCarousel.css';

function VhsCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [shuffleIndex, setShuffleIndex] = useState(0);
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const activeProject = projects[activeIndex];

  // Shuffle sequence: one full forward rotation through all cards, settle on XDCSCAN
  const shuffleSequence = [1, 2, 3, 0];

  const goTo = (index) => {
    if (isTransitioning || index === activeIndex) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  // Start shuffle on EVERY mount (when user navigates to Projects tab)
  useEffect(() => {
    setIsShuffling(true);
    setActiveIndex(0);
    setShuffleIndex(0);

    let step = 0;
    const totalSteps = shuffleSequence.length;
    const stepDuration = 350;

    const runShuffle = () => {
      if (step >= totalSteps) {
        setShuffleIndex(0);
        setTimeout(() => {
          setIsShuffling(false);
          setActiveIndex(0);
        }, 500);
        return;
      }

      setShuffleIndex(shuffleSequence[step]);
      step++;
      setTimeout(runShuffle, stepDuration);
    };

    const startDelay = setTimeout(runShuffle, 600);
    return () => clearTimeout(startDelay);
  }, []);

  const goNext = () => {
    goTo((activeIndex + 1) % projects.length);
  };

  const goPrev = () => {
    goTo((activeIndex - 1 + projects.length) % projects.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  // Circular 3D carousel: entire ring rotates so cards orbit around
  const getTapeStyle = (index) => {
    const currentActive = isShuffling ? shuffleIndex : activeIndex;
    const total = projects.length;
    const angleStep = 360 / total;
    
    // The ring rotates: active card is always at angle 0 (front)
    const offsetFromActive = ((index - currentActive + total) % total);
    const angle = offsetFromActive * angleStep;
    const rad = (angle * Math.PI) / 180;
    
    // 3D orbit parameters
    const radius = 280;
    const depth = 200;
    
    // Calculate 3D position — ROUNDED to whole pixels to prevent blur
    const x = Math.round(Math.sin(rad) * radius);
    const z = Math.round(Math.cos(rad) * depth);
    
    // FAKE 3D rotation using skewX instead of rotateY — avoids 3D texture blur
    // skewX gives a similar "turned away" visual without actual 3D transform
    const skewX = Math.round(Math.sin(rad) * -8);
    
    // Scale and opacity — use clean numbers, no fractional blur
    const depthFactor = (z + depth) / (depth * 2);
    const scale = Math.round((0.75 + depthFactor * 0.35) * 100) / 100;
    const opacity = Math.round((0.4 + depthFactor * 0.6) * 100) / 100;
    const zIndex = Math.round(depthFactor * 10);

    return {
      transform: `translateX(${x}px) scale(${scale}) skewX(${skewX}deg)`,
      opacity,
      zIndex,
      '--skew-angle': `${skewX}deg`,
    };
  };

  const currentActiveIndex = isShuffling ? shuffleIndex : activeIndex;

  return (
    <div className={`vhs-carousel ${isShuffling ? 'is-shuffling' : ''}`} ref={containerRef}>
      {/* Carousel Track */}
      <div className="vhs-carousel__track" ref={trackRef}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`vhs-carousel__item ${index === currentActiveIndex ? 'active' : ''}`}
            style={getTapeStyle(index)}
            onClick={() => !isShuffling && goTo(index)}
          >
            <VhsProject
              project={project}
              isActive={index === activeIndex}
              index={index + 1}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="vhs-carousel__arrow vhs-carousel__arrow--prev" onClick={goPrev} aria-label="Previous project">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="vhs-carousel__arrow vhs-carousel__arrow--next" onClick={goNext} aria-label="Next project">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Progress Indicator */}
      <div className="vhs-carousel__progress">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`vhs-carousel__dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goTo(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Active Project Details */}
      <ProjectDetails project={activeProject} isVisible={!isTransitioning} />
    </div>
  );
}

export default VhsCarousel;