import React from 'react';

const RegisterForm = ({ viewModel }) => {
  return (
    <>
    <form
      className="card text-white p-4 form-card mx-auto my-3"
      style={{  width: 'fit-content' }}
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
        className="btn btn-outline-light w-100 mb-3 btn-sub"
      >
        S'inscrire
      </button>
    </form>
    </>
  );
};

export default RegisterForm;
