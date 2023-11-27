import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useSelector } from 'react-redux';
import ReactGA from 'react-ga';
const TRACKING_ID = process.env.REACT_APP_GOOGLE_TRACKING_ID;
// @ts-ignore
ReactGA.initialize(TRACKING_ID);

const Router = () => {
  // @ts-ignore
  const darkMode = useSelector((state) => state.status.isDarkMode);

    useEffect(() => {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);


  return (
    <BrowserRouter>
      <div id={darkMode}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
