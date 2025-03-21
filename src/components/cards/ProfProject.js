import React, { useState } from "react";
import projLogo from "../../images/defaultImg.png";
import Projects from "../profileCards/Projects";
import { RiEditBoxLine } from "react-icons/ri";

const ProfProject = ({
  expImgLogo,
  projRole,
  projDuration,
  projOrg,
  projDesc,
}) => {
  const [showProjects, setShowProjects] = useState(false);

  const toggleProjectsPopup = () => setShowProjects(!showProjects);

  return (
    <>
      {showProjects && <Projects onClose={toggleProjectsPopup} />}
      <div className="proj-boxesOne">
        <div className="profproj-content">
          <img src={expImgLogo || projLogo} alt="" />
          <div className="project-boxTwo">
            <p className="projrole">{projRole}</p>
            <p className="projDuration">{projDuration}</p>
            <p className="projOrg">Assosiated with {projOrg}</p>
            <p className="projDese">{projDesc}</p>
          </div>
        </div>
        <div className="project-editBtn">
          <button>
            <RiEditBoxLine size={20} onClick={toggleProjectsPopup} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfProject;
