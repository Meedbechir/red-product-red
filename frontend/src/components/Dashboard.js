import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <div className="main-container">
        <div className="col-2 fixed-top">
          <Sidebar />
        </div>
        
        <div className="col-10 offset-2" style={{backgroundColor:"#f3f4f6", height:"100vh"}}>
          <div className='nvb'>
            <Navbar />
          </div>
          
          <div className='outlet'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
