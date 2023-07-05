import React from 'react';
import { useTranslation } from 'react-i18next';
import htmlLogo from '../../../assets/logo/html.png';
import htmlWhiteLogo from '../../../assets/logo/html-white.png';
import cssLogo from '../../../assets/logo/css.png';
import cssWhiteLogo from '../../../assets/logo/css-white.png';
import jsLogo from '../../../assets/logo/js.png';
import jsWhiteLogo from '../../../assets/logo/js-white.png';
import sassLogo from '../../../assets/logo/sass-1.svg';
import reactLogo from '../../../assets/logo/react-2.svg';
import reduxLogo from '../../../assets/logo/redux.svg';
import PSLogo from '../../../assets/logo/adobe-photoshop-2.svg';
import figmaLogo from '../../../assets/logo/figma-5.svg';
import typeSciptLogo from '../../../assets/logo/typescript.svg';
import mySQLLogo from '../../../assets/logo/mysql-3.svg';
import expressLogo from '../../../assets/logo/express-109.svg';
import mongoLogo from '../../../assets/logo/mongodb-icon-1.svg';
import { useSelector } from 'react-redux';

const Skills = () => {
  const { t } = useTranslation();
  const darkMode = useSelector((state) => state.status.isDarkMode);
  const language = useSelector((state) => state.status.language);

  // let scrollYenPourcentage =
  //   (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  // console.log('scrollYenPourcentage', scrollYenPourcentage);
  // console.log('window.innerHeight', window.innerHeight);
  // console.log('window.scrollY', window.scrollY);
  // console.log('document.body.offsetHeight', document.body.offsetHeight);
  return (
    <section id="skills">
      <div className="skills-container animeOpen">
        <h2>{t('skills.title')}</h2>
        <p className="skill-desc">{t('skills.intro')}</p>
        <div className="skills-content">
          <div className="skills-logo-section">
            <p>{t('skills.part1')}</p>
            <div className="skills-logo-container">
              <ul>
                <li>
                  <img
                    src={darkMode === 'light' ? htmlLogo : htmlWhiteLogo}
                    alt="html logo"
                  />
                </li>
                <li>
                  <img
                    src={darkMode === 'light' ? cssLogo : cssWhiteLogo}
                    alt="css logo"
                  />
                </li>
                <li>
                  <img
                    className={darkMode === 'dark' ? 'bg' : null}
                    src={sassLogo}
                    alt="sass logo"
                  />
                </li>
                <li>
                  <img
                    src={darkMode === 'light' ? jsLogo : jsWhiteLogo}
                    alt="javascript logo"
                  />
                </li>
                <li>
                  <img src={PSLogo} alt="Photoshop logo" />
                </li>
                <li>
                  <img src={figmaLogo} alt="figma logo" />
                </li>
                <li>
                  <img src={reactLogo} alt="react logo" className="bg" />
                </li>
                <li>
                  <img
                    src={reduxLogo}
                    alt="redux logo"
                    className={darkMode === 'dark' ? 'bg' : null}
                  />
                </li>
                <li>
                  <img src={typeSciptLogo} alt="typeScript logo" />
                </li>
                <li>
                  <img className="bg" src={expressLogo} alt="express logo" />
                </li>
                <li>
                  <img src={mySQLLogo} alt="mySQL logo" />
                </li>
                <li>
                  <img src={mongoLogo} alt="MongoDB logo" />
                </li>
              </ul>
            </div>
          </div>
          <div className="skills-other-section">
            <div className="skills-other-list-card">
              <p>
                <span className="fa-solid fa-screwdriver-wrench"></span>
                <span>{language === 'en' ? 'Tools' : 'Outils'}</span>
              </p>
              <ul>
                <li>
                  <span className="fa-solid fa-check"></span>
                  <span>Git + Github</span>
                </li>
                <li>
                  <span className="fa-solid fa-check"></span>
                  <span>Chrome DevTools</span>
                </li>
                <li>
                  <span className="fa-solid fa-check"></span>
                  <span>
                    {language === 'en' ? 'Command Line' : 'Ligne de commande'}
                  </span>
                </li>
                <li>
                  <span className="fa-solid fa-check"></span>
                  <span>Postman</span>
                </li>
              </ul>
            </div>
            <div className="skills-other-list-card">
              <p>
                <span className="fa-regular fa-lightbulb"></span>
                <span>{language === 'en' ? 'Knowledge' : 'Connaissances'}</span>
              </p>
              <ul>
                <li>
                  <span className="fa-solid fa-check"></span>
                  <span>Responsive Design</span>
                </li>
                <li>
                  <span className="fa-solid fa-check"></span>
                  <span>Design Pattern</span>
                </li>
                <li>
                  <span className="fa-solid fa-check"></span>
                  <span>
                    {language === 'en' ? 'Accessibility' : 'Accessibilité'}
                  </span>
                </li>
                <li>
                  <span className="fa-solid fa-check"></span>
                  <span>SEO</span>
                </li>
                <li>
                  <span className="fa-solid fa-check"></span>
                  <span>
                    {language === 'en'
                      ? 'Unit Tests (jest)'
                      : 'Tests unitaires (Jest)'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
