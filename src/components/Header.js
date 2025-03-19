import React, { useState } from "react";
import "../stylesheets/Header.css";
import { Link, useNavigate } from "react-router-dom";
import HeaderLogo from "../images/headerLogo.svg";
import { useAuth } from "../components/AuthContext"; // AuthContext import kiya
import defaultLogo from "../images/defaultImg.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, employerName, logout } = useAuth(); // Context se employerName fetch kiya
  const navigate = useNavigate();

  const handleMouseEnter = () => setMenuOpen(true);
  const handleMouseLeave = () => setMenuOpen(false);

  return (
    <header>
      <Link to="/">
        <div className="header-logo">
          <img src={HeaderLogo} alt="Logo" />
        </div>
      </Link>
      <nav>
        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
        </ul>
        <div className="nav-btn">
          {user ? (
            <div
              className="headerLoginProfile"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p>{employerName || "Employer Name"}</p> {/* Dynamic employer name */}
              <img src={defaultLogo} alt="" height={25} />
              {menuOpen && (
                <div className="headerProfDropdown">
                  <Link to="/employer" >View Profile</Link>
                  <button onClick={() => { logout(); navigate("/"); }} className="emprSignOut-btn">
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/signin" className="sign-btn">Log In</Link>
              <Link to="/signup" className="signup-btn">Sign Up</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
