// import React from "react";

// const ActiveJoinerCard = ({ image, name, role, salary, experience }) => {
//   return (
//     <>
//       <div className="activeCard">
//         {image && (
//           <img className="activeCardImg" src={image} alt="Activejoin img" />
//         )}
//         <div className="avctivejoiner-details">
//           <div className="activejoiner-details-one">
//             <h4 className="activejoiner-name">{name}</h4>
//             <p className="activejoiner-name">{salary}</p>
//           </div>
//           <div className="activejoiner-details-one">
//             <p className="activejoiner-role">{role}</p>
//             <p className="activejoiner-role">{experience}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ActiveJoinerCard;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import activejoinerData from "../../components/cards/activeJoinerData"

// const ActiveJoinerCard = () => {
//   const [joinerData, setJoinerData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJoinerData = async () => {
//       try {

//         const response = await axios.get("http://localhost:3000/withOutLogin/active-limited-joiner");

//         if (response.status === 200) {
//           setJoinerData(response.data.userData);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJoinerData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       {activejoinerData.map((joiner, index) => (
//         <div key={index} className="activeCard">
//           {joiner.image && (
//             <img className="activeCardImg" src={joiner.image} alt="Activejoin img" />
//           )}
//           <div className="avctivejoiner-details">
//             <div className="activejoiner-details-one">
//               <h4 className="activejoiner-name">{joiner.name || "Unknown"}</h4>
//               <p className="activejoiner-name">{joiner.salary}</p>
//             </div>
//             <div className="activejoiner-details-one">
//               <p className="activejoiner-role">{joiner.currentPosition || "No Position"}</p>
//               <p className="activejoiner-role">{joiner.expYear} years of experience</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default ActiveJoinerCard;






// import React from "react";

// const ActiveJoinerCard = ({ image, name, currentPosition, salary, expYear }) => {
//   return (
//     <div className="activeCard">
//       {image && (
//         <img className="activeCardImg" src={image} alt="Active Joiner" />
//       )}
//       <div className="activejoiner-details">
//         <div className="activejoiner-details-one">
//           <h4 className="activejoiner-name">{name || "Unknown"}</h4>
//           <p className="activejoiner-salary">{salary || "N/A"}</p>
//         </div>
//         <div className="activejoiner-details-one">
//           <p className="activejoiner-role">{currentPosition || "No Position"}</p>
//           <p className="activejoiner-exp">{expYear || 0} years of experience</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActiveJoinerCard;


import React from "react";
import PropTypes from "prop-types";

const ActiveJoinerCard = ({ image, name, currentPosition, salary, expYear }) => {
  return (
    <div className="activeCard">
      {image ? (
        <img className="activeCardImg" src={image} alt={name || "Active Joiner"} />
      ) : (
        <div className="placeholder-img">NoImg</div>
      )}
      <div className="activejoiner-details">
        <div className="activejoiner-details-one">
          <h4 className="activejoiner-name">{name}</h4>
          <p className="activejoiner-salary">{salary}</p>
        </div>
        <div className="activejoiner-details-one">
          <p className="activejoiner-role">{currentPosition}</p>
          <p className="activejoiner-exp">{expYear} experience</p>
        </div>
      </div>
    </div>
  );
};

// PropTypes for validation
ActiveJoinerCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  currentPosition: PropTypes.string,
  salary: PropTypes.string,
  expYear: PropTypes.number,
};

// Default values to avoid undefined data
ActiveJoinerCard.defaultProps = {
  image: "",
  name: "Unknown",
  currentPosition: "No Position",
  salary: "N/A",
  expYear: 0,
};

export default ActiveJoinerCard;
