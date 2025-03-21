import React from "react";
import "../../stylesheets/CandiProfile.css";
import { RiEditBoxLine } from "react-icons/ri";

const ProfSkills = ({
  skillListOne,
  skillListTwo,
  skillListThree,
  skillListFour,
}) => {
  return (
    <>
      <div className="skillscard-container">
        <div className="skillsection-boxTwo">
          <p className="skill-items">{skillListOne}</p>
        </div>
      </div>
    </>
  );
};
export default ProfSkills;
