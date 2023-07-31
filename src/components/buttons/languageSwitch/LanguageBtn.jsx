import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../../redux/status.slice';
import ukFlag from './united-kingdom.png';
import frFlag from './france.png';

const LanguageBtn = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const selectedLang = useSelector((state) => state.status.language);

  const handleLangChange = (e) => {
    dispatch(setLanguage(e.target.value));
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="select-container">
      {selectedLang === 'fr' ? (
        <img src={frFlag} alt="french flag" />
      ) : (
        <img src={ukFlag} alt="uk flag" />
      )}
      <select onChange={handleLangChange} value={selectedLang}>
        <option value="fr">FR</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default LanguageBtn;
