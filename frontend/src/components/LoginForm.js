import React from 'react';

const LoginForm = ({ viewModel }) => {
  return (
    <form
      className="card text-white p-4 form-card mx-auto"
      style={{ width: 'fit-content' }}
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
          placeholder="Mot de passe"
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
  );
};

export default LoginForm;
