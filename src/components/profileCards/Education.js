import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Education = ({ onClose }) => {
  const [education, setEducation] = useState("");
  const [organizationName, setOrganizationName] = useState("");

  const handleEducationChange = (e) => {
    setEducation(e.target.value);
  };

  const handleOrganizationNameChange = (e) => {
    setOrganizationName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Education:", education);
    console.log("Organization Name:", organizationName);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button className="close-btn" onClick={onClose}>
          <IoMdClose size={24} />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="project-box">
            <input
              type="text"
              placeholder="Your Education"
              value={education}
              onChange={handleEducationChange}
            />
            <input
              type="text"
              placeholder="Organization Name"
              value={organizationName}
              onChange={handleOrganizationNameChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Education;
