import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { index: true, element: <Main /> },
        { path: '/', element: <Main /> },
        { path: '/signin', element: <SignIn /> },
        { path: '/signup', element: <SignUp /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
