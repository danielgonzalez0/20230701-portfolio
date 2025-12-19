import React, { useState } from 'react';
import { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const ContactBtn = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const checkVisibility = () => {
      const footer = document.querySelector('footer');
      const contact = document.getElementById('contact');
      if (!footer || !contact) return;
      const footerHeight = footer.offsetHeight;
      const contactHeight = contact.offsetHeight;
      const shouldHide =
        window.scrollY + window.innerHeight + footerHeight + contactHeight >
        document.body.offsetHeight;
      setIsVisible(!shouldHide);
    };
    window.addEventListener('scroll', checkVisibility);
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
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
