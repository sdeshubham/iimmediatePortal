import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Awads = ({ onClose }) => {
  const [awardName, setAwardName] = useState("");
  const [organizationName, setOrganizationName] = useState("");

  const handleAwardNameChange = (e) => {
    setAwardName(e.target.value);
  };

  const handleOrganizationNameChange = (e) => {
    setOrganizationName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Award Name:", awardName);
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
              placeholder="Award Name"
              value={awardName}
              onChange={handleAwardNameChange}
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

export default Awads;
