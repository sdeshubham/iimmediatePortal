// import React from "react";

// const truncateName = (name) => {
//   return name.split(" ").slice(0, 2).join(" ");
// };

// const HuntLocationCard = ({ honelocationIcons, locationName }) => {
//   return (
//     <div className="huntlocationCard">
//       <div className="huntlocation-details">
//         <div className="huntlocation-details-one">
//           <img
//             src={honelocationIcons}
//             alt="location"
//             style={{ width: "30px", height: "30px" }}
//           />
//           <p>{truncateName(locationName)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HuntLocationCard;

import React from "react";

const truncateName = (name) => {
  return name.split(" ").slice(0, 2).join(" ");
};

const HuntLocationCard = ({ honelocationIcons, name }) => {
  return (
    <div className="huntlocationCard">
      <div className="huntlocation-details">
        <div className="huntlocation-details-one">
          <img
            src={honelocationIcons}
            alt="location"
            style={{ width: "30px", height: "30px" }}
          />
          <p>{truncateName(name)}</p>
        </div>
      </div>
    </div>
  );
};

export default HuntLocationCard;
