import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import { setMenuIsOpen } from '../../../redux/status.slice';

const DesktopNav = () => {
  const menuIsOpen = useSelector((state) => state.status.isMenuOpen);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setMenuIsOpen(true));
  };
  return (
    <nav>
      <ul>
        <Link
          to="/#intro"
          aria-hidden={menuIsOpen ? false : true}
          onClick={handleClick}
        >
          <li>Home</li>
        </Link>
        <Link
          to="/#skills"
          aria-hidden={menuIsOpen ? false : true}
          onClick={handleClick}
        >
          <li>Skills</li>
        </Link>
        <Link
          to="/#work"
          aria-hidden={menuIsOpen ? false : true}
          onClick={handleClick}
        >
          <li>Work</li>
        </Link>
        <Link
          to="/#about"
          aria-hidden={menuIsOpen ? false : true}
          onClick={handleClick}
        >
          <li>About</li>
        </Link>
        <Link
          to="/#contact"
          aria-hidden={menuIsOpen ? false : true}
          onClick={handleClick}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default DesktopNav;
