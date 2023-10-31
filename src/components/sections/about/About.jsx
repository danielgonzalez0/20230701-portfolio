import React from 'react';
import profilImg from '../../../assets/daniel.jpg';
import SGLogo from '../../../assets/logo/societe-generale-2.svg';
import alphabetLogo from '../../../assets/logo/Alphabet.jpg';
import gaumontLogo from '../../../assets/logo/Gaumont_logo_PNG1.png';
import KBLLogo from '../../../assets/logo/KBL.png';
import fcaLogo from '../../../assets/logo/fca-banklogo.png';
import { Trans, useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about">
      <div className="about-container">
        <div className="wrapper">
          <h2>{t('about.title')}</h2>
          <div className="about-profil">
            <img src={profilImg} alt="potrait" />
          </div>
          <div className="about-description">
            <Trans t={t}>
              <p>
                <span>{t('about.part1')}</span>{' '}
                <span>{t('about.part1Bis')}</span>
              </p>
            </Trans>
            <Trans t={t}>
              <p>
                <span>{t('about.part2')}</span>{' '}
                <span>{t('about.part2Bis')}</span>
              </p>
            </Trans>

            <Trans t={t}>
              <p>
                <span>{t('about.part3')}</span>
              </p>
            </Trans>

            <Trans t={t}>
              <p>{t('about.part4')}</p>
            </Trans>
          </div>
          <div className="about-soft">
            <p>{t('about.part5')}</p>
            <div className="about-soft-content">
              <div className="about-soft-card">
                <span className="fa-solid fa-magnifying-glass"></span>
                <p>{t('about.part6')}</p>
              </div>

              <div className="about-soft-card">
                <span className="fa-solid fa-user-group"></span>
                <p>{t('about.part7')}</p>
              </div>
              <div className="about-soft-card">
                <span className="fa-solid fa-list-check"></span>
                <p>{t('about.part8')}</p>
              </div>
              <div className="about-soft-card">
                <span className="fa-regular fa-clock"></span>
                <p>{t('about.part9')}</p>
              </div>
            </div>
          </div>

          <div className="about-work">
            <p>{t('about.part10')}</p>
            <div className="about-work-content">
              <div className="about-logo-container">
                <ul>
                  <li>
                    <img className="bg" src={fcaLogo} alt="fca logo" />
                  </li>
                  <li>
                    <img src={alphabetLogo} alt="Alphabet logo" />
                  </li>
                  <li>
                    <img className="bg" src={KBLLogo} alt="KBL logo" />
                  </li>
                  <li>
                    <img className="bg" src={SGLogo} alt="SG logo" />
                  </li>
                  <li>
                    <img className="bg" src={gaumontLogo} alt="Gaumont logo" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
