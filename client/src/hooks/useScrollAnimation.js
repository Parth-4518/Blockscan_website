import { useEffect, useRef } from 'react';

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if element is already in viewport on mount (with small delay for DOM readiness)
    setTimeout(() => {
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInViewport) {
        element.classList.add('visible');
      }
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (!options.repeat) {
              observer.unobserve(entry.target);
            }
          } else if (options.repeat) {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.repeat]);
  
  return ref;
}

export function useStaggerAnimation(parentRef) {
  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;
    
    const children = parent.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    children.forEach((child) => observer.observe(child));
    
    return () => observer.disconnect();
  }, [parentRef]);
}
