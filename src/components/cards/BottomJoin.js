import React from "react";
import bottomBoyImg from "../../images/homeBottomBoy.png";

const BottomJoin = () => {
  return (
    <>
      <div className="bottomJoin">
        <div className="homeBottom">
          <div className="homeBottomBox">
            <p>
              “Let’s get connected and start <br />
              finding your dream job”
            </p>
            <button className="bottomJoinBtn">Join Now</button>
          </div>
          <img src={bottomBoyImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default BottomJoin;
