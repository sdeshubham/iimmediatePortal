import React from "react";

const ProfProject = ({ expImgLogo, projRole, projDuration, projOrg, projDesc }) => {
  return (
    <>
      <div className="proj-boxesOne">
        <div className="profproj-content">
          <img src={expImgLogo} alt="" />
          <div className="project-boxTwo">
            <p className="projrole">{projRole}</p>
            <p className="projDuration">{projDuration}</p>
            <p className="projOrg">Assosiated with {" "}{projOrg}</p>
            <p className="projDese">{projDesc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfProject;
