import { useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.style.setProperty('--reveal-delay', `${delay}ms`);
        element.classList.add('is-visible');
        observer.unobserve(element);
      }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={`scroll-reveal reveal-${direction} ${className}`}>{children}</div>;
}
