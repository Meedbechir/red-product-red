import React from 'react';
import { FaBell, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import NavbarViewModel from './NavbarViewModel';

const Navbar = () => {
  const viewModel = NavbarViewModel();

  return (
    <nav className="navbar border-bottom navbar-expand-lg fixed-top nvb">
      <div className="container-fluid">
        <span className="navbar-brand text-dark fs-3 mx-4">Liste des Hôtels</span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <form className="d-flex align-items-center">
              <input
                type="search"
                placeholder="Rechercher"
                className="form-control rounded-pill"
                aria-label="Search"
              />
            </form>

            <li className="nav-item">
              <FaBell className="icon mx-2 mt-2" size={20} color="black" />
            </li>

            <li className="nav-item">
              <FaUserCircle
                className="icon mx-2 mt-2"
                size={20}
                color="black"
              />
            </li>

            <li className="nav-item">
              <FaSignOutAlt
                onClick={viewModel.handleLogout}
                className="icon mx-4 mt-2"
                size={20}
                color="black"
                style={{ cursor: 'pointer' }}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
