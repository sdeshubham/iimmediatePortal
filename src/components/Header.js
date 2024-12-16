// import React from "react";
// import "../stylesheets/Header.css";
// import { FaAngleDown } from "react-icons/fa6";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header>
//       <nav>
//         <ul className="nav-list">
//           <li>
//             <Link to="/home">Home</Link>
//           </li>
//           <li>
//             <Link to="/aboutus">About Us</Link>
//           </li>
//           <li>
//             <Link to="/pricing">Pricing</Link>
//           </li>
//           <li>
//             <Link to="/contactus">Contact Us</Link>
//           </li>

//           <div className="nav-btn">
//             <Link to="/signin" className="login-btn">Sign In</Link>
//             <Link to="/signup" className="signup-btn">Sign Up</Link>
//           </div>

//           <li>
//             <div className="dropdown">
//               <Link to="/" className="head-dropdown">
//                 For Employee <FaAngleDown />
//               </Link>
//               <div className="dropdown-content">
//                 <Link to="/employee/dashboard">Candidate</Link>
//                 <Link to="/employee/profile">Employee</Link>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import "../stylesheets/Header.css";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-list">
          {/* Navigation Links */}
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          </ul>
          {/* Authentication Buttons */}
          <div className="nav-btn">
            <Link to="/signin" className="sign-btn">Sign In</Link>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </div>

          {/* Dropdown for "For Employee" */}
          <li className="dropdown">
            <Link to="/" className="head-dropdown">
              For Employee <FaAngleDown />
            </Link>
            {/* Dropdown Content */}
            <div className="dropdown-content">
              <Link to="/candidate">Candidate</Link>
              <Link to="/employee">Employee</Link>
            </div>
          </li>
        
      </nav>
    </header>
  );
};

export default Header;
