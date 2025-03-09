// import React, { useState } from "react";
// import "../../stylesheets/CandiProfile.css";
// import "../../stylesheets/EmpProfile.css";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaLaptopCode } from "react-icons/fa";
// import { MdOutlineCurrencyRupee } from "react-icons/md";
// import { FaBusinessTime } from "react-icons/fa6";
// import { IoCallSharp } from "react-icons/io5";
// import { IoIosMail } from "react-icons/io";
// import { FaPlus } from "react-icons/fa6";
// import ProfAbout from "./ProfAbout";
// import AboutMe from "../../components/profileCards/AboutMe";
// import Experience from "../../components/profileCards/Experience";
// import Projects from "../../components/profileCards/Projects";
// import Skills from "../../components/profileCards/Skills";
// import Education from "../../components/profileCards/Education";
// import LicensCertificates from "../../components/profileCards/LicensCertficates";
// import Awads from "../../components/profileCards/Awads";
// import aboutMeData from "./candiDetailsData/aboutMeData";
// import expCardData from "./candiDetailsData/expCardData";
// import ProfExperience from "./ProfExperience";
// import projectDetailData from "./candiDetailsData/projectDetailData";
// import ProfProject from "./ProfProject";
// import profSkillsData from "./candiDetailsData/profSkillsData";
// import ProfSkills from "./ProfSkills";
// import eduCardData from "./candiDetailsData/eduCardData";
// import ProfEducation from "./ProfEducation";
// import certiCardData from "./candiDetailsData/certiCardData";
// import ProfCertiCard from "./ProfCertiCard";
// import awardCardData from "./candiDetailsData/awardCardData";
// import ProfAwardCard from "./ProfAwardCard";
// import { RiEditBoxLine } from "react-icons/ri";
// import { FiDownload } from "react-icons/fi";
// import { IoEyeOutline } from "react-icons/io5";

// const CandiProfileCard = ({
//   cImg,
//   cName,
//   cHeadline,
//   cCompany,
//   cLocation,
//   cExperience,
//   cSalary,
//   cNoticePeriod,
//   cPhoneNumber,
//   cEmail,
// }) => {
//   const [showAboutMe, setShowAboutMe] = useState(false);
//   const [showExperience, setShowExperience] = useState(false);
//   const [showProjects, setShowProjects] = useState(false);
//   const [showSkills, setShowSkills] = useState(false);
//   const [showEducation, setShowEducation] = useState(false);
//   const [showLicensCertificates, setShowLicensCertificates] = useState(false);
//   const [showAwads, setShowAwads] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const toggleAboutMePopup = () => setShowAboutMe(!showAboutMe);
//   const toggleExperiencePopup = () => setShowExperience(!showExperience);
//   const toggleProjectsPopup = () => setShowProjects(!showProjects);
//   const toggleSkillsPopup = () => setShowSkills(!showSkills);
//   const toggleEducationPopup = () => setShowEducation(!showEducation);
//   const toggleLicensCertificatesPopup = () =>
//     setShowLicensCertificates(!showLicensCertificates);
//   const toggleAwadsPopup = () => setShowAwads(!showAwads);

//   return (
//     <div>
//       <div className="profile-card">
//         <div className="profileCard-box">
//           <div className="profile-secOne">
//             <div className="profileCardHead">
//               <img src={cImg} alt="" />
//               <div className="cadidate-basicInfo">
//                 <h3>{cName}</h3>
//                 <p>{cHeadline}</p>
//                 <p>{cCompany}</p>
//                 <div className="colOneInfoTwo">
//                   <div className="candi-personalInfo">
//                     <div className="personalInfo-colOne">
//                       <div className="colOne-details">
//                         <FaLocationDot size={20} />
//                         <p>{cLocation}</p>
//                       </div>
//                       <div className="colOne-details">
//                         <FaLaptopCode size={20} />
//                         <p>{cExperience}</p>
//                       </div>
//                       <div className="colOne-details">
//                         <MdOutlineCurrencyRupee size={20} />
//                         <p>{cSalary} /-Year</p>
//                       </div>
//                     </div>
//                     <div className="personalInfo-colTwo">
//                       <div className="colTwo-details">
//                         <FaBusinessTime size={20} />
//                         <p>{cNoticePeriod}</p>
//                       </div>
//                       <div className="colTwo-details">
//                         <IoCallSharp size={20} />
//                         <p>{cPhoneNumber}</p>
//                       </div>
//                       <div className="colTwo-details">
//                         <IoIosMail size={20} />
//                         <p>{cEmail}</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     className="dropdown-container"
//                     onMouseEnter={() => setIsHovered(true)}
//                     onMouseLeave={() => setIsHovered(false)}
//                   >
//                     {/* Button */}
//                     <button className="dropdown-button">Rusume</button>

