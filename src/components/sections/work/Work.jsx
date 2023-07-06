import React from 'react';
import portfolioArray from '../../../assets/data/portfolio.json';
import PortfolioCard from '../../portfolioCard/PortfolioCard';
import { useTranslation } from 'react-i18next';

const Work = () => {
  const { t } = useTranslation();
  return (
    <section id="work">
      <h2>{t("work.title")}</h2>
      {portfolioArray.map((project) => (
        <PortfolioCard data={project} key={project.id}/>
      ))}
    </section>
  );
};

export default Work;
