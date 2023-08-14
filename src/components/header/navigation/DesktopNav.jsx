import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import { setMenuIsOpen } from '../../../redux/status.slice';

const DesktopNav = () => {
  const menuIsOpen = useSelector((state) => state.status.isMenuOpen);
  const selectedLang = useSelector((state) => state.status.language);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(setMenuIsOpen(true));
    e.target.classList.add("isActive")
    setTimeout(()=>{
      e.target.classList.remove('isActive');
    },1000)
  };
  return (
    <nav>
      <ul aria-hidden={menuIsOpen ? true : false}>
        <Link
          to="/#intro"
          tabIndex={menuIsOpen ? -1 : 0}
          onClick={handleClick}
          role="button"
        >
          <li>{selectedLang === 'fr' ? 'Intro' : 'Home'}</li>
        </Link>
        <Link
          to="/#skills"
          tabIndex={menuIsOpen ? -1 : 0}
          onClick={handleClick}
          role="button"
        >
          <li>{selectedLang === 'fr' ? 'Compétences' : 'Skills'}</li>
        </Link>
        <Link
          to="/#work"
          tabIndex={menuIsOpen ? -1 : 0}
          onClick={handleClick}
          role="button"
        >
          <li>{selectedLang === 'fr' ? 'Projets' : 'Work'}</li>
        </Link>
        <Link
          to="/#about"
          tabIndex={menuIsOpen ? -1 : 0}
          onClick={handleClick}
          role="button"
        >
          <li>{selectedLang === 'fr' ? 'A propos' : 'About'}</li>
        </Link>
        <Link
          to="/#contact"
          tabIndex={menuIsOpen ? -1 : 0}
          onClick={handleClick}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default DesktopNav;
