export default function BannerCTA() {
  return (
    <section className="banner">
      <div
        className="banner-bg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1470240791366-f371f87a1253?auto=format&fit=crop&w=1900&q=80')",
        }}
      ></div>
      <div className="container banner-inner reveal">
        <h2>
          Ready For Your Next <span className="gold-italic">Great Escape?</span>
        </h2>
        <p>
          Book before December 31st and receive a complimentary couples' spa session
          on any 7+ night journey.
        </p>
        <a href="#contact" className="btn btn-gold">Claim Offer</a>
      </div>
    </section>
  );
}
