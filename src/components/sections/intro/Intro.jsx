import React from 'react';
import { useTranslation } from 'react-i18next';

const Intro = () => {
  const { t } = useTranslation();
  return (
    <section id="intro">
      <div className="intro_wrapper">
        <h1>{t('intro.title')}</h1>
        <h2>
          <span>{t('intro.description.part1')}</span>
          <span> {t('intro.description.part2')}</span>
        </h2>
      </div>
    </section>
  );
};

export default Intro;
