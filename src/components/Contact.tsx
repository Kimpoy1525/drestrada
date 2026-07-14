const FACEBOOK_URL = import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/profile.php?id=61577348129317';

export default function Contact() {
  return (
    <section id="contact" className="contact-cta">
      <div className="container contact-cta__inner">
        <div className="contact-cta__copy">
          <div className="eyebrow"><span /> Have a question?</div>
          <h2>Ready to take the next step<br />for your <em>health?</em></h2>
        </div>
        <div className="contact-cta__action">
          <p>Send your name, preferred clinic and schedule, and a brief reason for consultation.</p>
          <a className="button button--primary" href={FACEBOOK_URL} target="_blank" rel="noreferrer">Message on Facebook <span>↗</span></a>
          <small>Appointments are confirmed only after a direct reply.</small>
        </div>
      </div>
    </section>
  );
}
