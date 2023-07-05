import React from 'react';
import logoWhite from './logo-dg-white.png';
import logoBlack from './logo-dg-black.png';
import { HashLink as Link } from 'react-router-hash-link';
import DarkModeButton from '../buttons/darkmode/DarkModeButton';
import { useSelector } from 'react-redux';
import LanguageBtn from '../buttons/languageSwitch/LanguageBtn';

const Header = () => {
  const isDarkMode = useSelector((state) => state.status.isDarkMode);

  return (
    <header>
      <div className="logo">
        <img
          src={isDarkMode === 'light' ? logoBlack : logoWhite}
          alt="logo Daniel Gonzalez"
        />
        <p>Daniel Gonzalez</p>
      </div>
      <DarkModeButton />
      <LanguageBtn />
      <nav>
        <ul>
          <li>
            <Link to="/#intro">Home</Link>
          </li>
          <Link to="/#about">
            <li>About</li>
          </Link>
          <Link to="/#skills">
            <li>Skills</li>
          </Link>
          <Link to="/#work">
            <li>Work</li>
          </Link>
          <Link to="/#contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
