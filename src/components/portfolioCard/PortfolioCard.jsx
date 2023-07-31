import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PortfolioCard = ({ data }) => {
  const language = useSelector((state) => state.status.language);
  const control = useAnimation();
  const [ref, inView] = useInView();
  const refThree = useRef(null);

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('initial');
    }
  }, [control, inView]);

  const imgAnim = {
    initial: {
      opacity: 0,
      x: Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1),
      y: Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  const imgAnim2 = {
    initial: {
      opacity: 0,
      x: Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1),
      y: Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  const imgAnim3 = {
    initial: {
      opacity: 0,
      x: Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1),
      y: Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <div className="card-container" ref={refThree}>
      {/* {topPos < 800 ? (
        <> */}
      <div className="screenshots">
        <motion.img
          src={data.cover.desktop}
          alt={
            language === 'fr'
              ? `${data.title.fr} version desktop`
              : `${data.title.en} version desktop`
          }
          ref={ref}
          initial="initial"
          animate={control}
          variants={imgAnim}
          transition={{ duration: 1.2 }}
        />
        <motion.img
          src={data.cover.tablet}
          alt={
            language === 'fr'
              ? `${data.title.fr} version tablet`
              : `${data.title.en} version tablet`
          }
          initial="initial"
          animate={control}
          variants={imgAnim2}
          transition={{ duration: 1.2 }}
        />
        <motion.img
          src={data.cover.mobile}
          alt={
            language === 'fr'
              ? `${data.title.fr} version mobile`
              : `${data.title.en} version mobile`
          }
          initial="initial"
          animate={control}
          variants={imgAnim3}
          transition={{ duration: 1.2 }}
        />
      </div>
      <div className="card-title">
        <h3>{language === 'fr' ? data.title.fr : data.title.en}</h3>
        <div className="card-btn-container">
          {data.urlDemo && (
            <a
              target="_blank"
              rel="noreferrer"
              href={data.urlDemo}
              className="button"
            >
              Demo
            </a>
          )}
          <a
            target="_blank"
            rel="noreferrer"
            href={data.urlCode}
            className="button"
          >
            Code
          </a>
        </div>
      </div>
      <div className="card-description">
        {language === 'fr' ? data.description.fr : data.description.en}
      </div>
      <div className="card-tags-container">
        <ul>
          {language === 'fr'
            ? data.tags.fr.map((tag, index) => <li key={index}>{tag}</li>)
            : data.tags.en.map((tag, index) => <li key={index}>{tag}</li>)}
        </ul>
      </div>
      <span className="divider"></span>
      {/* </>
      ) : null} */}
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
    tags: PropTypes.shape({
      en: PropTypes.arrayOf(PropTypes.string),
      fr: PropTypes.arrayOf(PropTypes.string),
    }),
    urlCode: PropTypes.string,
    urlDemo: PropTypes.string,
  }),
};

export default PortfolioCard;
