import { DESTINATIONS } from '../data/content';

export default function Destinations() {
  return (
    <section className="section destinations" id="destinations">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-eyebrow">Featured Destinations</p>
          <h2 className="section-title">
            The World's Most <span className="gold-italic">Coveted</span> Places
          </h2>
          <p className="section-desc">
            From sun-drenched Aegean cliffs to alpine silence — explore our travelers' favorite escapes.
          </p>
        </div>

        <div className="dest-grid">
          {DESTINATIONS.map((d) => (
            <a
              key={d.name}
              href="#tours"
              className={`dest-card ${d.large ? 'large' : ''} reveal`}
            >
              <img src={d.img} alt={d.name} loading="lazy" />
              <div className="dest-shade"></div>
              <div className="dest-info">
                <span className="dest-count">{d.tours} Tours</span>
                <h3>{d.name}</h3>
                <p>{d.country} · from {d.from}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
