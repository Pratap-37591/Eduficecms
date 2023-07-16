import React from "react";
// import EduLogo from "../../assets/Logo.png";
import "../Navbar/Navbar.css";
import { BrowserRouter, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="nav-container">
        <div className="left">
          <img
            src="https://beta.edificecms.com/builder/elements/images/uploads/project30/168422388164.png"
            alt="EduLogo"
          />
        </div>
        <div className="menu-links">
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>

            <li>
              <Link to="/pricing">Pricing </Link>
            </li>

            <li>
              <Link to="/support">Support </Link>
            </li>
          </ul>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;
