import { useCallback, useRef, useState } from 'react';
import './App.css';

import { useRevealOnScroll } from './hooks';

import Preloader from './components/Preloader';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Destinations from './components/Destinations';
import Tours from './components/Tours';
import Services from './components/Services';
import About from './components/About';
import BannerCTA from './components/BannerCTA';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Toast from './components/Toast';

export default function App() {
  const [toast, setToast] = useState('');
  const toastTimer = useRef(null);

  useRevealOnScroll();

  const showToast = useCallback((msg) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 3400);
  }, []);

  return (
    <>
      <Preloader />
      <TopBar />
      <Header />
      <main>
        <Hero />
        <SearchBar onSearch={() => showToast('✦ Searching 200+ handcrafted journeys for you…')} />
        <Destinations />
        <Tours />
        <Services />
        <About />
        <BannerCTA />
        <Testimonials />
        <Contact
          onSubmit={() => {
            showToast('✦ Thank you! A travel specialist will call you within 24 hours.');
          }}
        />
        <Newsletter onSubscribe={() => showToast('✦ Welcome to the Inner Circle. Check your inbox!')} />
      </main>
      <Footer />
      <BackToTop />
      <Toast message={toast} />
    </>
  );
}
