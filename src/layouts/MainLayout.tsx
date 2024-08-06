import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const mainLayout = () => {
  return (
    <div className="h-screen bg-main">
      <Header />
      <Outlet />
    </div>
  );
};

export default mainLayout;
