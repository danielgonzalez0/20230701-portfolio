import React from 'react';
// import portfolioArray from '../../../assets/data/portfolio.json';
import PortfolioCard from '../../portfolioCard/PortfolioCard';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Work = () => {
  const portfolioArray = useSelector((state) => state.projects);
  const { t } = useTranslation();
  console.log(portfolioArray);

  return (
    <>
      {portfolioArray.length > 0 && (
        <section id="work">
          <div className="work-container">
            <h2>{t('work.title')}</h2>
            {portfolioArray.map((project) => (
              <PortfolioCard data={project} key={project.id} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Work;
