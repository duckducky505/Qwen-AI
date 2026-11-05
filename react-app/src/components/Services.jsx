import { SERVICES } from '../data/content';

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="services-bg"></div>
      <div className="container">
        <div className="section-head light reveal">
          <p className="section-eyebrow">Why Aureus Voyages</p>
          <h2 className="section-title">
            Crafted To <span className="gold-italic">Perfection</span>
          </h2>
          <p className="section-desc">Every detail anticipated. Every moment elevated.</p>
        </div>

        <div className="service-grid">
          {SERVICES.map((s) => (
            <div className="service-card reveal" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
