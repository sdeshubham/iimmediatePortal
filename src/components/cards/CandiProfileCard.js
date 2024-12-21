import React, { useState } from "react";
import "../../stylesheets/CandiProfile.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import AboutMe from "../../components/profileCards/AboutMe";
import Experience from "../../components/profileCards/Experience";
import Projects from "../../components/profileCards/Projects";
import Skills from "../../components/profileCards/Skills";
import Education from "../../components/profileCards/Education";
import LicensCertficates from "../../components/profileCards/LicensCertficates";
import Awads from "../../components/profileCards/Awads";

const POPUP_TYPES = {
  ABOUT_ME: "ABOUT_ME",
  EXPERIENCE: "EXPERIENCE",
  PROJECTS: "PROJECTS",
  SKILLS: "SKILLS",
  EDUCATION: "EDUCATION",
  LICENSES: "LICENSES",
  AWARDS: "AWARDS",
};

const popupComponents = {
  [POPUP_TYPES.ABOUT_ME]: AboutMe,
  [POPUP_TYPES.EXPERIENCE]: Experience,
  [POPUP_TYPES.PROJECTS]: Projects,
  [POPUP_TYPES.SKILLS]: Skills,
  [POPUP_TYPES.EDUCATION]: Education,
  [POPUP_TYPES.LICENSES]: LicensCertficates,
  [POPUP_TYPES.AWARDS]: Awads,
};

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
  const [popupType, setPopupType] = useState(null);

  const openPopup = (type) => {
    setPopupType(type);
  };

  const closePopup = () => {
    setPopupType(null);
  };

  const PopupComponent = popupType ? popupComponents[popupType] : null;

  return (
    <>
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
                      <p>{cSalary}</p>
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
            <div className="profile-more">
              <div className="profile-addMore">
                {Object.entries(POPUP_TYPES).map(([key, value]) => (
                  <div className="addMore-detailsBox" key={key}>
                    <h3>{key.replace("_", " ")}</h3>
                    <button onClick={() => openPopup(value)}>
                      <FaPlus size={25} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {PopupComponent && (
        <div className="popup-overlay">
          <div className="popup-container">
            <PopupComponent onClose={closePopup} />
          </div>
        </div>
      )}
    </>
  );
};

export default CandiProfileCard;
