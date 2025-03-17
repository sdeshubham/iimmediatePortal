import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../stylesheets/CandiProfile.css";
import "../stylesheets/EmpProfile.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { RiEditBoxLine } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import ProfAbout from "./cards/ProfAbout";
import ProfExperience from "./cards/ProfExperience";
import ProfProject from "./cards/ProfProject";
import ProfSkills from "./cards/ProfSkills";
import profSkillsData from "./cards/candiDetailsData/profSkillsData";
import projectDetailData from "./cards/candiDetailsData/projectDetailData";
import expCardData from "./cards/candiDetailsData/expCardData";
import aboutMeData from "./cards/candiDetailsData/aboutMeData";
import eduCardData from "./cards/candiDetailsData/eduCardData";
import ProfEducation from "./cards/ProfEducation";
import certiCardData from "./cards/candiDetailsData/certiCardData";
import ProfCertiCard from "./cards/ProfCertiCard";
import awardCardData from "./cards/candiDetailsData/awardCardData";
import ProfAwardCard from "./cards/ProfAwardCard";
import amitabhbachchan from "../images/amitabh-bachchan.jpg";

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const EmployeeProfile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       console.log("Fetching user data for ID:", id);
  //       const response = await axios.post(
  //         `${baseUrl}/api/getAllUserDetails`,
  //         { userId: id },
  //         { headers: { "Content-Type": "application/json" } }
  //       );

  //       console.log("API Response:", response.data);

  //       if (response.data.status === 200 && response.data.result.length > 0) {
  //         const userData = response.data.result[0];
  //         setUserData({ ...userData, id: userData._id });
  //       } else {
  //         console.error("User data not found");
  //         setUserData(null);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //       setUserData(null);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUserData();
  // }, [id]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log("Fetching user data for ID:", id);
        const response = await axios.post(
          `${baseUrl}/api/getAllUserDetails`,
          { userId: id },
          { headers: { "Content-Type": "application/json" } }
        );

        console.log("API Response:", response.data);

        if (response.data.status === 200 && response.data.result.length > 0) {
          const userData = response.data.result[0];

          setUserData({
            ...userData,
            id: userData._id,
            about: userData.about,
            workExperiences: userData.workExperiences,
            projectmodels: userData.projectmodels,
            skillmodels: userData.skillmodels,
            education_details: userData.education_details,
            lic_certis: userData.lic_certis,
            awards: userData.awards,
          });
        } else {
          console.error("User data not found");
          setUserData(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!userData) {
    return <h2>User data not found</h2>;
  }
  return (
    <div>
      <div className="empprofile-card">
        <div className="profileCard-box">
          <div className="profile-secOne">
            <div className="profileCardHead">
              <img src={amitabhbachchan} alt="" />
              <div className="cadidate-basicInfo">
                <h3>{userData.name}</h3>
                <p>{userData.currentPosition}</p>
                <p>Arnnima Solution</p>
                <div className="colOneInfoTwo">
                  <div className="candi-personalInfo">
                    <div className="personalInfo-colOne">
                      <div className="colOne-details">
                        <FaLocationDot size={20} />
                        <p>{userData.location}</p>
                      </div>
                      <div className="colOne-details">
                        <FaLaptopCode size={20} />
                        <p>{userData.experienceInStack} Year Exp</p>
                      </div>
                      <div className="colOne-details">
                        <MdOutlineCurrencyRupee size={20} />
                        <p>{userData.salary} /-Year</p>
                      </div>
                    </div>
                    <div className="personalInfo-colTwo">
                      <div className="colTwo-details">
                        <FaBusinessTime size={20} />
                        <p>{userData.noticePeriod} Days</p>
                      </div>
                      <div className="colTwo-details">
                        <IoCallSharp size={20} />
                        <p>+91 {userData.mobileNumber}</p>
                      </div>
                      <div className="colTwo-details">
                        <IoIosMail size={20} />
                        <p>{userData.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-container">
                    <button className="dropdown-button">Rusume</button>
                    <div className="dropdown-menu">
                      <ul>
                        <li className="resume-action-btn">
                          <FiDownload />
                          Download
                        </li>
                        <li className="resume-action-btn">
                          <IoEyeOutline />
                          View
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-secTwo">
            <div className="profile-contentBox">
              {/* <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>About Me</h2>
                </div>
                <div className="about-card-box-details">
                  <div>
                    <div>
                      {aboutMeData.map((item, index) => (
                        <ProfAbout key={index} aboutText={item.aboutText} />
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>About Me</h2>
                </div>
                <div className="about-card-box-details">
                  <div>
                    <div>
                      {userData && userData.about ? (
                        <ProfAbout aboutText={userData.about} />
                      ) : (
                        <p>No information available</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Experience</h2>
                </div>
                <div className="exp-card-box-details">
                  <div>
                    {expCardData.map((item, index) => (
                      <ProfExperience
                        key={index}
                        expImgLogo={item.expImgLogo}
                        expRole={item.expRole}
                        expCompany={item.expCompany}
                        expLocation={item.expLocation}
                        expDuration={item.expDuration}
                        expDesc={item.expDesc}
                      />
                    ))}
                  </div>
                </div>
              </div> */}
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Experience</h2>
                </div>
                <div className="exp-card-box-details">
                  <div>
                    {userData.workExperiences.map((item, index) => (
                      <ProfExperience
                        key={index}
                        expRole={item.title}
                        expCompany={item.company_Name}
                        expLocation={item.location}
                        expDuration={`${new Date(
                          item.startDate
                        ).toLocaleDateString()} - ${
                          item.endDate
                            ? new Date(item.endDate).toLocaleDateString()
                            : "Present"
                        }`}
                        expDesc={item.description}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Projects</h2>
                </div>
                <div className="proj-card-box-details">
                  <div>
                    {projectDetailData.map((item, index) => (
                      <ProfProject
                        key={index}
                        expImgLogo={item.expImgLogo}
                        projRole={item.projRole}
                        projDuration={item.projDuration}
                        projOrg={item.projOrg}
                        projDesc={item.projDesc}
                      />
                    ))}
                  </div>
                </div>
              </div> */}
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Projects</h2>
                </div>
                <div className="proj-card-box-details">
                  <div>
                    {userData.projectmodels.map((item, index) => (
                      <ProfProject
                        key={index}
                        projRole={item.title}
                        projDuration={`${new Date(
                          item.startDate
                        ).toLocaleDateString()} - ${
                          item.endDate
                            ? new Date(item.endDate).toLocaleDateString()
                            : "Ongoing"
                        }`}
                        projOrg={item.associated}
                        projDesc={item.projectDescription}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Skills</h2>
                </div>
                <div>
                  <div className="skills-card-box-details">
                    <div className="skillsbox-card">
                      {profSkillsData.map((item, index) => (
                        <ProfSkills
                          key={index}
                          skillListOne={item.skillListOne}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Skills</h2>
                </div>
                <div>
                  <div className="skills-card-box-details">
                    <div className="skillsbox-card">
                      {userData.skillmodels.map((item, index) => (
                        <ProfSkills
                          key={index}
                          skillListOne={item.skillsName}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Education</h2>
                </div>
                {eduCardData.map((item, index) => (
                  <ProfEducation
                    key={index}
                    eduImg={item.eduImg}
                    instituteName={item.instituteName}
                    graduation={item.graduation}
                    eduLocation={item.eduLocation}
                    eduYear={item.eduYear}
                    eduCgpa={item.eduCgpa}
                  />
                ))}
              </div> */}
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Education</h2>
                </div>
                {userData.education_details.map((item, index) => (
                  <ProfEducation
                    key={index}
                    eduImg={item.eduImg}
                    instituteName={item.college}
                    graduation={item.degree}
                    eduLocation={item.location}
                    eduYear={`${new Date(
                      item.startDate
                    ).getFullYear()} - ${new Date(item.endDate).getFullYear()}`}
                    eduCgpa={item.grade}
                  />
                ))}
              </div>

              {/* <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Licenses & Certifications</h2>
                </div>
                <div>
                  {certiCardData.map((item, index) => (
                    <ProfCertiCard
                      key={index}
                      certiImg={item.certiImg}
                      certName={item.certName}
                      certOrg={item.certOrg}
                      certIssueDate={item.certIssueDate}
                    />
                  ))}
                </div>
              </div> */}
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Licenses & Certifications</h2>
                </div>
                <div>
                  {userData.lic_certis.map((item, index) => (
                    <ProfCertiCard
                      key={index}
                      certiImg={item.certificateUrl} // Assuming certiImg is the URL for the certificate image or logo
                      certName={item.courses} // Mapping courses to certName
                      certOrg={item.company_Name} // Mapping company_Name to certOrg
                      certIssueDate={new Date(
                        item.issued_Date
                      ).toLocaleDateString()} // Format the issue date
                    />
                  ))}
                </div>
              </div>

              {/* <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Honors & Awards</h2>
                </div>
                <div className="award-card-box-details">
                  <div>
                    {awardCardData.map((item, index) => (
                      <ProfAwardCard
                        key={index}
                        awardImgLogo={item.awardImgLogo}
                        awardName={item.awardName}
                        awardIssuedBy={item.awardIssuedBy}
                        awardIssueDate={item.awardIssueDate}
                        assosiate={item.assosiate}
                      />
                    ))}
                  </div>
                </div>
              </div> */}
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Honors & Awards</h2>
                </div>
                <div className="award-card-box-details">
                  <div>
                    {userData.awards.map((item, index) => (
                      <ProfAwardCard
                        key={index}
                        awardImgLogo={item.awardImgLogo} // Assuming the image/logo is part of award data
                        awardName={item.title} // Mapping title to awardName
                        awardIssuedBy={item.issuedBy} // Mapping issuedBy directly to awardIssuedBy
                        awardIssueDate={new Date(
                          item.issuedDate
                        ).toLocaleDateString()} // Formatting the issuedDate
                        assosiate={item.assosiatedWith} // Mapping assosiatedWith to assosiate
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
