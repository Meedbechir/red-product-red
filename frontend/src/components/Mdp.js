import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PasswordResetForm from './PasswordResetForm';

const Mdp = () => {
  return (
    <section className="vh-100 gradient-custom login-page">
      <div className="container py-5 h-100 d-flex align-items-center">
        <div className="col-md-6 offset-md-3">
          <p className='fs-5 text-white text-center'> <FaBookmark  color='white'/>  RED PRODUCT</p>
          
          <PasswordResetForm />

          <p className="text-center text-white mt-3 mb-0">
            <Link to="/" className="text-warning fw-bold">Revenir à la connexion</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mdp;
