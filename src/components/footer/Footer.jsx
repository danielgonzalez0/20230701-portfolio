import React, { useState } from 'react';
import SocialIcons from '../socialIcons/SocialIcons';

const Footer = () => {
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);
  const handleClick = () => {
    setIsPhoneVisible(!isPhoneVisible);
  };
  return (
    <footer>
      <div className="contact-infos">
        <div className="address">
          <div className="content">
            <h4>Daniel Gonzalez</h4>
            <p>78170 La Celle-Saint-Cloud</p>
            <div className="phoneNumber" onClick={() => handleClick()}>
              {isPhoneVisible ? (
                <p>06.60.29.91.14</p>
              ) : (
                <button className="btnPhone">
                  Afficher <span className="fa-solid fa-phone"></span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <SocialIcons />
      <p className="copyright">
        Copyright All Right Reserved 2023 <span>Daniel Gonzalez</span>
      </p>
    </footer>
  );
};

export default Footer;
