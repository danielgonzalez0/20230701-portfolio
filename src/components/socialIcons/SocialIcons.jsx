import React, { useEffect } from 'react';

const SocialIcons = () => {
  useEffect(() => {
    const icons = document.querySelectorAll('.social-network .hover');
    console.log(icons);
    icons.forEach((link) => {
      link.addEventListener('mouseover', () => {
        link.style.transform = `translate(${0}px, ${-10}px)`;
      });

      link.addEventListener('mouseleave', () => {
        link.style.transform = '';
      });
    });
  }, []);

  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.linkedin.com/in/danielgonzalez1980/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fa-brands fa-linkedin"></i>
          </li>
        </a>
        <a
          href="https://github.com/danielgonzalez0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fa-brands fa-github"></i>
          </li>
        </a>
        <a
          href="https://twitter.com/DanielG112021"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>
        <a
          href="https://www.instagram.com/danielgonzalez4142/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=636357216"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-facebook"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialIcons;
