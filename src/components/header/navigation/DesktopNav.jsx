import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const DesktopNav = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/#intro">Home</Link>
          </li>
          <Link to="/#skills">
            <li>Skills</li>
          </Link>
          <Link to="/#work">
            <li>Work</li>
          </Link>
          <Link to="/#about">
            <li>About</li>
          </Link>
          <Link to="/#contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    );
};

export default DesktopNav;