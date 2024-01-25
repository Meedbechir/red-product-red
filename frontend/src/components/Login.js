import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LoginViewModel from './LoginViewModel';
import LoginForm from './LoginForm';

const Login = () => {
  const viewModel = LoginViewModel();

  return (
    <section className="vh-100 gradient-custom login-page">
      <div className=" py-5 d-flex align-items-center justify-content-center">
        <div className="col-md-8">
          <p className="fs-5 text-white text-center mb-2">
            {' '}
            <FaBookmark color="white" size={32} /> RED PRODUCT
          </p>
          <LoginForm viewModel={viewModel} />
          <p className="text-warning text-center pt-3">
            <Link to="/mdpoublie" className="text-warning">
              Mot de passe oublié ?
            </Link>
          </p>
          <p className="text-center text-white mt-3 mb-0">
            Vous n'avez pas de compte ?{' '}
            <Link to="/register" className="text-warning fw-bold">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
