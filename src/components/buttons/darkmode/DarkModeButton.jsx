import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsDarkMode } from '../../../redux/status.slice';


const DarkModeButton = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.status.isDarkMode);
  return (
    <>
      <input
        className="checkbox"
        type="checkbox"
        id="toggle"
        onChange={() => {
          if (darkMode === 'light') {
            dispatch(setIsDarkMode('dark'));
          } else {
            dispatch(setIsDarkMode('light'));
          }
        }}
      />
      <label className="toggle" htmlFor="toggle">
        <span className="fa-regular fa-sun icon icon--light"></span>
        <span className="fa-regular fa-moon icon icon--dark"></span>
        {/* <ion-icon className="icon icon--light" name="sunny-outline"></ion-icon> */}
        {/* <ion-icon className="icon icon--dark" name="moon-outline"></ion-icon> */}
        <span className="ball"></span>
      </label>
    </>
  );
};

export default DarkModeButton;
