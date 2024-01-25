import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="main-container" style={{ display: 'flex', height: '100vh' }}>
      <div className="col-2 fixed-top">
        <Sidebar />
      </div>

      <div className="col-10 offset-2" style={{ display: 'flex', flexDirection: 'column', backgroundColor: "#f3f4f6", height: "100%" }}>
        <div className='nvb'>
          <Navbar />
        </div>

        <div className='outlet' style={{ flex: 1, overflowY: 'auto' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
