import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Mdp from './components/Mdp';
import Content from './components/Content';
import Cards from './components/Cards';

function App() {
  // Création du routeur avec les différentes routes et éléments associés
  const router = createBrowserRouter([
    {
      index: true,
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: '/mdpoublie',
      element: <Mdp />
    },
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "content",
          element: <Content />
        },
        {
          index: true,
          path: 'cards',
          element: <Cards />
        },
      ]
    }
  ]);

  // Rendu du composant principal avec le routeur
  return <RouterProvider router={router} />;
}

export default App;
