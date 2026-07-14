const FACEBOOK_URL = import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/profile.php?id=61577348129317';

const LOCATIONS = [
  {
    city: 'Camiling, Tarlac',
    hospital: 'Señor Sto. Niño Hospital, Inc.',
    address: 'P. Burgos St., Poblacion B',
    hours: ['Mon · 9 AM–12 NN', 'Thu · 9 AM–4 PM', 'Fri · 9 AM–12 NN'],
  },
  {
    city: 'Bayambang, Pangasinan',
    hospital: 'Nuestro Señor Santo Niño Hospital',
    address: 'Juan Luna St., Poblacion Sur',
    hours: ['Mon · 1–5 PM', 'Tue · 9 AM–5 PM', 'Wed · 9 AM–12 NN'],
  },
] as const;

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__header">
          <div><div className="eyebrow"><span /> Contact & locations</div><h2>Let’s talk about<br /><em>your health.</em></h2></div>
          <p>Choose the clinic most convenient for you, then message the doctor to request and confirm your consultation.</p>
        </div>
        <div className="contact-hub">
          <div className="contact-hub__message">
            <div className="contact-hub__message-top"><span className="contact__icon">f</span><small>Appointments & inquiries</small></div>
            <div><h3>Start with a message.</h3><p>Send your name, preferred clinic, preferred date, and a brief reason for your consultation.</p></div>
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Message on Facebook <span>↗</span></a>
          </div>
          <div className="contact-hub__locations">
            {LOCATIONS.map((location, index) => <article className="location-summary" key={location.city}>
              <div className="location-summary__number">0{index + 1}</div>
              <small>{location.city}</small>
              <h3>{location.hospital}</h3>
              <p className="location-summary__address"><span>⌖</span>{location.address}</p>
              <div className="location-summary__hours"><span>Clinic hours</span>{location.hours.map(hour => <strong key={hour}>{hour}</strong>)}</div>
            </article>)}
          </div>
        </div>
        <p className="contact__reminder">Schedules may change. Please wait for appointment confirmation before going to the clinic.</p>
      </div>
    </section>
  );
}
