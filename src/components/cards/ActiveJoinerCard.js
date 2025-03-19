// import React, { useState, useEffect } from "react";
// import { LuIndianRupee } from "react-icons/lu";
// import { PiBag } from "react-icons/pi";

// const ActiveJoinerCard = ({ image, name, currentPosition, salary, expYear }) => {
//   const [activeSalary, setActiveSalary] = useState(salary)
//   useEffect(() => {
//     let stringifiedSalary = ""
//     stringifiedSalary = activeSalary.toLocaleString("en-IN")
//     setActiveSalary(stringifiedSalary);
//   }, [salary])
//   return (
//     <>
//       <div className="activeCard">
//         {image && (
//           <img className="activeCardImg" src={image} alt="" />
//         )}
//         <div className="avctivejoiner-details">
//           <div className="activejoiner-details-one">
//             <h4 className="activejoiner-name">{name}</h4>
//             <p className="activejoiner-name"><LuIndianRupee />{salary} LPA</p>
//           </div>
//           <div className="activejoiner-details-two">
//             <p className="activejoiner-role">{currentPosition}</p>
//             <p className="activejoiner-expyear"><PiBag className="piBag-icon" />{expYear} Years Exp</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ActiveJoinerCard;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LuIndianRupee } from "react-icons/lu";
import { PiBag } from "react-icons/pi";

const ActiveJoinerCard = ({ id, image, name, currentPosition, salary, expYear }) => {
  const [activeSalary, setActiveSalary] = useState(salary);
  const navigate = useNavigate();

  useEffect(() => {
    let stringifiedSalary = "";
    stringifiedSalary = activeSalary.toLocaleString("en-IN");
    setActiveSalary(stringifiedSalary);
  }, [salary]);

  const handleViewProfile = () => {
    navigate(`/active-joiner-profile/${id}`);
  };

  return (
    <>
      <div className="activeCard" onClick={handleViewProfile} style={{ cursor: "pointer" }}>
        {image && <img className="activeCardImg" src={image} alt="" />}
        <div className="avctivejoiner-details">
          <div className="activejoiner-details-one">
            <h4 className="activejoiner-name">{name}</h4>
            <p className="activejoiner-name"><LuIndianRupee className="rupeeIcons" />{activeSalary} LPA</p>
          </div>
          <div className="activejoiner-details-two">
            <p className="activejoiner-role">{currentPosition}</p>
            <p className="activejoiner-expyear"><PiBag className="piBag-icon" />{expYear} Years Exp</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveJoinerCard;
