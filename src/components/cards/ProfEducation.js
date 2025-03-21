import React, { useState } from "react";
import "../../stylesheets/EmpProfile.css"
import projLogo from "../../images/defaultImg.png"
import Education from "../profileCards/Education";
import { RiEditBoxLine } from "react-icons/ri";

const ProfEducation = ({
  eduImg,
  instituteName,
  graduation,
  eduLocation,
  eduCgpa,
  eduYear,
}) => {

  const [showEducation, setShowEducation] = useState(false);

  const toggleEducationPopup = () => setShowEducation(!showEducation);

  return (
    <>
    {showEducation && <Education onClose={toggleEducationPopup} />}
      <div className="edu-boxes">
        <img src={eduImg || projLogo} alt="" />
        <div className="edu-boxtwo">
          <div className="edu-boxTwohead">
            <p className="instituteName">{instituteName}</p>
            <p className="edu-graduate">{graduation}</p>
            <p className="edu-location">{eduLocation}</p>
          </div>
          <div className="edu-boxthree">
            <p className="edu-year">{eduYear}</p>
            <p className="edu-cgpa">Grade {eduCgpa}</p>
          </div>
        </div>
        <div className="project-editBtn">
          <button>
            <RiEditBoxLine size={20} onClick={toggleEducationPopup} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfEducation;
