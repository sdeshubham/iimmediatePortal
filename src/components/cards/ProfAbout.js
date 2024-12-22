import React from "react";
import '../../stylesheets/EmpProfile.css'

const ProfAbout = ({ aboutText }) => {
  return (
    <>
      <div className="profabout-box">
        <p>{aboutText}</p>
      </div>
    </>
  );
};

export default ProfAbout;
