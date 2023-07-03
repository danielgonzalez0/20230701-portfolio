import React from 'react';
import profilImg from '../../../assets/daniel.jpg';
import { Trans, useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about">
      <div className="wrapper">
        <h2>A little about me</h2>
        <div className="about-profil">
          <img src={profilImg} alt="potrait" />
        </div>
        <div className="about-description">
          <Trans t={t}>
            <p>{t('about.part1')}</p>
          </Trans>
          <Trans t={t}>
            <p>{t('about.part2')}</p>
          </Trans>

          <Trans t={t}>
            <p>{t('about.part3')}</p>
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
      </div>
    </section>
  );
};

export default About;
