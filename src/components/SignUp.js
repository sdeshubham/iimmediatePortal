// import React, { useState } from "react";
// import "../stylesheets/SignUp.css";
// import signUpEmp from "../images/signupFromImg.png";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const navigate = useNavigate();
//   const [value, setValue] = useState('');

//   const immediate = [
//     { label: "Select", value: 1 },
//     { label: "Within 7 Days", value: 2 },
//     { label: "Within 15 Days", value: 3 },
//     { label: "Within 30 Days", value: 4 },
//     { label: "Within 45 Days", value: 5 },
//   ];

//   const options = [
//     { label: "Select Gender", value: 1 },
//     { label: "Male", value: 2 },
//     { label: "Female", value: 3 },
//     { label: "Other", value: 4 },
//   ];

//   function handleSelect (event) {
//     setValue(event.target.value)
//   }

//   const handleRegister = () => {
//     navigate("/candidate");
//   };

//   return (
//     <>
//       <div className="signup-box">
//         <div className="signup-container">
//           <div className="leftBox">
//             {isLogin ? (
//               <>
//                 <div className="signup-left">
//                   <img src={signUpEmp} alt="" />
//                   <h3>Find Immediate Joiners for You</h3>
//                   <p>
//                     you will never know everything <br />
//                     But you will Konw more
//                   </p>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="signup-left">
//                   <img src={signUpEmp} alt="" />
//                   <h3>Let Job Find You</h3>
//                   <p>
//                     you will never know everything <br />
//                     But you will Konw more
//                   </p>
//                 </div>
//               </>
//             )}
//           </div>

//           <div className="rightForm">
//             <div className="signUpRight">
//               <div className="signInForm">
//                 <div className="signUp-toggle">
//                   <button
//                     className={isLogin ? "active signUpBtn" : ""}
//                     onClick={() => setIsLogin(true)}
//                   >
//                     Employer
//                   </button>
//                   <button
//                     className={!isLogin ? "active signUpBtn" : ""}
//                     onClick={() => setIsLogin(false)}
//                   >
//                     Employee
//                   </button>
//                 </div>
//                 {isLogin ? (
//                   <>
//                     {/* <div className="signUpform">
//                       <div className="formCols">
//                         <div className="formColOne">
//                           <div className="signUpform-emp">
//                             <div className="signUpform-group">
//                               <label htmlFor="name">Full Name</label>
//                               <input
//                                 type="text"
//                                 id="fullname"
//                                 placeholder="Your Full Name"
//                               />
//                             </div>

//                             <div className="signUpform-group">
//                               <label htmlFor="mobile">Mobile Number</label>
//                               <div className="send-otp no-spinner">
//                                 <input
//                                   type="number"
//                                   id="mobile"
//                                   placeholder="Mobile Number"
//                                 />
//                                 <button>Send OTP</button>
//                               </div>
//                             </div>
//                             <div className="signUpform-group">
//                               <label htmlFor="mobile">OTP</label>
//                               <div className="send-otp">
//                                 <input
//                                   type="password"
//                                   id="verify-otp"
//                                   placeholder="Enter OTP"
//                                 />
//                                 <button>Verify OTP</button>
//                               </div>
//                             </div>
//                             <div className="signUpform-group">
//                               <label htmlFor="name">Your Current role</label>
//                               <input
//                                 type="text"
//                                 id="currentrole"
//                                 placeholder="Your Current Role"
//                               />
//                             </div>
//                           </div>
//                         </div>

//                         <div className="formColTwo">
//                           <div className="signUpform-emp">
//                             <div className="signUpform-group">
//                               <label htmlFor="companyname">Company Name</label>
//                               <input
//                                 type="text"
//                                 id="company"
//                                 placeholder="Company Name"
//                               />
//                             </div>

