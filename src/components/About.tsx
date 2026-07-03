import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <div className="section__container">
        <h2 className="section__title">About</h2>
        <div className="about__content">
          <div className="about__card">
            <p className="about__text">
              Dr. James Raphael T. Estrada is an Internal Medicine graduate, board passer,
              and Diabetology Specialist. He provides adult medical consultation with a
              focus on evidence-based, patient-centered care, including the evaluation and
              follow-up of common chronic conditions such as diabetes, hypertension, and
              other internal medicine concerns.
            </p>
            <p className="about__text">
              Internal Medicine focuses on the prevention, diagnosis, and non-surgical
              treatment of adult diseases. As an internist and diabetology specialist,
              Dr. Estrada is trained to manage a wide range of health conditions, from
              acute illnesses to complex chronic diseases, with a holistic approach that
              considers the whole person.
            </p>
            <p className="about__text">
              Dr. Estrada believes in building trusting relationships with patients
              through open communication, thorough evaluation, and a commitment to
              continuous learning in the ever-evolving field of medicine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;