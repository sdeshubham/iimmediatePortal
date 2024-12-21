import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Skills = ({ onClose }) => {
  const [skills, setSkills] = useState("");

  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Skills:", skills);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button className="close-btn" onClick={onClose}>
          <IoMdClose size={24} />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="skills-box">
            <input
              type="text"
              placeholder="Skills"
              value={skills}
              onChange={handleSkillsChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Skills;
