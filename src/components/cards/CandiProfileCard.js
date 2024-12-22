import React from "react";
import "../../stylesheets/CandiProfile.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import ProfAbout from "./ProfAbout";
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
import ProfAwardCard from "./ProfAwardCard";
import awardCardData from "./candiDetailsData/awardCardData";

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
              </div>
            </div>
          </div>

          <div className="profile-secTwo">
            <div className="profile-contentBox">
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>About Me</h2>
                  <button>
                    <FaPlus size={20} />
                  </button>
                </div>
                <div className="about-card-box-details">
                  {aboutMeData.map((item, index) => (
                    <ProfAbout key={index} aboutText={item.aboutText} />
                  ))}
                </div>
              </div>
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Experience</h2>
                  <button>
                    <FaPlus size={20} />
                  </button>
                </div>
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
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Projects</h2>
                  <button>
                    <FaPlus size={20} />
                  </button>
                </div>
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
              {/* <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Skills</h2>
                  <button>
                    <FaPlus size={20} />
                  </button>
                </div>
                {profSkillsData.map((item, index) => (
                  <ProfSkills
                    key={index}
                    skillListOne={item.skillListOne}
                    skillListTwo={item.skillListTwo}
                    skillListThree={item.skillListThree}
                    skillListFour={item.skillListFour}
                    skillListFive={item.skillListFive}
                    skillListSix={item.skillListSix}
                    skillListSeven={item.skillListSeven}
                  />
                ))}
              </div> */}
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Education</h2>
                  <button>
                    <FaPlus size={20} />
                  </button>
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
              </div>
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Licenses & certifications</h2>
                  <button>
                    <FaPlus size={20} />
                  </button>
                </div>
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
              <div className="content-boxes">
                <div className="content-boxes-head">
                  <h2>Honors & awards</h2>
                  <button>
                    <FaPlus size={20} />
                  </button>
                </div>
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
          </div>

          {/* {PopupComponent && (
            <div className="popup-overlay">
              <div className="popup-container">
                <PopupComponent onClose={closePopup} />
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default CandiProfileCard;
