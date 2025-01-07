import React from "react";
import { ImLocation2 } from "react-icons/im";

const HuntLocationCard = ({ honelocationIcons, locationName }) => {
  return (
    <>
      <div className="huntlocationCard">
        <div className="huntlocation-details">
          <div className="huntlocation-details-one">
            {/* <ImLocation2 size={25} color="EA4232" /> */}
            <img
              src={honelocationIcons}
              alt="location"
              style={{ width: "30px", height: "30px" }}
            />
            <p>{locationName}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HuntLocationCard;
