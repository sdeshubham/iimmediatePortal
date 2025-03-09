import React from "react";
import "../stylesheets/CandiProfile.css";
import CandiProfileCard from "./cards/CandiProfileCard";
import candidateProfileData from "./cards/candidateProfileData";
import PropTypes from 'prop-types';

import { useAuth } from "./AuthContext";

const CandiProfile = () => {
  const { user } = useAuth();

  const item = candidateProfileData[0];

  console.log("User in CandiProfile:", user);

  return (
    <>
      <div className="candi-profile">
        <div className="profile-head">
            <CandiProfileCard
              cImg={item.cImg} // currently no feature from which we can ask user to upload profile image
              cName={user?.name || item.cName}
              cHeadline={user?.currentPosition || item.cHeadline}
              cCompany={item.cCompany} // no property returned by the api giving the current company value
              cLocation={user?.location || item.cLocation}
              cExperience={user?.expYear || item.cExperience}
              cSalary={user?.salary || item.cSalary}
              cNoticePeriod={user?.noticePeriod || item.cNoticePeriod}
              cPhoneNumber={user?.mobileNumber || item.mobileNumber}
              cEmail={user?.email || item.cEmail}
            />
        </div>
      </div>
    </>
  );
};

CandiProfile.propTypes = {
  
}

export default CandiProfile;

// import React from "react";
// import "../stylesheets/CandiProfile.css";
// import { useAuth } from "./AuthContext";

// const CandiProfile = () => {
//   const { user } = useAuth();

//   console.log("User in CandiProfile:", user);

//   if (!user) {
//     return <h2>Loading... Please login again.</h2>;
//   }

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