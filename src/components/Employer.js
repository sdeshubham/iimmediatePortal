import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "../stylesheets/Employer.css";
import empImg from "../images/cProfileImg.png";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoShare } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import EmployerPopupCard from "../components/profileCards/EmployerPopupCard";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const Employer = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const { token } = useParams();
  const { login } = useAuth();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    let authToken = token || Cookies.get("authToken");

    if (!authToken) {
      alert("Session expired! Please login again.");
      navigate("/signin");
      return;
    }

    try {
      const response = await axios.get(
        `${baseUrl}/employer/getEmployerAllDetails`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      setUserData(response.data.res);
      login(response.data.res);
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (error.response?.status === 401) {
        await refreshToken();
      }
    }
  };

  const refreshToken = async () => {
    try {
      const response = await axios.post(`${baseUrl}/api/v1/token/refreshToken`);
      Cookies.set("authToken", response.data.token, { expires: 1 }); // 1 din tak valid
      fetchUserData();
    } catch (error) {
      console.error("Error refreshing token:", error);
      logout();
    }
  };

  const logout = () => {
    Cookies.remove("authToken");
    navigate("/signin");
  };

  const [showEmployerPopupCard, setEmployerPopupCard] = useState(false);

  const toggleEmployerPopupCardPopup = () =>
    setEmployerPopupCard(!showEmployerPopupCard);

  return (
    <>
      <div className="employer-box">
        {userData ? (
          <div className="emp-container">
            <div className="empyr-boxtop">
              <div className="prof-sectionOne">
                <div className="empyr-profImg">
                  <img src={empImg} alt="" />
                </div>
                <div className="emp-details">
                  <h2>{userData.companyName}</h2>
                  <h4>{userData.name} | {userData.designationName}</h4>
                  <div className="comp-call">
                    <IoCallSharp size={20} />
                    +91 {userData.contactNumber}
                  </div>
                  <div className="comp-mail">
                    <IoIosMail size={20} />
                    {userData.email}
                  </div>
                  <p>{userData.location}</p>
                  <button>
                    <a href="https://arnnima.com/">
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
                {userData.description}
              </p>
              <div className="company-site emp-subheading">
                <h5>Website:</h5>
                <a href="https://sovtechnologies.com">
                  {userData.website}
                </a>
              </div>
              <div className="company-industry emp-subheading">
                <h5>Industry:</h5>
                <p>{userData.industry}</p>
              </div>
              <div className="company-found emp-subheading">
                <h5>Company size:</h5>
                <p>{userData.company_SizeMin} employees</p>
              </div>
              <div className="company-contact emp-subheading">
                <h5>Contact:</h5>
                <p>+91 {userData.contactNumber}</p>
              </div>
              <div className="company-address emp-subheading">
                <h5>Address:</h5>
                <p>{userData.companyFullAddress}</p>
              </div>
              <div className="company-found emp-subheading">
                <h5>Founded:</h5>
                <p>{userData.founded}</p>
              </div>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>

      {showEmployerPopupCard && (
        <div className="popup-overlay">
          <div className="popup-card">
            <button
              className="popup-close-btn"
              onClick={toggleEmployerPopupCardPopup}
            >
              X
            </button>
            <EmployerPopupCard fetchUserData={fetchUserData} />
          </div>
        </div>
      )}
    </>
  );
};

export default Employer;
