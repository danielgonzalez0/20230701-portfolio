import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../../redux/status.slice';

const LanguageBtn = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const selectedLang = useSelector((state) => state.status.language);

  const handleLangChange = (e) => {
    console.log(e.target.value);
    dispatch(setLanguage(e.target.value));
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="select-container">
      <select onChange={handleLangChange} value={selectedLang}>
        <option value="fr">FR</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default LanguageBtn;
