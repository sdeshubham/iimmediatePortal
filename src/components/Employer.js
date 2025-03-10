import React, { useState } from "react";
import "../stylesheets/Employer.css";
import empImg from "../images/cProfileImg.png";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoShare } from "react-icons/io5";
import selectedProfData from "../components/profileCards/selectedProfData";
import SelectedProfCard from "./profileCards/SelectedProfCard";
import { FaPlus } from "react-icons/fa6";
import EmployerPopupCard from "../components/profileCards/EmployerPopupCard";

const Employer = () => {
  const [showEmployerPopupCard, setEmployerPopupCard] = useState(false);

  const toggleEmployerPopupCardPopup = () =>
    setEmployerPopupCard(!showEmployerPopupCard);

  return (
    <>
      <div className="employer-box">
        <div className="emp-container">
          <div className="empyr-boxtop">
            <div className="prof-sectionOne">
              <div className="empyr-profImg">
                <img src={empImg} alt="" />
              </div>
              <div className="emp-details">
                <h2>SOV Technologies</h2>
                <h4>Alexandra Daddario | Human Resources Manager</h4>
                <div className="comp-call">
                  <IoCallSharp size={20} />
                  +91-797993****
                </div>
                <div className="comp-mail">
                  <IoIosMail size={20} />
                  info@sovtechnologies.com
                </div>
                <p>Mumbai Maharashtra, India</p>
                <button>
                  <a href="https://sovtechnologies.com/">
                    Visit Website <IoShare />
                  </a>
                </button>
              </div>
              <div className="empyr-btns">
                <div className="empyr-add-btn">
                  <button onClick={toggleEmployerPopupCardPopup}>
                    <FaPlus size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="prof-sectionTwo">
            <h2>About the Company</h2>
            <p>
              Sov technology is a global professional services company with
              leading capabilities in digital, cloud and security. Combining
              unmatched experience and specialized skills across more than 40
              industries...
            </p>
            <div className="company-site emp-subheading">
              <h5>Website</h5>
              <a href="https://sovtechnologies.com">
                https://sovtechnologies.com
              </a>
            </div>
            <div className="company-industry emp-subheading">
              <h5>Industry</h5>
              <p>IT Services and Consultant</p>
            </div>
            <div className="company-found emp-subheading">
              <h5>Company size</h5>
              <p>11-20 employees</p>
            </div>
            <div className="company-contact emp-subheading">
              <h5>Contact</h5>
              <p>+91-7979937896</p>
            </div>
            <div className="company-address emp-subheading">
              <h5>Address</h5>
              <p>Thane Mumbai Maharashtra</p>
            </div>
            <div className="company-found emp-subheading">
              <h5>Founded</h5>
              <p>2019</p>
            </div>
          </div>
          {/* <div className="prof-sectionThree">
            <h2>Selected Profiles</h2>
            <div className="prof-cardbox">
              {selectedProfData.map((item, index) => (
                <SelectedProfCard
                  key={index}
                  selectprof={item.selectprof}
                  selProfname={item.selProfname}
                  role={item.role}
                  companyName={item.companyName}
                  location={item.location}
                  noticeday={item.noticeday}
                  skillOne={item.skillOne}
                  skillTwo={item.skillTwo}
                  skillThree={item.skillThree}
                />
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* Popup Overlay */}
      {showEmployerPopupCard && (
        <div className="popup-overlay">
          <div className="popup-card">
            <button
              className="popup-close-btn"
              onClick={toggleEmployerPopupCardPopup}
            >
              X
            </button>
            <EmployerPopupCard />
          </div>
        </div>
      )}
    </>
  );
};

export default Employer;