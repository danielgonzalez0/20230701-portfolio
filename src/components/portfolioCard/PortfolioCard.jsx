import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const PortfolioCard = ({ data }) => {
  const language = useSelector((state) => state.status.language);
  console.log(data);

  return (
    <div className="card-container">
      <div className="screenshots">
        <img
          src={data.cover.desktop}
          alt={
            language === 'fr'
              ? `${data.title.fr} version desktop`
              : `${data.title.en} version desktop`
          }
        />
        <img
          src={data.cover.tablet}
          alt={
            language === 'fr'
              ? `${data.title.fr} version tablet`
              : `${data.title.en} version tablet`
          }
        />
        <img
          src={data.cover.mobile}
          alt={
            language === 'fr'
              ? `${data.title.fr} version mobile`
              : `${data.title.en} version mobile`
          }
        />
      </div>
      <div className="card-title">
        <h3>{language === 'fr' ? data.title.fr : data.title.en}</h3>
        <div className="card-btn-container">
          <a target="_blank" rel="noreferrer" href={data.urlDemo}>
            Demo
          </a>
          <a target="_blank" rel="noreferrer" href={data.urlCode}>
            Code
          </a>
        </div>
      </div>
      <div className="card-description">
        {language === 'fr' ? data.description.fr : data.description.en}
      </div>
      <div className="card-tags-container">
        <ul>
          {data.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <span className='divider'></span>
    </div>
  );
};

PortfolioCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    project: PropTypes.string.isRequired,
    title: PropTypes.shape({
      en: PropTypes.string,
      fr: PropTypes.string,
    }),
    cover: PropTypes.shape({
      desktop: PropTypes.string,
      tablet: PropTypes.string,
      mobile: PropTypes.string,
    }),
    pictures: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.shape({
      en: PropTypes.string,
      fr: PropTypes.string,
    }),
    features: PropTypes.shape({
      en: PropTypes.arrayOf(PropTypes.string),
      fr: PropTypes.arrayOf(PropTypes.string),
    }),
    keywords: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    urlCode: PropTypes.string,
    urlDemo: PropTypes.string,
  }),
};

export default PortfolioCard;
