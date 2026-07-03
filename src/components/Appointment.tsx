import React from 'react';

const FACEBOOK_URL = import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/profile.php?id=61577348129317';

const Appointment: React.FC = () => {
  return (
    <section id="appointment" className="section appointment">
      <div className="section__container">
        <h2 className="section__title">Appointment Request</h2>
        <div className="appointment__content">
          <div className="appointment__card">
            <p className="appointment__text">
              Appointments are requested through Facebook Messenger. Final schedule
              confirmation will be provided after direct communication with the clinic
              or doctor.
            </p>
            <div className="appointment__guide">
              <h3 className="appointment__guide-title">When Messaging, Please Include:</h3>
              <ul className="appointment__guide-list">
                <li>Your full name</li>
                <li>Preferred date and time for consultation</li>
                <li>Brief reason for consultation</li>
              </ul>
            </div>
            <div className="appointment__notice">
              <strong>Important:</strong> Avoid sending emergency concerns or highly
              sensitive medical records through this website or Facebook Messenger.
            </div>
            <div className="appointment__emergency">
              <h3 className="appointment__emergency-title">Emergency Notice</h3>
              <p className="appointment__emergency-text">
                For emergency symptoms such as chest pain, difficulty breathing, stroke
                symptoms, severe weakness, loss of consciousness, or severe bleeding,
                please go to the nearest emergency department immediately.
              </p>
            </div>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Message Doctor on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;