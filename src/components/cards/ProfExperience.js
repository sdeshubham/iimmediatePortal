import React from "react";
import "../../stylesheets/EmpProfile.css";

const ProfExperience = ({
  expImgLogo,
  expRole,
  expCompany,
  expLocation,
  expDuration,
  expDesc,
}) => {
  return (
    <>
      <div className="expBox-card">
        <img src={expImgLogo} alt="" />
        <div className="exp-boxTwo">
          <div className="exp-boxThree">
            <div className="exp-boxfour">
              <p className="expRole">{expRole}</p>
              <p className="expComp">{expCompany}</p>
              <p className="expLoact">{expLocation}</p>
            </div>
            <p className="expDuration">{expDuration}</p>
          </div>
          <p className="expDese">{expDesc}</p>
        </div>
      </div>
    </>
  );
};

export default ProfExperience;
