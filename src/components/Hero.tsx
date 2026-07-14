const FACEBOOK_URL = import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/profile.php?id=61577348129317';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <div className="eyebrow"><span /> Internal Medicine & Diabetology</div>
          <h1>Thoughtful care for a <em>healthier life.</em></h1>
          <p className="hero__lead">Personalized, evidence-based care for adults—focused on prevention, long-term wellness, and helping you feel heard at every visit.</p>
          <div className="hero__actions">
            <a className="button button--primary" href={FACEBOOK_URL} target="_blank" rel="noreferrer">Request an appointment <span>→</span></a>
            <a className="button button--ghost" href="#services">Explore services</a>
          </div>
          <div className="hero__trust" aria-label="Care qualities">
            <div><b>✓</b><span><strong>Board passer</strong><small>Internal Medicine</small></span></div>
            <div><b>✓</b><span><strong>Personalized</strong><small>Patient-first care</small></span></div>
            <div><b>✓</b><span><strong>Continuous</strong><small>Long-term support</small></span></div>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__image-wrap"><img src="/Profile.jpg" alt="Dr. James Raphael T. Estrada" /></div>
          <div className="hero__name-card"><span>Meet your doctor</span><strong>James Raphael T. Estrada, MD</strong><small>Internal Medicine · Diabetology Specialist</small></div>
          <div className="hero__note"><span>♡</span><p><strong>Compassion-led care</strong><br />Every patient, every stage.</p></div>
        </div>
      </div>
      <div className="hero__scroll">Scroll to learn more <span>↓</span></div>
    </section>
  );
}
