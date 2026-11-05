import { useEffect, useState } from 'react';
import { HERO_SLIDES, HERO_STATS } from '../data/content';
import { useCountUp, useInView } from '../hooks';

const SLIDE_MS = 6000;

function Stat({ count, suffix, label, active }) {
  const value = useCountUp(count, active);
  return (
    <>
      <div className="stat">
        <span className="stat-num">{value}</span>
        <span className="stat-plus">{suffix}</span>
        <p>{label}</p>
      </div>
      <div className="stat-divider"></div>
    </>
  );
}

export default function Hero() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [statsRef, statsInView] = useInView(0.6);

  /* Slideshow + gold progress bar */
  useEffect(() => {
    let startTime = performance.now();
    const interval = setInterval(() => {
      setSlideIdx((i) => (i + 1) % HERO_SLIDES.length);
      startTime = performance.now();
    }, SLIDE_MS);

    let raf;
    const anim = (now) => {
      setProgress((((now - startTime) % SLIDE_MS) / SLIDE_MS) * 100);
      raf = requestAnimationFrame(anim);
    };
    raf = requestAnimationFrame(anim);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-slides">
        {HERO_SLIDES.map((src, i) => (
          <div
            key={src}
            className={`hero-slide ${i === slideIdx ? 'active' : ''}`}
            style={{ backgroundImage: `url('${src}')` }}
          ></div>
        ))}
      </div>
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <p className="hero-eyebrow reveal">— Curated Luxury Journeys Since 2008</p>
        <h1 className="hero-title reveal">
          Travel Beyond The<br /><span className="gold-italic">Ordinary</span>
        </h1>
        <p className="hero-sub reveal">
          Handcrafted itineraries, private guides, and the world's most extraordinary places —
          designed entirely around you.
        </p>

        <div className="hero-stats reveal" ref={statsRef}>
          {HERO_STATS.map((s, i) => (
            <Stat key={s.label} {...s} active={statsInView} />
          ))}
        </div>

        <div className="hero-cta reveal">
          <a href="#tours" className="btn btn-gold">Explore Tours</a>
          <a href="#booking" className="btn btn-ghost">Plan My Journey</a>
        </div>
      </div>

      <div className="hero-scroll"><span></span>Scroll</div>
      <div className="hero-progress">
        <span style={{ width: `${progress}%` }}></span>
      </div>
    </section>
  );
}
