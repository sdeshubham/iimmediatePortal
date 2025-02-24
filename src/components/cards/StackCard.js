import React from "react";
import "../../stylesheets/Home.css"

const StackCard = ({ techStacklogo, tecStackName }) => {
  return (
    <>
      <div className="stackCard">
        <div className="stack-details">
          <div className="stack-details-one">
            <img src={techStacklogo} alt="" />
            <p>{tecStackName}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StackCard;