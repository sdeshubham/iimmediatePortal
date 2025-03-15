import React from "react";
import { LuIndianRupee } from "react-icons/lu";
import { PiBag } from "react-icons/pi";

const ActiveJoinerCard = ({ image, name, currentPosition, salary, expYear }) => {
  return (
    <>
      <div className="activeCard">
        {image && (
          <img className="activeCardImg" src={image} alt="" />
        )}
        <div className="avctivejoiner-details">
          <div className="activejoiner-details-one">
            <h4 className="activejoiner-name">{name}</h4>
            <p className="activejoiner-name"><LuIndianRupee />{salary} LPA</p>
          </div>
          <div className="activejoiner-details-one">
            <p className="activejoiner-role">{currentPosition}</p>
            <p className="activejoiner-role"><PiBag />{expYear} Years Exp</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveJoinerCard;