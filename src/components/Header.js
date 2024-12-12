import React, { useState, useEffect } from "react";
import "../stylesheets/Header.css";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li>
            <a href="/products">Home</a>
          </li>
          <li>
            <a href="/services">About Us</a>
          </li>
          <li>
            <a href="/about">Pricing</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>

          <div className="nav-btn">
            <button className="login-btn">LogIn</button>
            <button className="signup-btn">SignUp</button>
          </div>
          <li>
            <a className="head-dropdown" href="/">For Employee <FaAngleDown /></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
