export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <span>📞 +1 (800) 555-0199</span>
          <span>✉️ hello@aureusvoyages.com</span>
        </div>
        <div className="topbar-right">
          <a href="#">USD ▾</a>
          <a href="#">EN ▾</a>
          <div className="topbar-social">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="X">x</a>
          </div>
        </div>
      </div>
    </div>
  );
}
