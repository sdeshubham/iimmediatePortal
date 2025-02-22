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
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/aboutus">About Us</a>
          </li>
          <li>
            <a href="/contactus">Contact Us</a>
          </li>
        </ul>
        <div className="nav-btn">
          <a href="/signin" className="sign-btn">
            Log In
          </a>
          <a href="/signup" className="signup-btn">
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
