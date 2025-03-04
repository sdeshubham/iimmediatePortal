import React from "react";
import "../stylesheets/CandiProfile.css";
import CandiProfileCard from "./cards/CandiProfileCard";
import candidateProfileData from "./cards/candidateProfileData";

const CandiProfile = () => {

  return (
    <>
      <div className="candi-profile">
        <div className="profile-head">
          {candidateProfileData.map((item, index) => (
            <CandiProfileCard
              key={index}
              cImg={item.cImg}
              cName={item.name || item.cName}
              cHeadline={item.cHeadline}
              cCompany={item.cCompany}
              cLocation={item.cLocation}
              cExperience={item.cExperience}
              cSalary={item.cSalary}
              cNoticePeriod={item.cNoticePeriod}
              cPhoneNumber={item.mobileNumber || item.cPhoneNumber}
              cEmail={item.cEmail}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CandiProfile;