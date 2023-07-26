import React, { useEffect, useState } from 'react';
import logoWhite from './logo-dg-white.png';
import logoBlack from './logo-dg-black.png';
import DarkModeButton from '../buttons/darkmode/DarkModeButton';
import { useSelector } from 'react-redux';
import LanguageBtn from '../buttons/languageSwitch/LanguageBtn';
import DesktopNav from './navigation/DesktopNav';
import NavMobile from './navigation/NavMobile';

const Header = () => {
  const isDarkMode = useSelector((state) => state.status.isDarkMode);
  const mediaMatch = window.matchMedia('(max-width: 870px)');
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => {
      setMatches(e.matches);
    };
    mediaMatch.addEventListener('change', handler);
  }, []);

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

      {matches ? <NavMobile /> : <DesktopNav />}
    </header>
  );
};

export default Header;
