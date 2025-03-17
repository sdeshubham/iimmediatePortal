import React from "react";
import "../../stylesheets/EmpProfile.css"

const ProfEducation = ({
  eduImg,
  instituteName,
  graduation,
  eduLocation,
  eduCgpa,
  eduYear,
}) => {
  return (
    <>
      <div className="edu-boxes">
        <img src={eduImg} alt="" />
        <div className="edu-boxtwo">
          <div className="edu-boxTwohead">
            <p className="instituteName">{instituteName}</p>
            <p className="edu-graduate">{graduation}</p>
            <p className="edu-location">{eduLocation}</p>
          </div>
          <div className="edu-boxthree">
            <p className="edu-year">{eduYear}</p>
            <p className="edu-cgpa">Grade {eduCgpa}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfEducation;
