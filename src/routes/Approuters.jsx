import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Admin from '../pages/Admin';
import Landing from '../pages/Landing';

const Approuters = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginForm />,
    },
    {
      path: '/admin',
      element: <Admin />,
    },
    {
      path: '/landing',
      element: <Landing />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default Approuters;