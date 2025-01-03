import React from "react";
import "../../stylesheets/CandiProfile.css";

const ProfSkills = ({
  skillListOne,
  skillListTwo,
  skillListThree,
  skillListFour,
  skillListFive,
  skillListSix,
  skillListSeven,
}) => {
  return (
    <>
      <div className="skillscard-container">
        <div className="skillsection-boxTwo">
          <p className="skill-items">{skillListOne}</p>
        </div>
      </div>
      {/* <div className="prof-editBtn">
        <button>
          <FaRegEdit />
        </button>
      </div> */}
    </>
  );
};

export default ProfSkills;
