// Login.js
import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LoginViewModel from './LoginViewModel';

const Login = () => {
  const viewModel = LoginViewModel();

  return (
    <section className="vh-100 gradient-custom login-page">
      <div className="container py-5 d-flex align-items-center">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <p className="fs-5 text-white text-center">
            {' '}
            <FaBookmark color="white" size={32}/> RED PRODUCT
          </p>
          <form
            className="card text-white p-4 form-card mx-auto"
            style={{ maxWidth: '500px', width: '70%', height: '410px' }}
          >
            <p className="fw-bold mb-4 text-dark text-start">
              Connectez-vous en tant qu'administrateur
            </p>

            <div className="mb-5">
              <input
                type="email"
                className="form-control text-dark"
                placeholder="Email"
                value={viewModel.email}
                onChange={(e) => viewModel.setEmail(e.target.value)}
                autoComplete="off"
              />
            </div>

            <div className="mb-5">
              <input
                type="password"
                className="form-control text-dark"
                placeholder="Password"
                value={viewModel.password}
                onChange={(e) => viewModel.setPassword(e.target.value)}
                autoComplete="off"
              />
            </div>

            <div className="mb-5 form-check">
              <input type="checkbox" className="form-check-input" id="formBasicCheckbox" />
              <label className="form-check-label text-dark" htmlFor="formBasicCheckbox">
                Gardez moi connecté
              </label>
            </div>

            <button
              disabled={viewModel.loading}
              type="submit"
              className=" btn btn-outline-light w-100 mb-5 btn-sub"
              onClick={viewModel.handleSubmit}
            >
              {viewModel.loading ? 'Connexion en cours...' : 'Se connecter'}
            </button>
          </form>

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
