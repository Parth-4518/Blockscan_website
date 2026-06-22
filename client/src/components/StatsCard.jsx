import React, { useEffect, useRef, useState } from 'react';

const StatsCard = ({ icon: Icon, value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="stats-card">
      <div className="stats-card__icon">
        <Icon size={28} />
      </div>
      <div className="stats-card__value">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="stats-card__label">{label}</div>
    </div>
  );
};

export default StatsCard;
