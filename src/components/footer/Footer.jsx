import React from 'react';
import SocialIcons from '../socialIcons/SocialIcons';

const Footer = () => {
  return (
    <footer>
      <div className="contact-infos">
        <div className="address">
          <div className="content">
            <h4>Daniel Gonzalez</h4>
            <p>85 résidénce Elysée 2</p>
            <p>78170 La Celle-Saint-Cloud</p>
            <p> 06.60.29.91.14</p>
          </div>
        </div>
      </div>
      <SocialIcons />
      <p className='copyright'>Copyright All Right Reserved 2023 <span>Daniel Gonzalez</span></p>
    </footer>
  );
};

export default Footer;
