import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Main from './pages/Main';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Main /> },
        { path: '/', element: <Main /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
