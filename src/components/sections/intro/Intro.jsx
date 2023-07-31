import React, { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../header/logo-dg-black.png';
import logoWhite from '../../header/logo-dg-white.png';
import { useSelector } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
// import PostBtn from '../../buttons/postBtn/PostBtn';

const Intro = () => {
  const { t } = useTranslation();
  const darkMode = useSelector((state) => state.status.isDarkMode);
  const language = useSelector((state) => state.status.language);

  useLayoutEffect(() => {
    window.addEventListener('scroll', () => {
      document.getElementById('introLogo').style.animation = 'none'
     if(window.scrollY === 0){
          document.getElementById('introLogo').style.animation = null;
     } 
    });
  });

  return (
    <section id="intro">
      <div className="intro_wrapper">
        <h1>
          <span>{t('intro.title')}</span>
        </h1>
        <h2>
          <span>{t('intro.description.part1')}</span>
          <span> {t('intro.description.part2')}</span>
        </h2>
      </div>
      {/* <PostBtn/> */}
      <Link to="/#skills" id='introLogo'>
        <img
          src={darkMode === 'dark' ? logoWhite : logo}
          alt="logo Daniel Gonzalez"
          className="logoAnim"
        />
        <div className="chevron">
          <span>{language === 'en' ? 'Learn more' : 'A propos'}</span>
          <span className="fa-solid fa-chevron-down"></span>
        </div>
      </Link>
    </section>
  );
};

export default Intro;
