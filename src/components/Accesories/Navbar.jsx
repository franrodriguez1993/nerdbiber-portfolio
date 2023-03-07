import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/Accesories/Navbar.css";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);

  //Change color nav:
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        colorChange && "changeColorNavbar"
      }`}
    >
      <div className="container-fluid">
        <img src="/assets/img/biber.png" alt="biber" className="navbar-logo" />
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="project">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
