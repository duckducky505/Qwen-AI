/* ============================================================
   AUREUS VOYAGES — Interactions
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Preloader ---------- */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => setTimeout(() => preloader.classList.add('hidden'), 500));
  // Fallback: hide even if load already fired / slow assets
  setTimeout(() => preloader.classList.add('hidden'), 2600);

  /* ---------- Sticky header ---------- */
  const header = document.getElementById('header');
  const backTop = document.getElementById('backTop');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
    backTop.classList.toggle('show', window.scrollY > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Mobile nav ---------- */
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
  nav.querySelectorAll('.nav-link').forEach(link =>
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      hamburger.classList.remove('open');
    })
  );

  /* ---------- Active nav on scroll (scrollspy) ---------- */
  const sections = [...document.querySelectorAll('section[id]')];
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
      }
    });
  }, { rootMargin: '-35% 0px -60% 0px' });
  sections.forEach(s => spy.observe(s));

  /* ---------- Reveal on scroll ---------- */
  const revealer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        e.target.style.transitionDelay = `${(i % 6) * 70}ms`;
        e.target.classList.add('visible');
        revealer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealer.observe(el));

  /* ---------- Animated counters ---------- */
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.count, dur = 1800, t0 = performance.now();
      const tick = now => {
        const p = Math.min((now - t0) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterObs.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.stat-num').forEach(el => counterObs.observe(el));

  /* ---------- Hero slideshow ---------- */
  const slides = [...document.querySelectorAll('.hero-slide')];
  const progress = document.getElementById('heroProgress');
  const SLIDE_MS = 6000;
  let slideIdx = 0, startTime = performance.now();

  setInterval(() => {
    slides[slideIdx].classList.remove('active');
    slideIdx = (slideIdx + 1) % slides.length;
    slides[slideIdx].classList.add('active');
    startTime = performance.now();
  }, SLIDE_MS);

  (function animProgress(now) {
    const pct = ((now - startTime) % SLIDE_MS) / SLIDE_MS * 100;
    progress.style.width = pct + '%';
    requestAnimationFrame(animProgress);
  })(performance.now());

  /* ---------- Tour filter tabs ---------- */
  const tabs = document.querySelectorAll('.tab-btn');
  const tourCards = document.querySelectorAll('.tour-card');
  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const f = tab.dataset.filter;
    tourCards.forEach(card => {
      const show = f === 'all' || card.dataset.cat.split(' ').includes(f);
      card.classList.toggle('hide', !show);
      if (show) {
        card.style.animation = 'none';
        card.offsetHeight; // reflow
        card.style.animation = 'fadeUp .5s ease both';
      }
    });
  }));

  // fadeUp keyframes injected via JS to keep CSS tidy
  const styleTag = document.createElement('style');
  styleTag.textContent = '@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}';
  document.head.appendChild(styleTag);

  /* ---------- Testimonials slider ---------- */
  const track = document.getElementById('testiTrack');
  const cards = track.children.length;
  const dotsWrap = document.getElementById('testiDots');
  let testiIdx = 0, testiTimer;

  for (let i = 0; i < cards; i++) {
    const d = document.createElement('button');
    d.className = 'testi-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goToTesti(i));
    dotsWrap.appendChild(d);
  }
  const dots = [...dotsWrap.children];

  function goToTesti(i) {
    testiIdx = (i + cards) % cards;
    track.style.transform = `translateX(-${testiIdx * 100}%)`;
    dots.forEach((d, j) => d.classList.toggle('active', j === testiIdx));
    restartTesti();
  }
  function restartTesti() {
    clearInterval(testiTimer);
    testiTimer = setInterval(() => goToTesti(testiIdx + 1), 7000);
  }
  document.getElementById('testiPrev').addEventListener('click', () => goToTesti(testiIdx - 1));
  document.getElementById('testiNext').addEventListener('click', () => goToTesti(testiIdx + 1));
  restartTesti();

  /* ---------- Toast helper ---------- */
  const toast = document.getElementById('toast');
  let toastTimer;
  window.showToast = msg => {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3400);
  };
});

/* ---------- Form handlers ---------- */
function handleSearch(e) {
  e.preventDefault();
  showToast('✦ Searching 200+ handcrafted journeys for you…');
}
function handleContact(e) {
  e.preventDefault();
  showToast('✦ Thank you! A travel specialist will call you within 24 hours.');
  e.target.reset();
}
function handleNewsletter(e) {
  e.preventDefault();
  showToast('✦ Welcome to the Inner Circle. Check your inbox!');
  e.target.reset();
}
