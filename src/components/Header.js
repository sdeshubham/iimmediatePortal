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

// export default Header;


import React, { useState } from "react";
import "../stylesheets/Header.css";
import { FaBars } from "react-icons/fa"; // Hamburger Icon
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
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
