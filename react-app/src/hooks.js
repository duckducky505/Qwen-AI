import { useEffect, useState } from 'react';

/* Reveal-on-scroll observer (replaces the vanilla JS IntersectionObserver) */
export function useRevealOnScroll() {
  useEffect(() => {
    const revealer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            e.target.style.transitionDelay = `${(i % 6) * 70}ms`;
            e.target.classList.add('visible');
            revealer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => revealer.observe(el));
    return () => revealer.disconnect();
  });
}

/* Animated stat counter */
export function useCountUp(target, active, dur = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, dur]);
  return value;
}

/* Observe when an element enters the viewport (once) */
export function useInView(threshold = 0.6) {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.unobserve(e.target);
        }
      },
      { threshold }
    );
    obs.observe(ref);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return [setRef, inView];
}