//                             <div className="signUpform-group">
//                               <label htmlFor="email">Email</label>
//                               <div className="send-otp">
//                                 <input
//                                   type="email"
//                                   id="email"
//                                   placeholder="Email"
//                                 />
//                               </div>
//                             </div>
//                             <div className="signUpform-group">
//                               <label htmlFor="location">Location</label>
//                               <div className="send-otp">
//                                 <input
//                                   type="text"
//                                   id="location"
//                                   placeholder="Location"
//                                 />
//                               </div>
//                             </div>
//                             <div className="signUpform-group">
//                               <label htmlFor="name">Company Size</label>
//                               <input
//                                 type="text"
//                                 id="companysize"
//                                 placeholder="Company Size"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="register-btn">
//                         <div className="register-btns">
//                           <button onClick={handleRegister}>Register Now</button>
//                         </div>
//                       </div>
//                     </div> */}
//                   </>
//                 ) : (
//                   <>
//                     <div className="signUpform">
//                       <div className="formCols">
//                         <div className="formColOne">
//                           <div className="signUpform-emp">
//                             <div className="signUpform-group">
//                               <label htmlFor="name">Full Name</label>
//                               <input
//                                 type="text"
//                                 id="fullname"
//                                 placeholder="Your Full Name"
//                               />
//                             </div>

//                             <div className="signUpform-group">
//                               <label htmlFor="mobile">Mobile Number</label>
//                               <div className="send-otp">
//                                 <input
//                                   type="number"
//                                   id="mobile"
//                                   placeholder="Mobile Number"
//                                 />
//                                 <button>Send OTP</button>
//                               </div>
//                             </div>
//                             <div className="signUpform-group">
//                               <label htmlFor="mobile">OTP</label>
//                               <div className="send-otp">
//                                 <input
//                                   type="password"
//                                   id="verify-otp"
//                                   placeholder="Enter OTP"
//                                 />
//                                 <button>Verify OTP</button>
//                               </div>
//                             </div>
//                             <div className="signUpform-group">
//                               <label htmlFor="name">Current Position</label>
//                               <input
//                                 type="text"
//                                 id="currentrole"
//                                 placeholder="Current Role"
//                               />
//                             </div>
//                             <div className="signUpform-group">
//                               <label htmlFor="name">Specialization</label>
//                               <input
//                                 type="text"
//                                 id="specialization"
//                                 placeholder="Specialization"
//                               />
//                             </div>
//                           </div>
//                         </div>

//                         <div className="formColTwo">
//                           <div className="signUpform-emp">
//                             <div className="signUpform-group">
//                               <label htmlFor="email">Email</label>
//                               <div className="send-otp">
//                                 <input
//                                   type="email"
//                                   id="email"
//                                   placeholder="Email"
//                                 />
//                               </div>
//                             </div>

//                             <div className="signUpform-emp dropdown-main">
//                               <div className="dropdown">
//                                 <label htmlFor="">Immediate Joiner</label> <br />
//                                 <select className="form-select" onChange={handleSelect}>
//                                   {immediate.map(option => (
//                                     <option key={option.value} value={option.value}>
//                                       {option.label}
//                                     </option>
//                                   ))}
//                                 </select>
//                               </div>
//                             </div>

//                             <div className="signUpform-emp dropdown-main dropdown-optns">
//                               <div className="dropdown">
//                                 <label htmlFor="">Gender</label> <br />
//                                 <select className="form-select" onChange={handleSelect}>
//                                   {options.map(option => (
//                                     <option key={option.value} value={option.value}>
//                                       {option.label}
//                                     </option>
//                                   ))}
//                                 </select>
//                               </div>
//                             </div>
//                             <div className="signUpform-group dropdown-optns">
//                               <label htmlFor="name">Location</label>
//                               <input
//                                 type="text"
//                                 id="location"
//                                 placeholder="Location"
//                               />
//                             </div>
//                             <div className="signUpform-group">
//                               <label htmlFor="name">Experience</label>
//                               <input
//                                 type="text"
//                                 id="experience"
//                                 placeholder="Experience"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="register-btn">
//                         <div className="register-btns">
//                           <button onClick={handleRegister}>Register Now</button>
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default SignUp;

