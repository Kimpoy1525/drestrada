import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          &copy; {currentYear} Dr. James Raphael T. Estrada. All rights reserved.
        </p>
        <p className="footer__disclaimer">
          This website is for informational purposes only. It does not provide
          medical advice, diagnosis, or treatment. For emergencies, please call
          emergency services or go to the nearest emergency department.
        </p>
      </div>
    </footer>
  );
};

export default Footer;