import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import RegisterViewModel from './RegisterViewModel';
import RegisterForm from './RegisterForm';

const Register = () => {
  const viewModel = RegisterViewModel();

  return (
    <section className="vh-100 gradient-custom login-page">
      <div className="container py-5 h-100 d-flex align-items-center">
        <div className="col-md-6 offset-md-3">
          <p className="fs-5 text-white text-center">
            <FaBookmark color="white" size={32} /> RED PRODUCT
          </p>
          <RegisterForm viewModel={viewModel} />
          <p className="text-center text-white">
            Vous avez déjà un compte ?{' '}
            <Link to="/" className="text-warning fw-bold">
              Connectez-vous
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
