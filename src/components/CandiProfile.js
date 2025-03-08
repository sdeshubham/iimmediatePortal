import React from "react";
import "../stylesheets/CandiProfile.css";
import CandiProfileCard from "./cards/CandiProfileCard";
import candidateProfileData from "./cards/candidateProfileData";

import { useAuth } from "./AuthContext";

const CandiProfile = () => {
  const { user } = useAuth();

  console.log("User in CandiProfile:", user);

  return (
    <>
      <div className="candi-profile">
        <div className="profile-head">
          {candidateProfileData.map((item, index) => (
            <CandiProfileCard
              key={index}
              cImg={user?.image || item.cImg}
              cName={user?.name || item.cName}
              cHeadline={user?.currentPosition || item.cHeadline}
              cCompany={item.cCompany}
              cLocation={user?.location || item.cLocation}
              cExperience={item.cExperience}
              cSalary={user?.salary || item.cSalary}
              cNoticePeriod={user?.noticePeriod || item.cNoticePeriod}
              cPhoneNumber={user?.email || item.mobileNumber}
              cEmail={user?.email || item.cEmail}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CandiProfile;



// import React from "react";
// import "../stylesheets/CandiProfile.css";
// import { useLocation } from "react-router-dom";

// const CandiProfile = () => {
//   const location = useLocation();
//   const { user, token } = location.state || {};

//   if (!user) return <h2>No user data found</h2>;

//   return (
//     <div className="candi-profile">
//       <div className="profile-head">
//         <p>{user.name}</p>
//         <p>{user.email}</p>
//         <p>{user.phoneNumber}</p>
//       </div>
//     </div>
//   );
// };

// export default CandiProfile;