import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../stylesheets/Employer.css";
import empImg from "../images/cProfileImg.png";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { IoShare } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const BASE_URL = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const EmployerProfile = () => {
  const { id } = useParams();
  const [employer, setEmployer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployerData = async () => {
      try {
        const response = await axios.post(
          `${BASE_URL}/withOutLogin/getSingleCompanyData`,
          { id: id },
          { headers: { "Content-Type": "application/json" } }
        );

        console.log("API Response:", response.data);

        if (response.data.status === 200 && response.data.result) {
          setEmployer(response.data.result);
        } else {
          console.log("No employer data found for this ID.");
          setError("Employer data not found for the provided ID.");
        }
      } catch (err) {
        console.error(
          "Request Error:",
          err.response ? err.response.data : err.message
        );
        setError("Error fetching employer details.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployerData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!employer) return <p>No employer data found.</p>;

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
                <h2>{employer.companyName}</h2>
                <h4>
                  {employer.name} | {employer.designationName}
                </h4>
                <div className="comp-call">
                  <IoCallSharp size={20} />
                  +91 {employer.contactNumber}
                </div>
                <div className="comp-mail">
                  <IoIosMail size={20} />
                  {employer.email}
                </div>
                <p>{employer.location}</p>
                <button>
                  <a href="https://arnnima.com/">
                    Visit Website <IoShare />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="prof-sectionTwo">
            <h2>About the Company</h2>
            <p>{employer.description}</p>
            <div className="company-site emp-subheading">
              <h5>Website:</h5>
              <a href="https://sovtechnologies.com">{employer.website}</a>
            </div>
            <div className="company-industry emp-subheading">
              <h5>Industry:</h5>
              <p>{employer.industry}</p>
            </div>
            <div className="company-found emp-subheading">
              <h5>Company size:</h5>
              <p>{employer.company_SizeMin} employees</p>
            </div>
            <div className="company-contact emp-subheading">
              <h5>Contact:</h5>
              <p>+91 {employer.contactNumber}</p>
            </div>
            <div className="company-address emp-subheading">
              <h5>Address:</h5>
              <p>{employer.companyFullAddress}</p>
            </div>
            <div className="company-found emp-subheading">
              <h5>Founded:</h5>
              <p>{employer.founded}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployerProfile;
