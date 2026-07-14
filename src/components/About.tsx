export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__image"><img src="/Photo2.jpg" alt="Dr. Estrada providing patient-centered medical care" /></div>
        <div className="about__copy">
          <div className="eyebrow"><span /> About the doctor</div>
          <h2>Care that sees the <em>whole person.</em></h2>
          <p className="about__intro">Dr. James Raphael T. Estrada is an Internal Medicine graduate, board passer, and Diabetology Specialist caring for adult patients with both everyday and complex health needs.</p>
          <p>His approach combines careful evaluation, clear conversations, and practical treatment plans that fit each patient’s goals and daily life.</p>
          <div className="values">
            <div><span>01</span><p><strong>Listen first</strong><small>Your questions and concerns guide the conversation.</small></p></div>
            <div><span>02</span><p><strong>Explain clearly</strong><small>Understand your condition and your options.</small></p></div>
            <div><span>03</span><p><strong>Plan together</strong><small>Build a realistic path toward better health.</small></p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
