import React from 'react';

const FACEBOOK_URL = import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/profile.php?id=61577348129317';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section contact">
      <div className="section__container">
        <h2 className="section__title">Contact</h2>
        <div className="contact__grid">
          <div className="contact__card">
            <h3 className="contact__card-title">Facebook</h3>
            <p className="contact__card-text">
              Message Dr. Estrada directly through the clinic's Facebook page for
              appointment requests and inquiries.
            </p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--small"
            >
              Visit Facebook Page
            </a>
          </div>
          <div className="contact__card">
            <h3 className="contact__card-title">Clinic Location</h3>
            <p className="contact__card-text contact__card-text--placeholder">
              [Clinic address to be added]
            </p>
          </div>
          <div className="contact__card">
            <h3 className="contact__card-title">Clinic Hours</h3>
            <p className="contact__card-text contact__card-text--placeholder">
              [Clinic hours to be added]
            </p>
          </div>
          <div className="contact__card">
            <h3 className="contact__card-title">Contact Information</h3>
            <p className="contact__card-text contact__card-text--placeholder">
              [Phone number and email to be added]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;