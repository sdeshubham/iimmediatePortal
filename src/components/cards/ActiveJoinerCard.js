// import React from "react";

// const ActiveJoinerCard = ({ image, name, currentPosition, salary, expYear }) => {
//   return (
//     <>
//       <div className="activeCard">
//         {image && (
//           <img className="activeCardImg" src={image} alt="" />
//         )}
//         <div className="avctivejoiner-details">
//           <div className="activejoiner-details-one">
//             <h4 className="activejoiner-name">{name}</h4>
//             <p className="activejoiner-name">{salary}</p>
//           </div>
//           <div className="activejoiner-details-one">
//             <p className="activejoiner-role">{currentPosition}</p>
//             <p className="activejoiner-role">{expYear}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ActiveJoinerCard;



import React, { useState, useEffect } from "react";

const ActiveJoinerCard = ({ image, name, currentPosition, salary, expYear }) => {
  const [activeSalary, setActiveSalary] = useState(salary)
  useEffect(() => {
    let stringifiedSalary = ""
    stringifiedSalary = activeSalary.toLocaleString("en-IN")
    setActiveSalary(stringifiedSalary);
  }, [salary])
  return (
    <>
      <div className="activeCard">
        {image && (
          <img className="activeCardImg" src={image} alt="" />
        )}
        <div className="avctivejoiner-details">
          <div className="activejoiner-details-one">
            <h4 className="activejoiner-name">{name}</h4>
            <p className="activejoiner-name">{activeSalary}</p>
          </div>
          <div className="activejoiner-details-one">
            <p className="activejoiner-role">{currentPosition}</p>
            <p className="activejoiner-role">{expYear}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveJoinerCard;