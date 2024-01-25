import React from 'react';

const PasswordResetForm = () => {
  return (
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
  );
};

export default PasswordResetForm;
