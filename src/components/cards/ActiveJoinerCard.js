import React from "react";

const ActiveJoinerCard = ({ image, name, role, salary, experience }) => {
  return (
    <>
      <div className="activeCard">
        {image && (
          <img className="activeCardImg" src={image} alt="Activejoin img" />
        )}
        <div className="avctivejoiner-details">
          <div className="activejoiner-details-one">
            <h4 className="activejoiner-name">{name}</h4>
            <p className="activejoiner-name">{salary}</p>
          </div>
          <div className="activejoiner-details-one">
            <p className="activejoiner-role">{role}</p>
            <p className="activejoiner-role">{experience}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveJoinerCard;
