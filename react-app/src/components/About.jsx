import { ABOUT_POINTS } from '../data/content';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-media reveal">
          <img
            src="https://images.unsplash.com/photo-1488646953014-81cb9e739624?auto=format&fit=crop&w=1000&q=80"
            alt="Travel experience"
            loading="lazy"
          />
          <div className="about-media-card">
            <span className="big">18+</span>
            <span>Years Crafting<br />Extraordinary Trips</span>
          </div>
          <div className="about-frame"></div>
        </div>
        <div className="about-text">
          <p className="section-eyebrow reveal">Our Story</p>
          <h2 className="section-title reveal">
            We Don't Sell Trips.<br />We Compose <span className="gold-italic">Memories.</span>
          </h2>
          <p className="reveal">
            Founded in 2008, Aureus Voyages began with a simple belief: travel should feel as rare
            as the places you visit. Today, a team of 60+ destination specialists designs journeys
            across 120 countries — each one a private commission, executed flawlessly.
          </p>
          <ul className="about-list reveal">
            {ABOUT_POINTS.map((point) => (
              <li key={point}><span>◆</span> {point}</li>
            ))}
          </ul>
          <div className="about-cta reveal">
            <a href="#contact" className="btn btn-gold">Speak With A Specialist</a>
          </div>
        </div>
      </div>
    </section>
  );
}
