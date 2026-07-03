import React from 'react';

const SERVICES = [
  {
    title: 'Diabetes Screening and Consultation',
    description:
      'Comprehensive screening, diagnosis, and consultation for diabetes and pre-diabetic conditions with personalized management planning.',
  },
  {
    title: 'Diabetes Follow-Up Care',
    description:
      'Ongoing monitoring and follow-up care for patients with diabetes, including medication review, blood sugar assessment, and lifestyle guidance.',
  },
  {
    title: 'Blood Sugar Evaluation',
    description:
      'Thorough evaluation of blood glucose levels and related metabolic parameters to assess and manage glycemic control.',
  },
  {
    title: 'Hypertension Evaluation and Management',
    description:
      'Assessment, monitoring, and management of high blood pressure to reduce cardiovascular risk and promote long-term health.',
  },
  {
    title: 'Adult Internal Medicine Consultation',
    description:
      'Comprehensive evaluation and management of adult health concerns, including routine checkups and medical assessments.',
  },
  {
    title: 'Preventive Health Checkups',
    description:
      'Routine health screenings and preventive care aimed at early detection and health maintenance.',
  },
  {
    title: 'Medical Clearance and Risk Assessment',
    description:
      'Pre-procedure medical clearance and risk evaluation to ensure patient safety before surgical or diagnostic procedures.',
  },
  {
    title: 'Chronic Disease Follow-Up',
    description:
      'Ongoing care and monitoring for patients with chronic illnesses such as heart disease, kidney disease, and respiratory conditions.',
  },
] as const;

const Services: React.FC = () => {
  return (
    <section id="services" className="section services">
      <div className="section__container">
        <h2 className="section__title">Services</h2>
        <p className="section__subtitle">
          Dr. Estrada provides the following internal medicine and diabetology consultation services:
        </p>
        <div className="services__grid">
          {SERVICES.map((service) => (
            <div key={service.title} className="service-card">
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;