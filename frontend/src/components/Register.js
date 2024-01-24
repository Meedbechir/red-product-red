import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import RegisterViewModel from './RegisterViewModel';

const Register = () => {
  const viewModel = RegisterViewModel();

  return (
    <section className="vh-100 gradient-custom login-page">
      <div className="container py-5 h-100 d-flex align-items-center">
        <div className="col-md-6 offset-md-3">
          <p className="fs-5 text-white text-center">
            <FaBookmark color="white" size={32} /> RED PRODUCT
          </p>
          <form
            className="card text-white p-4 form-card mx-auto my-3"
            style={{ maxWidth: '500px', width: '70%', height: '455px' }}
            onSubmit={viewModel.handleSubmit}
          >
            <p className="fw-bold mb-4 text-uppercase text-dark text-start">
              Inscrivez-vous
            </p>
            <div className="mb-5">
              <input
                type="text"
                className="form-control text-dark"
                placeholder="Nom"
                value={viewModel.name}
                onChange={(e) => viewModel.setName(e.target.value)}
                autoComplete="off"
              />
            </div>
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
                placeholder="Mot de passe"
                value={viewModel.password}
                onChange={(e) => viewModel.setPassword(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="mb-5 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="formBasicCheckbox"
              />
              <label
                className="form-check-label text-dark"
                htmlFor="formBasicCheckbox"
              >
                Accepter les termes et la politique
              </label>
            </div>
            <button
              loading={viewModel.loading}
              type="submit"
              className="btn btn-outline-light w-100 mb-5 btn-sub"
            >
              S'inscrire
            </button>
          </form>
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
