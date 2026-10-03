import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  // Stores the percentage of the page that the user has scrolled.
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculates the current scroll position and updates the progress indicator.
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />;
}
