import { useState } from 'react';
import { TOURS, TOUR_TABS } from '../data/content';

function TourCard({ tour, filter }) {
  const show = filter === 'all' || tour.cat.includes(filter);
  if (!show) return null;
  return (
    <article
      className="tour-card reveal visible"
      style={{ animation: 'fadeUp .5s ease both' }}
    >
      <div className="tour-media">
        <img src={tour.img} alt={tour.alt} loading="lazy" />
        {tour.badge && (
          <span className={`tour-badge ${tour.badgeGold ? 'gold' : ''}`}>{tour.badge}</span>
        )}
        <span className="tour-price">{tour.price}</span>
      </div>
      <div className="tour-body">
        <div className="tour-meta">
          <span>{tour.rating}</span><span>·</span><span>{tour.days}</span><span>·</span><span>{tour.style}</span>
        </div>
        <h3 className="tour-title">{tour.title}</h3>
        <p className="tour-desc">{tour.desc}</p>
        <div className="tour-foot">
          <span>{tour.guests}</span>
          <a href="#contact" className="tour-link">Details →</a>
        </div>
      </div>
    </article>
  );
}

export default function Tours() {
  const [filter, setFilter] = useState('all');

  return (
    <section className="section tours" id="tours">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-eyebrow">Signature Experiences</p>
          <h2 className="section-title">
            Curated <span className="gold-italic">Tours</span> & Packages
          </h2>
          <div className="tour-tabs">
            {TOUR_TABS.map((tab) => (
              <button
                key={tab.filter}
                className={`tab-btn ${filter === tab.filter ? 'active' : ''}`}
                onClick={() => setFilter(tab.filter)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="tour-grid">
          {TOURS.map((tour) => (
            <TourCard key={tour.title} tour={tour} filter={filter} />
          ))}
        </div>

        <div className="center reveal">
          <a href="#contact" className="btn btn-dark">View All 200+ Tours</a>
        </div>
      </div>
    </section>
  );
}
