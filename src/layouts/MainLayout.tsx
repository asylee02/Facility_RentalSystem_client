import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const mainLayout = () => {
  return (
    <div className="h-screen w-full bg-main overflow-x-hidden min-h-screen flex flex-col justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default mainLayout;
