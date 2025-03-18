// import React from "react";
// import "../../stylesheets/Home.css";
// import emprcompLogo from "../../images/defaultImg.png";
// import { useNavigate } from "react-router-dom";

// const EmployerHomeCard = ({id}) => {
//   const navigate = useNavigate();

//   const handleViewEmprProfile = () => {
//     navigate(`/employer-profile/${id}`);
//   };

//   return (
//     <>
//       <a onClick={handleViewEmprProfile}>
//         <div className="empr-homeCard">
//           <img src={emprcompLogo} alt="" className="empr-homeCardImg" />
//           <div className="emprhomeCardDetails">
//             <h6>Arnnima Solution</h6>
//             <p>Mumbai Maharashtra</p>
//           </div>
//         </div>
//       </a>
//     </>
//   );
// };

// export default EmployerHomeCard;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../../stylesheets/Home.css";
// import emprcompLogo from "../../images/defaultImg.png";

// const EmployerHomeCard = ({ id, companyName, logo }) => {
//   const navigate = useNavigate();

//   const handleViewEmprProfile = () => {
//     navigate(`/employer-profile/${id}`);
//   };

//   return (
//     <div className="emprCardBox">
//       <a onClick={handleViewEmprProfile}>
//         <div className="empr-homeCard">
//           <img src={logo || emprcompLogo} alt={companyName} className="empr-homeCardImg" />
//           <div className="emprhomeCardDetails">
//             <h6>{companyName}</h6>
//           </div>
//         </div>
//       </a>
//     </div>
//   );
// };

// export default EmployerHomeCard;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../../stylesheets/Home.css";
import emprcompLogo from "../../images/defaultImg.png";

const EmployerHomeCard = ({ id, companyName, email, contactNumber, designationName }) => {
  const navigate = useNavigate();

  const handleViewEmprProfile = () => {
    navigate(`/employer-profile/${id}`);
  };

  return (
    <div className="emprCardBox">
      <div
        className="empr-homeCard"
        onClick={handleViewEmprProfile}
        style={{ cursor: "pointer" }}
      >
        <div className="emprhomeCardDetails">
          <h6>{companyName}</h6>
          <p>Email: {email}</p>
          <p>Contact: {contactNumber}</p>
          <p>Designation: {designationName}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployerHomeCard;
