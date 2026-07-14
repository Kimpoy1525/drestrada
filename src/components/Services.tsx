const SERVICES = [
  { icon: '◒', title: 'Diabetes Care', text: 'Screening, diagnosis, blood sugar evaluation, medication review, and long-term management.' },
  { icon: '♡', title: 'Hypertension Care', text: 'Blood pressure assessment and practical management to help lower cardiovascular risk.' },
  { icon: '✦', title: 'Adult Consultation', text: 'Thorough evaluation of new symptoms, acute concerns, and general adult health needs.' },
  { icon: '⊕', title: 'Preventive Checkups', text: 'Age-appropriate screening, risk assessment, and guidance for maintaining good health.' },
  { icon: '↻', title: 'Chronic Disease Follow-up', text: 'Ongoing monitoring for multiple or complex conditions with coordinated care plans.' },
  { icon: '✓', title: 'Medical Clearance', text: 'Pre-procedure evaluation and individualized medical risk assessment when appropriate.' },
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-heading">
          <div><div className="eyebrow"><span /> How we can help</div><h2>Care for today.<br /><em>Health for tomorrow.</em></h2></div>
          <p>From prevention to long-term condition management, each consultation starts with your needs and ends with a plan you can understand.</p>
        </div>
        <div className="services__grid">
          {SERVICES.map((service, i) => <article className="service-card" key={service.title}><span className="service-card__number">0{i + 1}</span><div className="service-card__icon">{service.icon}</div><h3>{service.title}</h3><p>{service.text}</p></article>)}
        </div>
        <p className="services__note">Not sure which service you need? <a href="#appointment">Send a brief inquiry →</a></p>
      </div>
    </section>
  );
}
