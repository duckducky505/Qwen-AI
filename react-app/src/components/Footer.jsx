import { FOOTER_COLS } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="logo">
            <span className="logo-mark">◆</span>
            <span className="logo-text">Aureus<em>Voyages</em></span>
          </a>
          <p>
            Bespoke luxury travel across 120 countries. Member of ABTA & ATOL bonded for your
            complete protection.
          </p>
          <div className="footer-social">
            <a href="#">f</a><a href="#">ig</a><a href="#">x</a><a href="#">in</a><a href="#">yt</a>
          </div>
        </div>

        {FOOTER_COLS.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            {col.links.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 Aureus Voyages Ltd. All rights reserved.</p>
          <p className="footer-pay">VISA · MASTERCARD · AMEX · PAYPAL · APPLE PAY</p>
        </div>
      </div>
    </footer>
  );
}
