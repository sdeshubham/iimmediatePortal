import React from "react";
import "../stylesheets/Header.css";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          {/* <li>
            <Link to="/pricing">Pricing</Link>
          </li> */}
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
        <div className="nav-btn">
          <Link to="/signin" className="sign-btn">
            Sign In
          </Link>
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </div>

        <li className="dropdown">
          <Link to="/" className="head-dropdown">
            Select For
            <FaAngleDown />
          </Link>
          <div className="dropdown-content">
            <Link to="/employee">Employee</Link>
            <Link to="/employer">Employer</Link>
          </div>
        </li>
      </nav>
    </header>
  );
};

export default Header;
