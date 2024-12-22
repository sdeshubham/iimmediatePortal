import React from "react";

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
      <div className="skills-container">
        <p>{skillListOne}</p>
        <p>{skillListTwo}</p>
        <p>{skillListThree}</p>
        <p>{skillListFour}</p>
        <p>{skillListFive}</p>
        <p>{skillListSix}</p>
        <p>{skillListSeven}</p>
      </div>
    </>
  );
};

export default ProfSkills;
