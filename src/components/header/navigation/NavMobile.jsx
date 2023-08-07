import React, { useEffect } from 'react';
import DesktopNav from './DesktopNav';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuIsOpen } from '../../../redux/status.slice';

const NavMobile = () => {
  const menuIsOpen = useSelector((state) => state.status.isMenuOpen);
  const selectedLang = useSelector((state) => state.status.language);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const header = document.getElementsByTagName('header')[0];
      const sidebar = document.getElementById('sidebar');
      if (sidebar && menuIsOpen) sidebar.style.top = `${header.offsetHeight}px`;
      if (!menuIsOpen) sidebar.style.top = `-800px`;
    });
  }, []);
  return (
    <div id="sidebar" className={menuIsOpen ? null : 'hidden'}>
      <div
        tabIndex={0}
        className={menuIsOpen ? 'toggle-btn' : 'toggle-btn hidden'}
        onClick={() => {
          dispatch(setMenuIsOpen(!menuIsOpen));
        }}
      >
        <span id="firstcrossbar"></span>
        <span id="middlecrossbar"></span>
        <span id="lastcrossbar"></span>
      </div>
      <p className="menu">
        {menuIsOpen ? 'menu' : `${selectedLang === 'fr' ? 'fermer' : 'close'}`}
      </p>
      <DesktopNav />
    </div>
  );
};

export default NavMobile;