//                     {/* Dropdown Menu */}
//                     {isHovered && (
//                       <div className="dropdown-menu">
//                         <ul>
//                           <li className="resume-action-btn">
//                             <FiDownload />
//                             Download
//                           </li>
//                           <li className="resume-action-btn">
//                             <IoEyeOutline />
//                             View
//                           </li>
//                         </ul>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="profile-secTwo">
//             <div className="profile-contentBox">
//               {/* About Me Section */}
//               <div className="content-boxes">
//                 <div className="content-boxes-head">
//                   <h2>About Me</h2>
//                   <button onClick={toggleAboutMePopup}>
//                     <FaPlus size={20} />
//                   </button>
//                 </div>
//                 {showAboutMe && <AboutMe onClose={toggleAboutMePopup} />}
//                 <div className="about-card-box-details">
//                   <div>
//                     {aboutMeData.map((item, index) => (
//                       <ProfAbout key={index} aboutText={item.aboutText} />
//                     ))}
//                   </div>

//                   <div className="prof-editBtn">
//                     <button>
//                       <RiEditBoxLine size={20} />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Experience Section */}
//               <div className="content-boxes">
//                 <div className="content-boxes-head">
//                   <h2>Experience</h2>
//                   <button onClick={toggleExperiencePopup}>
//                     <FaPlus size={20} />
//                   </button>
//                 </div>
//                 {showExperience && (
//                   <Experience onClose={toggleExperiencePopup} />
//                 )}
//                 <div className="exp-card-box-details">
//                   <div>
//                     {expCardData.map((item, index) => (
//                       <ProfExperience
//                         key={index}
//                         expImgLogo={item.expImgLogo}
//                         expRole={item.expRole}
//                         expCompany={item.expCompany}
//                         expLocation={item.expLocation}
//                         expDuration={item.expDuration}
//                         expDesc={item.expDesc}
//                       />
//                     ))}
//                   </div>

//                   <div className="prof-editBtn">
//                     <button>
//                       <RiEditBoxLine size={20} />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Projects Section */}
//               <div className="content-boxes">
//                 <div className="content-boxes-head">
//                   <h2>Projects</h2>
//                   <button onClick={toggleProjectsPopup}>
//                     <FaPlus size={20} />
//                   </button>
//                 </div>
//                 {showProjects && <Projects onClose={toggleProjectsPopup} />}
//                 <div className="proj-card-box-details">
//                   <div>
//                     {projectDetailData.map((item, index) => (
//                       <ProfProject
//                         key={index}
//                         expImgLogo={item.expImgLogo}
//                         projRole={item.projRole}
//                         projDuration={item.projDuration}
//                         projOrg={item.projOrg}
//                         projDesc={item.projDesc}
//                       />
//                     ))}
//                   </div>
//                   <div className="prof-editBtn">
//                     <button>
//                       <RiEditBoxLine size={20} />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Skills Section */}
//               <div className="content-boxes">
//                 <div className="content-boxes-head">
//                   <h2>Skills</h2>
//                   <button onClick={toggleSkillsPopup}>
//                     <FaPlus size={20} />
//                   </button>
//                 </div>
//                 <div>
//                   {showSkills && <Skills onClose={toggleSkillsPopup} />}
//                   <div className="skills-card-box-details">
//                     <div className="skillsbox-card">
//                       {profSkillsData.map((item, index) => (
//                         <ProfSkills
//                           key={index}
//                           skillListOne={item.skillListOne}
//                         />
//                       ))}
//                     </div>

