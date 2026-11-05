import { useCallback, useEffect, useRef, useState } from 'react';
import { TESTIMONIALS } from '../data/content';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);
  const cards = TESTIMONIALS.length;

  const goTo = useCallback(
    (i) => setIdx(((i % cards) + cards) % cards),
    [cards]
  );

  /* Autoplay every 7s, reset on manual navigation */
  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % cards);
    }, 7000);
    return () => clearInterval(timerRef.current);
  }, [idx, cards]);

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-eyebrow">Traveler Stories</p>
          <h2 className="section-title">
            Loved By <span className="gold-italic">45,000+</span> Explorers
          </h2>
        </div>

        <div className="testi-slider reveal">
          <div className="testi-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
            {TESTIMONIALS.map((t) => (
              <blockquote className="testi-card" key={t.name}>
                <div className="testi-stars">★★★★★</div>
                <p>"{t.quote}"</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.trip}</span>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="testi-nav">
            <button aria-label="Previous" onClick={() => goTo(idx - 1)}>←</button>
            <div className="testi-dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`testi-dot ${i === idx ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to review ${i + 1}`}
                ></button>
              ))}
            </div>
            <button aria-label="Next" onClick={() => goTo(idx + 1)}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