// ==================================================================

// import React, { useState } from "react";
// import "../stylesheets/SignUp.css";
// import signUpEmp from "../images/signupFromImg.png";
// import { useNavigate } from "react-router-dom";
// import { Dropdown } from "primereact/dropdown";

// const SignUp = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const navigate = useNavigate();
//   const [selectDay, setSelectDay] = useState(null);
//   const [selectSkills, setSelectSkills] = useState(null);
//   const [selectExperience, setSelectExperience] = useState(null);
//   const [value, setValue] = useState("");
//   const [formData, setFormData] = useState({
//     fullname: "",
//     mobile: "",
//     otp: "",
//     currentrole: "",
//     company: "",
//     email: "",
//     location: "",
//     companysize: "",
//     specialization: "",
//     experience: "",
//     gender: "",
//     immediateJoiner: "",
//   });

//   const immediate = [
//     { label: "Select", value: 1 },
//     { label: "Within 7 Days", value: 2 },
//     { label: "Within 15 Days", value: 3 },
//     { label: "Within 30 Days", value: 4 },
//     { label: "Within 45 Days", value: 5 },
//   ];

//   const options = [
//     { label: "Select Gender", value: 1 },
//     { label: "Male", value: 2 },
//     { label: "Female", value: 3 },
//     { label: "Other", value: 4 },
//   ];

