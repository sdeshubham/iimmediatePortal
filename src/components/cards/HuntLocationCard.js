import React from "react";
import { ImLocation2 } from "react-icons/im";

const HuntLocationCard = ({ locationName }) => {
  return (
    <>
      <div className="huntlocationCard">
        <div className="huntlocation-details">
          <div className="huntlocation-details-one">
            <ImLocation2 size={25} color="EA4232" />
            <p>{locationName}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HuntLocationCard;
