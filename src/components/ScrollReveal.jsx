import { useEffect, useRef } from 'react';

// Reusable component that animates content when it enters the viewport.
export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    // Observes the element and triggers its reveal animation when it becomes visible.
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
