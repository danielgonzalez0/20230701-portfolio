import React, { useState } from 'react';
import { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const ContactBtn = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const footerHeight =
      document.getElementsByTagName('footer')[0].offsetHeight;
    const contactHeight = document.getElementById('contact').offsetHeight;
    window.addEventListener('scroll', () => {
      if (
        window.scrollY + window.innerHeight + footerHeight + contactHeight >
        document.body.offsetHeight
      ) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    });
  }, []);
  return (
    isVisible && (
      <div className="contactBtn" tabIndex={0}>
        <Link to="/#contact">
          <span className="fa-solid fa-message"></span>
        </Link>
      </div>
    )
  );
};

export default ContactBtn;
