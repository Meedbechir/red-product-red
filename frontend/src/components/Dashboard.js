import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      {/* Conteneur principal de la page */}
      <div className="main-container">
        {/* Colonne de la barre latérale (largeur fixe) */}
        <div className="col-2 fixed-top">
          <Sidebar />
        </div>
        
        {/* Colonne principale (largeur dynamique avec décalage pour la barre latérale) */}
        <div className="col-10 offset-2">
          {/* Barre de navigation en haut de la page */}
          <div className='nvb'>
            <Navbar />
          </div>
          
          {/* Zone de sortie pour le rendu des composants de pages enfants (react-router) */}
          <div className='outlet'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
