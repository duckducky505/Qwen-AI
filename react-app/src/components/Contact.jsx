import { useState } from 'react';
import { CONTACT_REGIONS } from '../data/content';

const initial = { name: '', email: '', phone: '', region: '', message: '' };

export default function Contact({ onSubmit }) {
  const [form, setForm] = useState(initial);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
    setForm(initial);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <p className="section-eyebrow reveal">Get In Touch</p>
          <h2 className="section-title reveal">
            Begin Planning Your <span className="gold-italic">Journey</span>
          </h2>
          <p className="reveal">
            Tell us where you dream of waking up. A specialist will reply within 24 hours with a
            first sketch of your itinerary — no obligation.
          </p>
          <div className="contact-items reveal">
            <div className="contact-item">
              <span>📍</span>
              <p>Flagship Salon<br /><em>28 Berkeley Street, Mayfair, London</em></p>
            </div>
            <div className="contact-item">
              <span>📞</span>
              <p>+1 (800) 555-0199<br /><em>Mon–Sat, 8am–8pm GMT</em></p>
            </div>
            <div className="contact-item">
              <span>✉️</span>
              <p>hello@aureusvoyages.com<br /><em>We reply within 24 hours</em></p>
            </div>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={submit}>
          <h3>Request A Callback</h3>
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="Full Name" required value={form.name} onChange={set('name')} />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required value={form.email} onChange={set('email')} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" value={form.phone} onChange={set('phone')} />
            </div>
            <div className="form-group">
              <select required value={form.region} onChange={set('region')}>
                <option value="">Dream Destination</option>
                {CONTACT_REGIONS.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <textarea
              rows="4"
              placeholder="Tell us about your ideal trip — dates, guests, occasions..."
              value={form.message}
              onChange={set('message')}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-gold btn-block">Send Request ✦</button>
          <p className="form-note">By submitting you agree to our privacy policy. No spam, ever.</p>
        </form>
      </div>
    </section>
  );
}
