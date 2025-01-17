// import React, { useState } from "react";
// import "../stylesheets/Header.css";
// import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header>
//       <nav>
//         <ul className={`nav-list ${isOpen ? "open" : ""}`}>
//           <li>
//             <Link to="/home" onClick={toggleMenu}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/aboutus" onClick={toggleMenu}>
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link to="/contactus" onClick={toggleMenu}>
//               Contact Us
//             </Link>
//           </li>
//         </ul>

//         <div className="nav-btn">
//           <Link to="/signin" className="sign-btn" onClick={toggleMenu}>
//             Sign In
//           </Link>
//           <Link to="/signup" className="signup-btn" onClick={toggleMenu}>
//             Sign Up
//           </Link>
//         </div>

//         <li className="dropdown">
//           <Link to="/" className="head-dropdown">
//             Select For
//             <FaAngleDown />
//           </Link>
//           <div className="dropdown-content">
//             <Link to="/candidate" onClick={toggleMenu}>
//               Employee
//             </Link>
//             <Link to="/employer" onClick={toggleMenu}>
//               Employer
//             </Link>
//           </div>
//         </li>

//         <div className="hamburger" onClick={toggleMenu}>
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </div>
//       </nav>
//     </header>
//   );
// };
//
// export default Header;

import React, { useState } from "react";
import "../stylesheets/Header.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeaderLogo from "../images/mainLogo.svg"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="header-logo">
        <img src={HeaderLogo} alt="" />
      </div>
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