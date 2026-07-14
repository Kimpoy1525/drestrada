import { useEffect, useState } from 'react';

const FACEBOOK_URL = import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/profile.php?id=61577348129317';
const NAV_ITEMS = [['About', '#about'], ['Services', '#services'], ['Clinics', '#clinics'], ['Appointments', '#appointment'], ['Contact', '#contact']] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        <a href="#home" className="brand" aria-label="Dr. Estrada home">
          <span className="brand__mark" aria-hidden="true">JE</span>
          <span><strong>Dr. James Estrada</strong><small>Internal Medicine · Diabetology</small></span>
        </a>
        <button className={`menu-btn ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span /><span /><span />
        </button>
        <nav className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {NAV_ITEMS.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav__cta" href={FACEBOOK_URL} target="_blank" rel="noreferrer">Book a consultation</a>
        </nav>
      </div>
    </header>
  );
}
