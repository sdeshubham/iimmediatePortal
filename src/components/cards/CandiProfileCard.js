import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

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
                      <button className="colTwo-details-view">View</button>
                    </div>
                    <div className="colTwo-details">
                      <IoIosMail size={20} />
                      <p>{cEmail}</p>
                      <button className="colTwo-details-view">View</button>
                    </div>
                  </div>
                </div>
                <div className="profile-resume">
                  <input
                    type="pdf"
                    className="profileResume"
                    placeholder="Resume"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="profile-secTwo">
            <div className="profile-more">
              <div className="profile-addMore">
                <div className="addMore-detailsBox">
                  <h2>About Me</h2>
                  <FaPlus />
                </div>
                <div className="addMore-detailsBox">
                  <h2>Experience</h2>
                  <FaPlus />
                </div>
                <div className="addMore-detailsBox">
                  <h2>Projects</h2>
                  <FaPlus />
                </div>
                <div className="addMore-detailsBox">
                  <h2>Skills</h2>
                  <FaPlus />
                </div>
                <div className="addMore-detailsBox">
                  <h2>Education</h2>
                  <FaPlus />
                </div>
                <div className="addMore-detailsBox">
                  <h2>Licenses & Certifications</h2>
                  <FaPlus />
                </div>
                <div className="addMore-detailsBox">
                  <h2>honors & Awards</h2>
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandiProfileCard;
