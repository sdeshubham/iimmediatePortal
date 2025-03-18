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
import ProfEducation from "./cards/ProfEducation";
import ProfCertiCard from "./cards/ProfCertiCard";
import ProfAwardCard from "./cards/ProfAwardCard";
import amitabhbachchan from "../images/employeeDefaultProfile.jpg";

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const EmployeeProfile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

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
                        <p>{userData.noticePeriod} Days (Notice period)</p>
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
                        <p></p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Experience</h2>
                </div>
                <div className="exp-card-box-details">
                  <div>
                    {userData.workExperiences.map((item, index) => (
                      <ProfExperience
                        key={index}
                        image={item.image}
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

              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Licenses & Certifications</h2>
                </div>
                <div>
                  {userData.lic_certis.map((item, index) => (
                    <ProfCertiCard
                      key={index}
                      certName={item.courses}
                      certOrg={item.company_Name}
                      certIssueDate={new Date(
                        item.issued_Date
                      ).toLocaleDateString()}
                    />
                  ))}
                </div>
              </div>

              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Honors & Awards</h2>
                </div>
                <div className="award-card-box-details">
                  <div>
                    {userData.awards.map((item, index) => (
                      <ProfAwardCard
                        key={index}
                        awardName={item.title}
                        awardIssuedBy={item.issuedBy}
                        awardIssueDate={new Date(
                          item.issuedDate
                        ).toLocaleDateString()}
                        assosiate={item.assosiatedWith}
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
