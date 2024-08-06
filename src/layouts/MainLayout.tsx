import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const mainLayout = () => {
  return (
    <div className="bg-main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default mainLayout;
