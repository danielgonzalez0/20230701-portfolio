import React from 'react';
// import portfolioArray from '../../../assets/data/portfolio.json';
import PortfolioCard from '../../portfolioCard/PortfolioCard';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Work = () => {
  const portfolioArray = useSelector((state) => state.projects);
  console.log(portfolioArray);
  const { t } = useTranslation();
  return (
    <>
      {portfolioArray.length > 0 && (
        <section id="work">
          <h2>{t('work.title')}</h2>
          {portfolioArray.map((project) => (
            <PortfolioCard data={project} key={project.id} />
          ))}
        </section>
      )}
    </>
  );
};

export default Work;
