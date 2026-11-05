import { useState } from 'react';

export default function Newsletter({ onSubscribe }) {
  const [email, setEmail] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onSubscribe?.(email);
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="container newsletter-inner reveal">
        <div>
          <h3>Join The Inner Circle</h3>
          <p>Secret fares, new destinations, and member-only journeys — monthly, beautifully written.</p>
        </div>
        <form className="newsletter-form" onSubmit={submit}>
          <input
            type="email"
            placeholder="Your email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn-gold">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
