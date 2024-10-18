// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark px-0 py-3 navbar-bordered">
      <div className="container-xl">
        <Link to="/" className="navbar-brand">
          {/* Logo */}
          {/* <img src="/assets/topupin-logo.png" className="logo" alt="..." /> */}
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-lg-auto">
            <Link to="/" className="nav-item anim-border-bottom nav-link" aria-current="page">Home</Link>
            <Link to="/Projects" className="nav-item anim-border-bottom nav-link" aria-current="page">Projects</Link>
            <Link to="/About" className="nav-item anim-border-bottom nav-link" aria-current="page">About</Link>
            <Link to="/Contact" className="nav-item anim-border-bottom nav-link" aria-current="page">Contact</Link>
            <Link to="/Profile" className="nav-item anim-border-bottom nav-link" aria-current="page">Profile</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
