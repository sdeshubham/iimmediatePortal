import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../stylesheets/Header.css";
import HeaderLogo from "../images/headerLogo.svg";
import defaultLogo from "../images/defaultImg.png";

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const Header = () => {
  
  // const [menuOpen, setMenuOpen] = useState(false);
  // const { user, employerName, logout } = useAuth();
  // const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [employerName, setEmployerName] = useState(null);
  const navigate = useNavigate();
  const authToken = Cookies.get("authToken");
  const userId = Cookies.get("userId");

  const handleMouseEnter = () => setMenuOpen(true);
  const handleMouseLeave = () => setMenuOpen(false);

  useEffect(() => {
    if (!authToken || !userId) return;
    
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/getAllUserDetails`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({ userId }),
        });
        const data = await response.json();
        if (data.status === 200) {
          setEmployerName(data.result[0]?.name || "Employer");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    
    fetchUserData();
  }, [authToken, userId]);

  const handleLogout = () => {
    Cookies.remove("authToken");
    Cookies.remove("userId");
    navigate("/signin");
  };

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

        {/* <div className="nav-btn">
          {user ? (
            <div
              className="headerLoginProfile"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p>{employerName || "Employer Name"}</p> 
              <img src={defaultLogo} alt="" height={25} />
              {menuOpen && (
                <div className="headerProfDropdown">
                  <Link to="/employer" >View Profile</Link>
                  <button onClick={handleLogout} className="emprSignOut-btn">
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
        </div> */}
        <div className="nav-btn">
  {authToken ? (
    <div
      className="headerLoginProfile"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>{employerName || "Employer Name"}</p> 
      <img src={defaultLogo} alt="" height={25} />
      {menuOpen && (
        <div className="headerProfDropdown">
          <Link to="/employer">View Profile</Link>
          <button onClick={handleLogout} className="emprSignOut-btn">
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
