import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
