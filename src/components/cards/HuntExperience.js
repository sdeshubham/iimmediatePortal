import React from "react";
// import { FaMedal } from "react-icons/fa6";
import experienceIcon from '../../images/experienceIcon.png'

const HuntExperience = ({ experienceImg, heading, subheading }) => {
  return (
    <>
      <div className="experienceCard">
        <div className="experience-details">
          {/* <FaMedal size={35} color="#ea4232" /> */}
          <img src={experienceIcon} alt="experienceIcon" />
          <h3>{heading}</h3>
          <p>{subheading}</p>
        </div>
      </div>
    </>
  );
};

export default HuntExperience;