//   const handleSelect = (event) => {
//     setValue(event.target.value);
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const sendOtp = async () => {
//     try {
//       if (!formData.mobile || formData.mobile.length !== 10) {
//         alert("Please enter a valid 10-digit mobile number.");
//         return;
//       }

//       const response = await fetch(
//         "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/api/mobileNumberVerificationSendOtp",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             mobileNumber: formData.mobile,
//             type: 1,
//             isForLogin: 0,
//           }),
//         }
//       );

//       const data = await response.json();
//       alert(data.message || "OTP sent successfully!");
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//       alert("Failed to send OTP.");
//     }
//   };

//   const verifyOtp = async () => {
//     try {
//       const response = await fetch(
//         "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/api/mobileNumberVerificationSetup",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ mobile: formData.mobile, otp: formData.otp }),
//         }
//       );
//       const data = await response.json();
//       alert(data.message || "OTP verified successfully!");
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       alert("Failed to verify OTP.");
//     }
//   };

//   const handleRegister = async () => {
//     try {
//       const response = await fetch(
//         "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/api/register",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await response.json();
//       alert(data.message || "Registration successful!");
//       navigate("/candidate");
//     } catch (error) {
//       console.error("Error registering user:", error);
//       alert("Registration failed.");
//     }
//   };

//   return (
//     <>
//       <div className="signup-box">
//         <div className="signup-container">
//           <div className="leftBox">
//             {isLogin ? (
//               <>
//                 <div className="signup-left">
//                   <img src={signUpEmp} alt="" />
//                   <h3>Find Immediate Joiners for You</h3>
//                   <p>
//                     you will never know everything <br />
//                     But you will Konw more
//                   </p>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="signup-left">
//                   <img src={signUpEmp} alt="" />
//                   <h3>Let Job Find You</h3>
//                   <p>
//                     you will never know everything <br />
//                     But you will Konw more
//                   </p>
//                 </div>
//               </>
//             )}
//           </div>

//           <div className="rightForm">
//             <div className="signUpRight">
//               <div className="signInForm">
//                 <div className="signUp-toggle">
//                   <button
//                     className={isLogin ? "active signUpBtn" : ""}
//                     onClick={() => setIsLogin(true)}
//                   >
//                     Employer
//                   </button>
//                   <button
//                     className={!isLogin ? "active signUpBtn" : ""}
//                     onClick={() => setIsLogin(false)}
//                   >
//                     Employee
//                   </button>
//                 </div>
//                 {isLogin ? (
//                   <>
//                     <div className="signUpform">
//                       <div className="formCols">
//                         <div className="formColOne">
//                           <div className="signUpform-emp">
//                             <div className="signUpform-group">
//                               <label htmlFor="fullname">Full Name</label>
//                               <input
//                                 type="text"
//                                 id="fullname"
//                                 placeholder="Your Full Name"
//                                 value={formData.fullname}
//                                 onChange={handleChange}
//                               />
//                             </div>

//                             <div className="signUpform-group">
//                               <label htmlFor="mobile">Mobile Number</label>
//                               <div className="send-otp no-spinner">
//                                 <input
//                                   type="number"
//                                   id="mobile"
//                                   className="mobile-input"
//                                   placeholder="Mobile Number"
//                                   value={formData.mobile}
//                                   onChange={handleChange}
//                                   maxLength="10"
//                                   onInput={(e) => {
//                                     if (e.target.value.length > 10) {
//                                       e.target.value = e.target.value.slice(
//                                         0,
//                                         10
//                                       );
//                                     }
//                                   }}
//                                 />
//                                 <button onClick={sendOtp}>Send OTP</button>
//                               </div>
//                             </div>
//                             <div className="signUpform-group">
//                               <label htmlFor="otp">OTP</label>
//                               <div className="send-otp">
//                                 <input
//                                   type="password"
//                                   id="otp"
//                                   placeholder="Enter OTP"
//                                   value={formData.otp}
//                                   onChange={handleChange}
//                                   maxLength="6"
//                                   onInput={(e) => {
//                                     if (e.target.value.length > 6) {
//                                       e.target.value = e.target.value.slice(
//                                         0,
//                                         10
//                                       );
//                                     }
//                                   }}
//                                 />
//                                 <button onClick={verifyOtp}>Verify OTP</button>
//                               </div>
//                             </div>
//                             <div className="signUpform-group">
//                               <label htmlFor="currentrole">
//                                 Your Current Role
//                               </label>
//                               <input
//                                 type="text"
//                                 id="currentrole"
//                                 placeholder="Your Current Role"
//                                 value={formData.currentrole}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div className="formColTwo">
//                           <div className="signUpform-emp">
//                             <div className="signUpform-group">
//                               <label htmlFor="company">Company Name</label>
//                               <input
//                                 type="text"
//                                 id="company"
//                                 placeholder="Company Name"
//                                 value={formData.company}
//                                 onChange={handleChange}
//                               />
//                             </div>

//                             <div className="signUpform-group">
//                               <label htmlFor="email">Email</label>
//                               <input
//                                 type="email"
//                                 id="email"
//                                 placeholder="Email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                             <div className="signUpform-group">
//                               <label htmlFor="location">Location</label>
//                               <input
//                                 type="text"
//                                 id="location"
//                                 placeholder="Location"
//                                 value={formData.location}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                             <div className="signUpform-group">
//                               <label htmlFor="companysize">Company Size</label>
//                               <input
//                                 type="text"
//                                 id="companysize"
//                                 placeholder="Company Size"
//                                 value={formData.companysize}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="register-btn">
//                         <button onClick={handleRegister}>Register Now</button>
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <div className="signUpform">
//                       <div className="formCols">
//                         <div className="formColOne">
//                           <div className="signUpform-emp">
//                             <div className="signUpform-group">
//                               <label htmlFor="fullname">Full Name</label>
//                               <input
//                                 type="text"
//                                 id="fullname"
//                                 placeholder="Your Full Name"
//                                 value={formData.fullname}
//                                 onChange={handleChange}
//                               />
//                             </div>

//                             <div className="signUpform-group">
//                               <label htmlFor="mobile">Mobile Number</label>
//                               <div className="send-otp">
//                                 <input
//                                   type="number"
//                                   id="mobile"
//                                   placeholder="Mobile Number"
//                                   value={formData.mobile}
//                                   onChange={handleChange}
//                                   maxLength="10"
//                                   onInput={(e) => {
//                                     if (e.target.value.length > 10) {
//                                       e.target.value = e.target.value.slice(
//                                         0,
//                                         10
//                                       );
//                                     }
//                                   }}
//                                 />
//                                 <button onClick={sendOtp}>Send OTP</button>
//                               </div>
//                             </div>
//                             <div className="signUpform-group">
//                               <label htmlFor="otp">OTP</label>
//                               <div className="send-otp">
//                                 <input
//                                   type="password"
//                                   id="otp"
//                                   placeholder="Enter OTP"
//                                   value={formData.otp}
//                                   onChange={handleChange}
//                                   maxLength="4"
//                                   onInput={(e) => {
//                                     if (e.target.value.length > 4) {
//                                       e.target.value = e.target.value.slice(
//                                         0,
//                                         10
//                                       );
//                                     }
//                                   }}
//                                 />
//                                 <button onClick={verifyOtp}>Verify OTP</button>
//                               </div>
//                             </div>
//                             <div className="signUpform-group">
//                               <label htmlFor="currentrole">
//                                 Current Position
//                               </label>
//                               <input
//                                 type="text"
//                                 id="currentrole"
//                                 placeholder="Current Role"
//                                 value={formData.currentrole}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                             <div className="signUpform-group">
//                               <label htmlFor="specialization">
//                                 Specialization
//                               </label>
//                               <input
//                                 type="text"
//                                 id="specialization"
//                                 placeholder="Specialization"
//                                 value={formData.specialization}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                           </div>
//                         </div>

//                         <div className="formColTwo">
//                           <div className="signUpform-emp">
//                             <div className="signUpform-group">
//                               <label htmlFor="email">Email</label>
//                               <input
//                                 type="email"
//                                 id="email"
//                                 placeholder="Email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                             <div className="signUpform-group dropdown-main">
//                               <label htmlFor="skills">Immediate Joiner</label>
//                               <Dropdown
//                                 name="technicalSkills"
//                                 placeholder="Select Days"
//                                 className="w-full p-dropdown custom-dropdown-menu"
//                                 options={[
//                                   "Within 7 Days",
//                                   "Within 15 Days",
//                                   "Within 30 Days",
//                                   "Within 45 Days",
//                                 ]}
//                                 value={selectDay}
//                                 onChange={(e) => setSelectDay(e.value)}
//                               />
//                             </div>
//                             <div className="signUpform-group dropdown-main">
//                               <label htmlFor="skills">Gender</label>
//                               <Dropdown
//                                 name="technicalSkills"
//                                 placeholder="Select Gender"
//                                 className="w-full p-dropdown custom-dropdown-menu"
//                                 options={["Male", "Female"]}
//                                 value={selectSkills}
//                                 onChange={(e) => setSelectSkills(e.value)}
//                               />
//                             </div>
//                             <div className="signUpform-group empyr-loca">
//                               <label htmlFor="location">Location</label>
//                               <input
//                                 type="text"
//                                 id="location"
//                                 placeholder="Location"
//                                 value={formData.location}
//                                 onChange={handleChange}
//                               />
//                             </div>
//                             <div className="signUpform-group dropdown-main">
//                               <label htmlFor="skills">Experience</label>
//                               <Dropdown
//                                 name="technicalSkills"
//                                 placeholder="Select Experience"
//                                 className="w-full p-dropdown custom-dropdown-menu"
//                                 options={[
//                                   "Fresher (1 year experience)",
//                                   "Junior (2 year experience)",
//                                   "Assosiate (2-5 year experience)",
//                                   "Mid-Level (5-10 year experience)",
//                                   "Senior (10+ year experience)",
//                                 ]}
//                                 value={selectExperience}
//                                 onChange={(e) => setSelectExperience(e.value)}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="register-btn">
//                         <button onClick={handleRegister}>Register Now</button>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default SignUp;

// ==================================================================

import React, { useState } from "react";
import "../stylesheets/SignUp.css";
import axios from "axios";
import signUpEmp from "../images/signupFromImg.png";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/api";

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    otp: "",
    email: "",
    currentPosition: "",
    specialization: "",
    location: "",
    experience: "",
    gender: "",
    isImmediateJoiner: false,
    otpVerified: false,
    userId: "",
  });

    const immediate = [
    { label: "Yes", value: true },
    { label: "No", value: false },
  ];

  const options = [
    { label: "Select Gender", value: "" },
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "isImmediateJoiner" ? value === "true" : value,
    });
  };

  const sendOtp = async () => {
    if (!formData.mobileNumber) {
      alert("Please enter a mobile number");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/mobileNumberVerificationSendOtp`, {
        mobileNumber: formData.mobileNumber,
        isForLogin: 0,
      });
  
      if (response.data.status === 200) {
        alert(response.data.message);
        setFormData((prev) => ({
          ...prev,
          userId: response.data.result, // <-- API se jo ID aaye use state me store karna
        }));
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP");
    }
    setLoading(false);
  };

  // const verifyOtp = async () => {
  //   if (!formData.otp) {
  //     alert("Please enter the OTP");
  //     return;
  //   }
  //   setLoading(true);
  //   try {
  //     const response = await axios.post(`${BASE_URL}/mobileNumberVerificationSetup`, {
  //       mobileNumber: formData.mobileNumber,
  //       otp: formData.otp,
  //       userId: formData.userId
  //     });
  
  //     if (response.data.status === 200) {
  //       alert("OTP Verified Successfully");
  //       setFormData((prev) => ({ ...prev, otpVerified: true }));
  //     }
  //   } catch (error) {
  //     console.error("OTP verification failed:", error);
  //     alert("OTP verification failed");
  //   }
  //   setLoading(false);
  // };
  const verifyOtp = async () => {
    console.log("Verifying OTP with:", {
      mobileNumber: formData.mobileNumber,
      otp: formData.otp,
      userId: formData.userId
    });
  
    if (!formData.otp) {
      alert("Please enter the OTP");
      return;
    }
  
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/mobileNumberVerificationSetup`, {
        mobileNumber: formData.mobileNumber,
        otp: formData.otp,
        id: formData.userId
      });
  
      console.log("OTP verification response:", response.data);
  
      if (response.data.status === 200) {
        alert("OTP Verified Successfully");
        setFormData((prev) => ({ ...prev, otpVerified: true }));
      }
    } catch (error) {
      console.error("OTP verification failed:", error);
      alert("OTP verification failed");
    }
    setLoading(false);
  };
  
  

  const registerUser = async () => {
    if (!formData.otpVerified) {
      alert("Please verify OTP first");
      return;
    }
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        name: formData.fullName,
        mobileNumber: formData.mobileNumber,
        email: formData.email,
        gender: formData.gender,
        location: formData.location,
        specialization: formData.specialization,
        experienceInStack: formData.experience,
        isImmediateJoiner: formData.isImmediateJoiner,
        mobileOtp: "1234",
        role: "1",
      });
      alert(response.data.message);
      navigate("/candidate");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed");
    }
  };

  return (
    <>
      <div className="signup-box">
        <div className="signup-container">
          <div className="leftBox">
            {isLogin ? (
              <>
                <div className="signup-left">
                  <img src={signUpEmp} alt="" />
                  <h3>Find Immediate Joiners for You</h3>
                  <p>
                    you will never know everything <br />
                    But you will Konw more
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="signup-left">
                  <img src={signUpEmp} alt="" />
                  <h3>Let Job Find You</h3>
                  <p>
                    you will never know everything <br />
                    But you will Konw more
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="rightForm">
            <div className="signUpRight">
              <div className="signInForm">
                <div className="signUp-toggle">
                  <button
                    className={isLogin ? "active signUpBtn" : ""}
                    onClick={() => setIsLogin(true)}
                  >
                    Employer
                  </button>
                  <button
                    className={!isLogin ? "active signUpBtn" : ""}
                    onClick={() => setIsLogin(false)}
                  >
                    Employee
                  </button>
                </div>
                {isLogin ? (
                  <>
                    {/* <div className="signUpform">
                      <div className="formCols">
                        <div className="formColOne">
                          <div className="signUpform-emp">
                            <div className="signUpform-group">
                              <label htmlFor="name">Full Name</label>
                              <input
                                type="text"
                                id="fullname"
                                placeholder="Your Full Name"
                              />
                            </div>

                            <div className="signUpform-group">
                              <label htmlFor="mobile">Mobile Number</label>
                              <div className="send-otp no-spinner">
                                <input
                                  type="number"
                                  id="mobile"
                                  placeholder="Mobile Number"
                                />
                                <button>Send OTP</button>
                              </div>
                            </div>
                            <div className="signUpform-group">
                              <label htmlFor="mobile">OTP</label>
                              <div className="send-otp">
                                <input
                                  type="password"
                                  id="verify-otp"
                                  placeholder="Enter OTP"
                                />
                                <button>Verify OTP</button>
                              </div>
                            </div>
                            <div className="signUpform-group">
                              <label htmlFor="name">Your Current role</label>
                              <input
                                type="text"
                                id="currentrole"
                                placeholder="Your Current Role"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="formColTwo">
                          <div className="signUpform-emp">
                            <div className="signUpform-group">
                              <label htmlFor="companyname">Company Name</label>
                              <input
                                type="text"
                                id="company"
                                placeholder="Company Name"
                              />
                            </div>

                            <div className="signUpform-group">
                              <label htmlFor="email">Email</label>
                              <div className="send-otp">
                                <input
                                  type="email"
                                  id="email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="signUpform-group">
                              <label htmlFor="location">Location</label>
                              <div className="send-otp">
                                <input
                                  type="text"
                                  id="location"
                                  placeholder="Location"
                                />
                              </div>
                            </div>
                            <div className="signUpform-group">
                              <label htmlFor="name">Company Size</label>
                              <input
                                type="text"
                                id="companysize"
                                placeholder="Company Size"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="register-btn">
                        <div className="register-btns">
                          <button onClick={handleRegister}>Register Now</button>
                        </div>
                      </div>
                    </div> */}
                  </>
                ) : (
                  <>
                    {/* <div className="signUpform">
                      <div className="formCols">
                        <div className="formColOne">
                          <div className="signUpform-emp">
                            <div className="signUpform-group">
                              <label htmlFor="name">Full Name</label>
                              <input
                                type="text"
                                id="fullname"
                                placeholder="Your Full Name"
                              />
                            </div>

                            <div className="signUpform-group">
                              <label htmlFor="mobile">Mobile Number</label>
                              <div className="send-otp">
                                <input
                                  type="number"
                                  id="mobile"
                                  placeholder="Mobile Number"
                                />
                                <button>Send OTP</button>
                              </div>
                            </div>
                            <div className="signUpform-group">
                              <label htmlFor="mobile">OTP</label>
                              <div className="send-otp">
                                <input
                                  type="password"
                                  id="verify-otp"
                                  placeholder="Enter OTP"
                                />
                                <button>Verify OTP</button>
                              </div>
                            </div>
                            <div className="signUpform-group">
                              <label htmlFor="name">Current Position</label>
                              <input
                                type="text"
                                id="currentrole"
                                placeholder="Current Role"
                              />
                            </div>
                            <div className="signUpform-group">
                              <label htmlFor="name">Specialization</label>
                              <input
                                type="text"
                                id="specialization"
                                placeholder="Specialization"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="formColTwo">
                          <div className="signUpform-emp">
                            <div className="signUpform-group">
                              <label htmlFor="email">Email</label>
                              <div className="send-otp">
                                <input
                                  type="email"
                                  id="email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>

                            <div className="signUpform-emp dropdown-main">
                              <div className="dropdown">
                                <label htmlFor="">Immediate Joiner</label> <br />
                                <select className="form-select" onChange={handleSelect}>
                                  {immediate.map(option => (
                                    <option key={option.value} value={option.value}>
                                      {option.label}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className="signUpform-emp dropdown-main dropdown-optns">
                              <div className="dropdown">
                                <label htmlFor="">Gender</label> <br />
                                <select className="form-select" onChange={handleSelect}>
                                  {options.map(option => (
                                    <option key={option.value} value={option.value}>
                                      {option.label}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="signUpform-group dropdown-optns">
                              <label htmlFor="name">Location</label>
                              <input
                                type="text"
                                id="location"
                                placeholder="Location"
                              />
                            </div>
                            <div className="signUpform-group">
                              <label htmlFor="name">Experience</label>
                              <input
                                type="text"
                                id="experience"
                                placeholder="Experience"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="register-btn">
                        <div className="register-btns">
                          <button onClick={handleRegister}>Register Now</button>
                        </div>
                      </div>
                    </div> */}
                    <div className="signUpform">
                      <div className="formCols">
                        <div className="formColOne">
                          <div className="signUpform-emp">
                            <div className="signUpform-group">
                              <label htmlFor="fullname">Full Name</label>
                              <input
                                name="fullName"
                                placeholder="Your Full Name"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="signUpform-group">
                              <label htmlFor="mobile">Mobile Number</label>
                              <div className="send-otp">
                                <input
                                  name="mobileNumber"
                                  placeholder="Mobile Number"
                                  onChange={handleChange}
                                />
                                <button onClick={sendOtp}>Send OTP</button>
                              </div>
                            </div>
                            <div className="signUpform-group">
                              <label htmlFor="verify-otp">OTP</label>
                              <div className="send-otp">
                                <input
                                  name="otp"
                                  placeholder="Enter OTP"
                                  onChange={handleChange}
                                />
                                <button onClick={verifyOtp}>Verify OTP</button>
                              </div>
                            </div>
                            <div className="signUpform-group">
                              <label htmlFor="currentrole">
                                Current Position
                              </label>
                              <input
                                name="currentPosition"
                                placeholder="Current Role"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="signUpform-group">
                              <label htmlFor="specialization">
                                Specialization
                              </label>
                              <input
                                name="specialization"
                                placeholder="Specialization"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="formColTwo">
                          <div className="signUpform-emp">
                            <div className="signUpform-group">
                              <label htmlFor="email">Email</label>
                              <input
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="signUpform-group">
                              <label htmlFor="location">Location</label>
                              <input
                                name="location"
                                placeholder="Location"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="signUpform-group">
                              <label htmlFor="experience">Experience</label>
                              <input
                                name="experience"
                                placeholder="Experience"
                                onChange={handleChange}
                              />
                            </div>
                            {/* <div className="signUpform-group">
                              <label htmlFor="gender">Gender</label>
                              <select name="gender" onChange={handleChange}>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                              </select>
                            </div> */}
                            {/* <div className="signUpform-group">
                              <label htmlFor="isImmediateJoiner">
                                Immediate Joiner
                              </label>
                              <select
                                name="isImmediateJoiner"
                                onChange={handleChange}
                              >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                              </select>
                            </div> */}

                            <div className="signUpform-emp dropdown-main">
                              <div className="dropdown">
                                <label htmlFor="">Immediate Joiner</label> <br />
                                <select className="form-select" onChange={handleChange}>
                                  {immediate.map(option => (
                                    <option key={option.value} value={option.value}>
                                      {option.label}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className="signUpform-emp dropdown-main dropdown-optns">
                              <div className="dropdown">
                                <label htmlFor="">Gender</label> <br />
                                <select className="form-select" onChange={handleChange}>
                                  {options.map(option => (
                                    <option key={option.value} value={option.value}>
                                      {option.label}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="register-btn">
                        <button onClick={registerUser}>Register Now</button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
