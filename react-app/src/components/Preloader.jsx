import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hide = () => setTimeout(() => setHidden(true), 500);
    if (document.readyState === 'complete') hide();
    else window.addEventListener('load', hide);
    // Fallback: hide even if load event already fired / slow assets
    const fallback = setTimeout(() => setHidden(true), 2600);
    return () => {
      window.removeEventListener('load', hide);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div className={`preloader ${hidden ? 'hidden' : ''}`}>
      <div className="preloader-inner">
        <div className="preloader-logo">AUREUS<span>VOYAGES</span></div>
        <div className="preloader-bar"><span></span></div>
      </div>
    </div>
  );
}
