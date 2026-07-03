import React from 'react';

const FACEBOOK_URL = import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/profile.php?id=61577348129317';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      {/* Large Photo2 background layer (fully visible, not cropped) */}
      <div className="hero__photo2-bg" aria-hidden="true">
        <img
          src="/Photo2.jpg"
          alt=""
          className="hero__photo2-img"
          aria-hidden="true"
        />
      </div>
      {/* Dark gradient overlay for readability */}
      <div className="hero__overlay" />
      <div className="hero__container">
        <div className="hero__content">
          {/* Left: Profile Photo Card */}
          <div className="hero__left">
            <div className="hero__card">
              <div className="hero__photo-area">
                <img
                  src="/Profile.jpg"
                  alt="Dr. James Raphael T. Estrada"
                  className="hero__photo"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) {
                      placeholder.style.display = 'flex';
                    }
                  }}
                />
                <div className="hero__photo-placeholder" style={{ display: 'none' }}>
                  <span>Photo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="hero__text">
            <p className="hero__subtitle">Internal Medicine – Diabetology Specialist</p>
            <h1 className="hero__title">Dr. James Raphael T. Estrada</h1>
            <p className="hero__credential">
              Internal Medicine Graduate, Board Passer, and Diabetology Specialist
            </p>
            <p className="hero__intro">
              Dedicated to providing compassionate, evidence-based internal medicine
              consultation services. Committed to helping you achieve and maintain
              your best health through patient-centered care.
            </p>
            <div className="hero__actions">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Request an Appointment
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                Message on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;