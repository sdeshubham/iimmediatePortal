import React from "react";
import "../../stylesheets/Home.css"
import { ImLocation2 } from "react-icons/im";

const StackCard = ({ stackImg, stackName }) => {
  return (
    <>
      <div className="stackCard">
        <div className="stack-details">
          <div className="stack-details-one">
            <img src={stackImg} alt="stackImg" />
            <p>{stackName}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StackCard;