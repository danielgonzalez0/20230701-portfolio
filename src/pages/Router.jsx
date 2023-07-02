import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useSelector } from 'react-redux';

const Router = () => {
  const darkMode = useSelector((state) => state.status.isDarkMode);
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
