// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import "../stylesheets/Employer.css";
// import empImg from "../images/cProfileImg.png";
// import { IoCallSharp } from "react-icons/io5";
// import { IoIosMail } from "react-icons/io";
// import { IoShare } from "react-icons/io5";
// import { FaPlus } from "react-icons/fa6";
// import EmployerPopupCard from "../components/profileCards/EmployerPopupCard";

// const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

// const EmployerProfile = () => {
//   const [showEmployerPopupCard, setEmployerPopupCard] = useState(false);

//   const { id } = useParams();
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         console.log("Fetching user data for ID:", id);
//         const response = await axios.post(
//           `${baseUrl}/withOutLogin/getSingleCompanyData`,
//           { userId: id },
//           { headers: { "Content-Type": "application/json" } }
//         );

//         console.log("API Response:", response.data);

//         if (response.data.status === 200 && response.data.result.length > 0) {
//           const userData = response.data.result[0];

//           setUserData({
//             ...userData,
//             id: userData._id,
//             companyName: userData.companyName,

//           });
//         } else {
//           console.error("User data not found");
//           setUserData(null);
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//         setUserData(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [id]);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   if (!userData) {
//     return <h2>User data not found</h2>;
//   }

//   const toggleEmployerPopupCardPopup = () =>
//     setEmployerPopupCard(!showEmployerPopupCard);

//   return (
//     <>
//       <div className="employerProfileBox">
//         <div className="emp-container">
//           <div className="empyr-boxtop">
//             <div className="prof-sectionOne">
//               <div className="empyr-profImg">
//                 <img src={empImg} alt="" />
//               </div>
//               <div className="emp-details">
//                 <h2>{userData.companyName}</h2>
//                 <h4>Alexandra Daddario | Human Resources Manager</h4>
//                 <div className="comp-call">
//                   <IoCallSharp size={20} />
//                   +91-797993****
//                 </div>
//                 <div className="comp-mail">
//                   <IoIosMail size={20} />
//                   info@sovtechnologies.com
//                 </div>
//                 <p>Mumbai Maharashtra, India</p>
//                 <button>
//                   <a href="https://sovtechnologies.com/">
//                     Visit Website <IoShare />
//                   </a>
//                 </button>
//               </div>
//               <div className="empyr-btns">
//                 <div className="empyr-add-btn">
//                   <button onClick={toggleEmployerPopupCardPopup}>
//                     <FaPlus size={20} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="prof-sectionTwo">
//             <h2>About the Company</h2>
//             <p>
//               Sov technology is a global professional services company with
//               leading capabilities in digital, cloud and security. Combining
//               unmatched experience and specialized skills across more than 40
//               industries...
//             </p>
//             <div className="company-site emp-subheading">
//               <h5>Website</h5>
//               <a href="https://sovtechnologies.com">
//                 https://sovtechnologies.com
//               </a>
//             </div>
//             <div className="company-industry emp-subheading">
//               <h5>Industry</h5>
//               <p>IT Services and Consultant</p>
//             </div>
//             <div className="company-found emp-subheading">
//               <h5>Company size</h5>
//               <p>11-20 employees</p>
//             </div>
//             <div className="company-contact emp-subheading">
//               <h5>Contact</h5>
//               <p>+91-7979937896</p>
//             </div>
//             <div className="company-address emp-subheading">
//               <h5>Address</h5>
//               <p>Thane Mumbai Maharashtra</p>
//             </div>
//             <div className="company-found emp-subheading">
//               <h5>Founded</h5>
//               <p>2019</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {showEmployerPopupCard && (
//         <div className="popup-overlay">
//           <div className="popup-card">
//             <button
//               className="popup-close-btn"
//               onClick={toggleEmployerPopupCardPopup}
//             >
//               X
//             </button>
//             <EmployerPopupCard />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EmployerProfile;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../stylesheets/Employer.css";

const BASE_URL = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const EmployerProfile = () => {
  const { id } = useParams();
  const [employer, setEmployer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployerData = async () => {
      try {
        console.log(`Fetching data for ID: ${id}`);
        const response = await axios.get(
          `${BASE_URL}/withOutLogin/getSingleCompanyData?id=${id}`
        );

        console.log("API Response:", response.data);

        if (response.data.status === 200) {
          setEmployer(response.data.result);
        } else {
          setError("Employer not found.");
          console.error("API Error:", response.data);
        }
      } catch (err) {
        setError("Error fetching employer details.");
        console.error("Request Error:", err.response ? err.response.data : err.message);
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
    <div className="emprProfBox">
      <h2>{employer.companyName || "N/A"}</h2>
      <p>Name: {employer.name || "N/A"}</p>
      <p>Designation: {employer.designationName || "N/A"}</p>
      <p>Contact: {employer.contactNumber || "N/A"}</p>
      <p>Email: {employer.email || "N/A"}</p>
    </div>
  );
};

export default EmployerProfile;
