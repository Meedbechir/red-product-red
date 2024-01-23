import React from "react";
import { FaBookmark } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    // Barre de navigation latérale
    <nav className="">
      {/* Logo de l'application */}
      <p className="fs-5 text-white text-start brand-text">
        <FaBookmark color="white" className="fa-bookmark" /> RED PRODUCT
      </p>
      
      {/* Section principale */}
      <p className="lead text-white text-start mt-4 fs-6">Principal</p>
      
      {/* Lien vers le tableau de bord */}
      <NavLink to="/cards" className="nav-link text-white text-start mb-3 fs-5">
        <HiOutlineSquares2X2 size={20} color="white" className="me-2" />
        <span className="mobile-hidden">Dashboard</span>
      </NavLink>
      
      {/* Lien vers la liste des hôtels */}
      <NavLink to="content" className="nav-link text-white text-start fs-5">
        <BsLaptop size={20} className="me-2" />
        <span className="mobile-hidden">Liste des hôtels</span>
      </NavLink>
    </nav>
  );
};

export default Sidebar;
