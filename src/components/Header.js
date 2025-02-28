import React, { useState } from "react";
import "../stylesheets/Header.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeaderLogo from "../images/headerLogo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <Link to="/">
        <div className="header-logo">
          <img src={HeaderLogo} alt="" />
        </div>
      </Link>
      <nav>
        <div className="" onClick={toggleMenu}>
          {/* <FaBars /> */}
        </div>
        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
        <div className="nav-btn">
          <Link to="/signin" className="sign-btn">
            Log In
          </Link>
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
