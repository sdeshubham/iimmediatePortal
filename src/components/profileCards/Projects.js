import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Projects = ({ onClose }) => {
  const [projectName, setProjectName] = useState("");
  const [organizationName, setOrganizationName] = useState("");

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleOrganizationNameChange = (e) => {
    setOrganizationName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Name:", projectName);
    console.log("Organization Name:", organizationName);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button className="close-btn" onClick={onClose}>
          <RxCross2 />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="project-box">
            <input
              type="text"
              value={projectName}
              onChange={handleProjectNameChange}
              placeholder="Project Name"
            />
            <input
              type="text"
              value={organizationName}
              onChange={handleOrganizationNameChange}
              placeholder="Organization Name"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Projects;