//                     <div className="prof-editBtn">
//                       <button>
//                         <RiEditBoxLine size={20} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Education Section */}
//               <div className="content-boxes">
//                 <div className="content-boxes-head">
//                   <h2>Education</h2>
//                   <button onClick={toggleEducationPopup}>
//                     <FaPlus size={20} />
//                   </button>
//                 </div>
//                 {showEducation && <Education onClose={toggleEducationPopup} />}
//                 {eduCardData.map((item, index) => (
//                   <ProfEducation
//                     key={index}
//                     eduImg={item.eduImg}
//                     instituteName={item.instituteName}
//                     graduation={item.graduation}
//                     eduLocation={item.eduLocation}
//                     eduYear={item.eduYear}
//                     eduCgpa={item.eduCgpa}
//                   />
//                 ))}
//               </div>

//               {/* Licenses & Certifications Section */}
//               <div className="content-boxes">
//                 <div className="content-boxes-head">
//                   <h2>Licenses & Certifications</h2>
//                   <button onClick={toggleLicensCertificatesPopup}>
//                     <FaPlus size={20} />
//                   </button>
//                 </div>
//                 {showLicensCertificates && (
//                   <LicensCertificates onClose={toggleLicensCertificatesPopup} />
//                 )}
//                 <div>
//                   {certiCardData.map((item, index) => (
//                     <ProfCertiCard
//                       key={index}
//                       certiImg={item.certiImg}
//                       certName={item.certName}
//                       certOrg={item.certOrg}
//                       certIssueDate={item.certIssueDate}
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* Honors & Awards Section */}
//               <div className="content-boxes">
//                 <div className="content-boxes-head">
//                   <h2>Honors & Awards</h2>
//                   <button onClick={toggleAwadsPopup}>
//                     <FaPlus size={20} />
//                   </button>
//                 </div>
//                 {showAwads && <Awads onClose={toggleAwadsPopup} />}
//                 <div className="award-card-box-details">
//                   <div>
//                     {awardCardData.map((item, index) => (
//                       <ProfAwardCard
//                         key={index}
//                         awardImgLogo={item.awardImgLogo}
//                         awardName={item.awardName}
//                         awardIssuedBy={item.awardIssuedBy}
//                         awardIssueDate={item.awardIssueDate}
//                         assosiate={item.assosiate}
//                       />
//                     ))}
//                   </div>
//                   <div className="prof-editBtn">
//                     <button>
//                       <RiEditBoxLine size={20} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CandiProfileCard;

import React, { useState } from "react";
import "../../stylesheets/CandiProfile.css";
import "../../stylesheets/EmpProfile.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import ProfAbout from "./ProfAbout";
import AboutMe from "../../components/profileCards/AboutMe";
import Experience from "../../components/profileCards/Experience";
import Projects from "../../components/profileCards/Projects";
import Skills from "../../components/profileCards/Skills";
import Education from "../../components/profileCards/Education";
import LicensCertificates from "../../components/profileCards/LicensCertficates";
import Awads from "../../components/profileCards/Awads";
import aboutMeData from "./candiDetailsData/aboutMeData";
import expCardData from "./candiDetailsData/expCardData";
import ProfExperience from "./ProfExperience";
import projectDetailData from "./candiDetailsData/projectDetailData";
import ProfProject from "./ProfProject";
import profSkillsData from "./candiDetailsData/profSkillsData";
import ProfSkills from "./ProfSkills";
import eduCardData from "./candiDetailsData/eduCardData";
import ProfEducation from "./ProfEducation";
import certiCardData from "./candiDetailsData/certiCardData";
import ProfCertiCard from "./ProfCertiCard";
import awardCardData from "./candiDetailsData/awardCardData";
import ProfAwardCard from "./ProfAwardCard";
import { RiEditBoxLine } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

