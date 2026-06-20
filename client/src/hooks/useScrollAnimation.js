import { useEffect, useRef } from 'react';

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
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
