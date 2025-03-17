// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../stylesheets/CandiProfile.css";
// import CandiProfileCard from "./cards/CandiProfileCard";
// import candidateProfileData from "./cards/candidateProfileData";
// import aboutMeData from "./cards/candiDetailsData/aboutMeData";
// import expCardData from "./cards/candiDetailsData/expCardData";
// import projectDetailData from "./cards/candiDetailsData/projectDetailData";
// import profSkillsData from "./cards/candiDetailsData/profSkillsData";
// import eduCardData from "./cards/candiDetailsData/eduCardData";
// import certiCardData from "./cards/candiDetailsData/certiCardData";
// import awardCardData from "./cards/candiDetailsData/awardCardData";

// import { useAuth } from "./AuthContext";

// const baseURL = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/api";

// const CandiProfile = () => {
//   const { user } = useAuth();

//   const item = candidateProfileData[0];

//   console.log("User in CandiProfile:", user);

//   const [headObject, setHeadObject] = useState({
//     cImg: item.cImg,
//     cName: user?.result[0].name || item.cName,
//     cHeadline: item.cHeadline,
//     cCompany: item.cCompany,
//     cLocation: user?.result[0].location || item.cLocation,
//     cExperience: user?.result[0].expYear || item.cExperience,
//     cSalary: user?.result[0].salary || item.cSalary,
//     cNoticePeriod: user?.result[0].noticePeriod || item.cNoticePeriod,
//     cPhoneNumber: user?.result[0].mobileNumber || item.mobileNumber,
//     cEmail: user?.result[0].email || item.cEmail,
//   });
//   const [aboutDataObject, setAboutDataObject] = useState(aboutMeData);
//   const [expArray, setExpArray] = useState(expCardData);
//   const [projectsArray, setProjectsArray] = useState(projectDetailData);
//   const [skillsArray, setSkillsArray] = useState(profSkillsData);
//   const [educationArray, setEducationArray] = useState(eduCardData);
//   const [certificationArray, setCertificationArray] = useState(certiCardData);
//   const [awardsArray, setAwardsArray] = useState(awardCardData);

//   useEffect(() => {
//     console.log("User in useEffect:", user.token);
//     if (user?.token) {
//       console.log("User in useEffect: inside if condition", user.token);
//       axios.get(`${baseURL}/getAboutMe`, {
//         headers: { Authorization: `Bearer ${user.token}` },
//       })
//       .then((response) => {
//         setAboutDataObject({aboutText: response.data.result.about})
//         console.log("About me data:", response.data.result.about);
//       })
//       .catch((error) => console.log("Error in fetching about me data:", error));
//     }
//   }, [user]); 
  
//   return (
//     <>
//       <div className="candi-profile">
//         <div className="profile-head">
//             <CandiProfileCard
//               headObject={headObject}
//               setHeadObject={setHeadObject}
//               aboutDataObject={aboutDataObject}
//               setAboutDataObject={setAboutDataObject}
//               expArray={expArray}
//               setExpArray={setExpArray}
//               projectsArray={projectsArray}
//               setProjectsArray={setProjectsArray}
//               skillsArray={skillsArray}
//               setSkillsArray={setSkillsArray}
//               educationArray={educationArray}
//               setEducationArray={setEducationArray}
//               certificationArray={certificationArray}
//               setCertificationArray={setCertificationArray}
//               awardsArray={awardsArray}
//               setAwardsArray={setAwardsArray}
//             />
//         </div>
//       </div>
//     </>
//   );
// };

// export default CandiProfile;


import React, { useEffect, useState } from "react";
import axios from "axios";
import "../stylesheets/CandiProfile.css";
import CandiProfileCard from "./cards/CandiProfileCard";
import candidateProfileData from "./cards/candidateProfileData";
import aboutMeData from "./cards/candiDetailsData/aboutMeData";
import expCardData from "./cards/candiDetailsData/expCardData";
import projectDetailData from "./cards/candiDetailsData/projectDetailData";
import profSkillsData from "./cards/candiDetailsData/profSkillsData";
import eduCardData from "./cards/candiDetailsData/eduCardData";
import certiCardData from "./cards/candiDetailsData/certiCardData";
import awardCardData from "./cards/candiDetailsData/awardCardData";

import { useAuth } from "./AuthContext";

const baseURL = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/api";

const CandiProfile = () => {
  const { user, refreshUserToken } = useAuth();

  const item = candidateProfileData[0];

  console.log("User in CandiProfile:", user);

  const [headObject, setHeadObject] = useState({
    cImg: item.cImg,
    cName: user?.result[0].name || item.cName,
    cHeadline: item.cHeadline,
    cCompany: item.cCompany,
    cLocation: user?.result[0].location || item.cLocation,
    cExperience: user?.result[0].expYear || item.cExperience,
    cSalary: user?.result[0].salary || item.cSalary,
    cNoticePeriod: user?.result[0].noticePeriod || item.cNoticePeriod,
    cPhoneNumber: user?.result[0].mobileNumber || item.mobileNumber,
    cEmail: user?.result[0].email || item.cEmail,
  });
  const [aboutDataObject, setAboutDataObject] = useState(aboutMeData);
  const [expArray, setExpArray] = useState(expCardData);
  const [projectsArray, setProjectsArray] = useState(projectDetailData);
  const [skillsArray, setSkillsArray] = useState(profSkillsData);
  const [educationArray, setEducationArray] = useState(eduCardData);
  const [certificationArray, setCertificationArray] = useState(certiCardData);
  const [awardsArray, setAwardsArray] = useState(awardCardData);

  const fetchAboutMeData = async () => {
    try {
      const response = await axios.get(`${baseURL}/getAboutMe`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setAboutDataObject({ aboutText: response.data.result.about });
      console.log("About me data:", response.data.result.about);
    } catch (error) {
      console.error("Error in fetching about me data:", error);

      if (error.response?.status === 401) {
        try {
          const refreshResponse = await axios.post(`${baseURL}/v1/token/refreshToken`, {
            refreshToken: user?.refreshToken,
          });

          const newToken = refreshResponse.data.token;
          console.log("New Token:", newToken);

          refreshUserToken(newToken);

          fetchAboutMeData();
        } catch (refreshError) {
          console.error("Error refreshing token:", refreshError);
        }
      }
    }
  };

  useEffect(() => {
    if (user?.token) {
      console.log("User in useEffect:", user.token);
      fetchAboutMeData();
    }
  }, [user]);

  return (
    <>
      <div className="candi-profile">
        <div className="profile-head">
          <CandiProfileCard
            headObject={headObject}
            setHeadObject={setHeadObject}
            aboutDataObject={aboutDataObject}
            setAboutDataObject={setAboutDataObject}
            expArray={expArray}
            setExpArray={setExpArray}
            projectsArray={projectsArray}
            setProjectsArray={setProjectsArray}
            skillsArray={skillsArray}
            setSkillsArray={setSkillsArray}
            educationArray={educationArray}
            setEducationArray={setEducationArray}
            certificationArray={certificationArray}
            setCertificationArray={setCertificationArray}
            awardsArray={awardsArray}
            setAwardsArray={setAwardsArray}
          />
        </div>
      </div>
    </>
  );
};

export default CandiProfile;
