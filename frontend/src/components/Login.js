import React, { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import AuthServices from '../services/authServices';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = {
        email,
        password,
      };
      setLoading(true);
      const response = await AuthServices.loginUser(data);
      console.log(response.data);
      localStorage.setItem('todoAppUser', JSON.stringify(response.data));
      alert('Connexion Réussie');
      navigate('/content');
      setLoading(false);
    } catch (err) {
      console.log(err);
      alert(err);
      setLoading(false);
    }
  };

  return (
    <section className="vh-100 gradient-custom login-page">
      <div className="container py-5 d-flex align-items-center">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <p className="fs-5 text-white text-center">
            {' '}
            <FaBookmark color="white" /> RED PRODUCT
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
            </div>

            <div className="mb-5">
              <input
                type="password"
                className="form-control text-dark"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              loading={loading}
              type="submit"
              className=" btn btn-outline-light w-100 mb-5 btn-sub"
              onClick={handleSubmit}
            >
              Se connecter
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
