import React from "react";
import { ImLocation2 } from "react-icons/im";

const StackCard = ({ stackImg, stackName }) => {
  return (
    <>
      <div className="stackCard">
        <div className="stack-details">
          <div className="stack-details-one">
            {/* <ImLocation2 size={25} color="EA4232" /> */}
            <img src={stackImg} alt="stackImg" />
            <p>{stackName}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StackCard;
