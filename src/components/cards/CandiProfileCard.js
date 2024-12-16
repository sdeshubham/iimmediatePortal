import React from "react";

const CandiProfileCard = ({
  cImg,
  cName,
  cHeadline,
  cLocation,
  cExperience,
  cSalary,
  cNoticePeriod,
  cPhoneNumber,
  cEmail,
}) => {
  return (
    <>
      <div className="profile-card">
        <div className="profileCard-box">
          <div className="profileCardHead">
            <img src={cImg} alt="" />
            <div className="cadidate-basicInfo">
              <h3>{cName}</h3>
              <p>{cHeadline}</p>
              <div className="candi-personalInfo">
                <div className="personalInfo-colOne">
                  <p>{cLocation}</p>
                  <p>{cExperience}</p>
                  <p>{cSalary}</p>
                </div>
                <div className="personalInfo-colTwo">
                  <p>{cNoticePeriod}</p>
                  <p>{cPhoneNumber}</p>
                  <p>{cEmail}</p>
                </div>
              </div>
              <div className="profile-resume">
                <input type="pdf" placeholder="Resume" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandiProfileCard;