const CandiProfileCard = ({
  cImg,
  cName,
  cHeadline,
  cCompany,
  cLocation,
  cExperience,
  cSalary,
  cNoticePeriod,
  cPhoneNumber,
  cEmail,
}) => {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showLicensCertificates, setShowLicensCertificates] = useState(false);
  const [showAwads, setShowAwads] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleAboutMePopup = () => setShowAboutMe(!showAboutMe);
  const toggleExperiencePopup = () => setShowExperience(!showExperience);
  const toggleProjectsPopup = () => setShowProjects(!showProjects);
  const toggleSkillsPopup = () => setShowSkills(!showSkills);
  const toggleEducationPopup = () => setShowEducation(!showEducation);
  const toggleLicensCertificatesPopup = () =>
    setShowLicensCertificates(!showLicensCertificates);
  const toggleAwadsPopup = () => setShowAwads(!showAwads);

  return (
    <div>
      <div className="profile-card">
        <div className="profileCard-box">
          <div className="profile-secOne">
            <div className="profileCardHead">
              <img src={cImg} alt="" />
              <div className="cadidate-basicInfo">
                <h3>{cName}</h3>
                <p>{cHeadline}</p>
                <p>{cCompany}</p>
                <div className="colOneInfoTwo">
                  <div className="candi-personalInfo">
                    <div className="personalInfo-colOne">
                      <div className="colOne-details">
                        <FaLocationDot size={20} />
                        <p>{cLocation}</p>
                      </div>
                      <div className="colOne-details">
                        <FaLaptopCode size={20} />
                        <p>{cExperience}</p>
                      </div>
                      <div className="colOne-details">
                        <MdOutlineCurrencyRupee size={20} />
                        <p>{cSalary} /-Year</p>
                      </div>
                    </div>
                    <div className="personalInfo-colTwo">
                      <div className="colTwo-details">
                        <FaBusinessTime size={20} />
                        <p>{cNoticePeriod}</p>
                      </div>
                      <div className="colTwo-details">
                        <IoCallSharp size={20} />
                        <p>{cPhoneNumber}</p>
                      </div>
                      <div className="colTwo-details">
                        <IoIosMail size={20} />
                        <p>{cEmail}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="dropdown-container"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {/* Button */}
                    <button className="dropdown-button">Rusume</button>

                    {/* Dropdown Menu */}
                    {isHovered && (
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
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-secTwo">
            <div className="profile-contentBox">
              {/* About Me Section */}
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>About Me</h2>
                  <button onClick={toggleAboutMePopup}>
                    <FaPlus size={20} />
                  </button>
                </div>
                {showAboutMe && <AboutMe onClose={toggleAboutMePopup} />}
                <div className="about-card-box-details">
                  <div>
                    {aboutMeData.map((item, index) => (
                      <ProfAbout key={index} aboutText={item.aboutText} />
                    ))}
                  </div>

                  <div className="prof-editBtn">
                    <button>
                      <RiEditBoxLine size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Experience</h2>
                  <button onClick={toggleExperiencePopup}>
                    <FaPlus size={20} />
                  </button>
                </div>
                {showExperience && (
                  <Experience onClose={toggleExperiencePopup} />
                )}
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

                  <div className="prof-editBtn">
                    <button>
                      <RiEditBoxLine size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Projects Section */}
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Projects</h2>
                  <button onClick={toggleProjectsPopup}>
                    <FaPlus size={20} />
                  </button>
                </div>
                {showProjects && <Projects onClose={toggleProjectsPopup} />}
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
                  <div className="prof-editBtn">
                    <button>
                      <RiEditBoxLine size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Skills</h2>
                  <button onClick={toggleSkillsPopup}>
                    <FaPlus size={20} />
                  </button>
                </div>
                <div>
                  {showSkills && <Skills onClose={toggleSkillsPopup} />}
                  <div className="skills-card-box-details">
                    <div className="skillsbox-card">
                      {profSkillsData.map((item, index) => (
                        <ProfSkills
                          key={index}
                          skillListOne={item.skillListOne}
                        />
                      ))}
                    </div>

                    <div className="prof-editBtn">
                      <button>
                        <RiEditBoxLine size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Education</h2>
                  <button onClick={toggleEducationPopup}>
                    <FaPlus size={20} />
                  </button>
                </div>
                {showEducation && <Education onClose={toggleEducationPopup} />}
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
              </div>

              {/* Licenses & Certifications Section */}
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Licenses & Certifications</h2>
                  <button onClick={toggleLicensCertificatesPopup}>
                    <FaPlus size={20} />
                  </button>
                </div>
                {showLicensCertificates && (
                  <LicensCertificates onClose={toggleLicensCertificatesPopup} />
                )}
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
              </div>

              {/* Honors & Awards Section */}
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Honors & Awards</h2>
                  <button onClick={toggleAwadsPopup}>
                    <FaPlus size={20} />
                  </button>
                </div>
                {showAwads && <Awads onClose={toggleAwadsPopup} />}
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
                  <div className="prof-editBtn">
                    <button>
                      <RiEditBoxLine size={20} />
                    </button>
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

export default CandiProfileCard;