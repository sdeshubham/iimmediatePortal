import React from "react";
import experienceIcon from '../../images/experienceIcon.png'

const HuntExperience = ({ experienceImg, heading, subheading }) => {
  return (
    <>
      <div className="experienceCard">
        <div className="experience-details">
          <img src={experienceIcon} alt="experienceIcon" />
          <h3>{heading}</h3>
          <p>{subheading}</p>
        </div>
      </div>
    </>
  );
};

export default HuntExperience;
