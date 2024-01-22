import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Mdp = () => {
  return (
    <section className="vh-100 gradient-custom login-page">
      <div className="container py-5 h-100 d-flex align-items-center">
        <div className="col-md-6 offset-md-3">
          <p className='fs-5 text-white text-center'> <FaBookmark  color='white'/>  RED PRODUCT</p>
          <form className="card text-white p-4 h-100 form-card mx-auto my-5" style={{ width: '70%', maxWidth: '500px', height: '400px' }}>

            <p className="fw-bold mb-4 text-uppercase text-dark text-start">Mot de passe oublié</p>
            <p className="text-dark">Entrez votre adresse e-mail pour réinitialiser votre mot de passe.</p>

            <div className="mb-3">
              <input type="email" className="form-control text-dark" placeholder="Votre e-mail" />
            </div>

            <button type="submit" className=" btn btn-outline-light w-100 mb-3 btn-sub btn-dark">
              Envoyer
            </button>
          </form>
            <p className="text-center text-white mt-3 mb-0">
              <Link to="/" className="text-warning fw-bold">Revenir à la connexion</Link>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Mdp;
