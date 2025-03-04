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
      const response = await axios.post(
        `${BASE_URL}/mobileNumberVerificationSendOtp`,
        {
          mobileNumber: formData.mobileNumber,
          isForLogin: 0,
        }
      );

      if (response.data.status === 200) {
        alert(response.data.message);
        setFormData((prev) => ({
          ...prev,
          userId: response.data.result,
        }));
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP");
    }
    setLoading(false);
  };

  const verifyOtp = async () => {
    console.log("Verifying OTP with:", {
      mobileNumber: formData.mobileNumber,
      otp: formData.otp,
      userId: formData.userId,
    });

    if (!formData.otp) {
      alert("Please enter the OTP");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/mobileNumberVerificationSetup`,
        {
          mobileNumber: formData.mobileNumber,
          otp: formData.otp,
          id: formData.userId,
        }
      );

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
      navigate("/employee");
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
                    <div className="signUpform">
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
                          <button>Register Now</button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
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

                            <div className="signUpform-emp dropdown-main">
                              <div className="dropdown">
                                <label htmlFor="">Immediate Joiner</label>{" "}
                                <br />
                                <select
                                  className="form-select"
                                  onChange={handleChange}
                                >
                                  {immediate.map((option) => (
                                    <option
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div className="signUpform-emp dropdown-main dropdown-optns">
                              <div className="dropdown">
                                <label htmlFor="">Gender</label> <br />
                                <select
                                  className="form-select"
                                  onChange={handleChange}
                                >
                                  {options.map((option) => (
                                    <option
                                      key={option.value}
                                      value={option.value}
                                    >
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






// import React, { useState, useEffect } from "react";
// import "../stylesheets/SignUp.css";
// import axios from "axios";
// import signUpEmp from "../images/signupFromImg.png";
// import { useNavigate } from "react-router-dom";

// const BASE_URL = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

// const SignUp = () => {
//   const [isLogin, setIsLogin] = useState(false);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [formData, setFormData] = useState({
//     fullName: "",
//     mobileNumber: "",
//     otp: "",
//     email: "",
//     designationName: "",
//     companyName: "",
//     location: "",
//     companySize: "",
//     otpVerified: false,
//     id: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const sendOtp = async () => {
//     if (!formData.mobileNumber) {
//       alert("Please enter a mobile number");
//       return;
//     }
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         `${BASE_URL}/employer/mobileNumberVerificationSendOtp`,
//         {
//           mobileNumber: formData.mobileNumber,
//           isForLogin: 0,
//         }
//       );
  
//       if (response.data.status === 200) {
//         alert(response.data.message);
//         console.log("Received ID:", response.data.result);
  
//         setFormData((prev) => ({
//           ...prev,
//           id: response.data.result,
//         }));
//       }
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//       alert("Failed to send OTP");
//     }
//     setLoading(false);
//   };
  
//   const verifyOtp = () => {
//     if (otp === "1234") { 
//       alert("OTP Verified Successfully");
//       setFormData((prev) => ({
//         ...prev,
//         otpVerified: true,
//         otp: otp,
//       }));
//     } else {
//       alert("Invalid OTP. Please try again.");
//     }
//   };
   
//   const registerEmployer = async () => {
//     try {
//         console.log("Register Employer Data:", formData);

//         if (!formData.otpVerified) {
//             alert("Please First Verify Mobile Number");
//             return;
//         }

//         const response = await axios.post(`${BASE_URL}/employer/register`, {
//             email: formData.email,
//             name: formData.fullName,
//             contactNumber: formData.mobileNumber,
//             otpVerified: formData.otpVerified,
//             otp: formData.otp,
//             designationName: formData.designationName,
//             companyName: formData.companyName,
//             location: formData.location,
//             companySize: formData.companySize,
//             id: formData.id,
//         });

//         console.log("Server Response:", response.data);

//         if (response.data.success) {
//             alert("Registration Successful!");
//         } else {
//             alert("Registration Failed: " + response.data.message);
//         }
//     } catch (error) {
//         console.error("API Error:", error);
//         alert("Something went wrong. Please try again.");
//     }
// };


//   return (
//     <div className="signup-box">
//       <div className="signup-container">
//         <div className="leftBox">
//           <div className="signup-left">
//             <img src={signUpEmp} alt="" />
//             <h3>
//               {isLogin ? "Find Immediate Joiners for You" : "Let Job Find You"}
//             </h3>
//             <p>You will never know everything, but you will know more.</p>
//           </div>
//         </div>

//         <div className="rightForm">
//           <div className="signUpRight">
//             <div className="signInForm">
//               <div className="signUp-toggle">
//                 <button
//                   className={isLogin ? "active signUpBtn" : ""}
//                   onClick={() => setIsLogin(true)}
//                 >
//                   Employer
//                 </button>
//                 <button
//                   className={!isLogin ? "active signUpBtn" : ""}
//                   onClick={() => setIsLogin(false)}
//                 >
//                   Employee
//                 </button>
//               </div>
//               {isLogin ? (
//                 <div className="signUpform">
//                   <div className="formCols">
//                     <div className="formColOne">
//                       <div className="signUpform-emp">
//                         <div className="signUpform-group">
//                           <label htmlFor="name">Full Name</label>
//                           <input
//                             type="text"
//                             id="fullname"
//                             name="fullName"
//                             placeholder="Your Full Name"
//                             onChange={handleChange}
//                           />
//                         </div>
//                         <div className="signUpform-group">
//                           <label htmlFor="mobile">Mobile Number</label>
//                           <div className="send-otp no-spinner">
//                             <input
//                               type="number"
//                               id="mobile"
//                               name="mobileNumber"
//                               placeholder="Mobile Number"
//                               onChange={handleChange}
//                             />
//                             <button onClick={sendOtp}>Send OTP</button>
//                           </div>
//                         </div>
//                         <div className="signUpform-group">
//                           <label htmlFor="mobile">OTP</label>
//                           <div className="send-otp">
//                             <input
//                               type="password"
//                               id="verify-otp"
//                               placeholder="Enter OTP"
//                               value={otp}
//                               onChange={(e) => setOtp(e.target.value)}
//                             />
//                             <button onClick={verifyOtp}>Verify OTP</button>
//                           </div>
//                         </div>
//                         <div className="signUpform-group">
//                           <label htmlFor="name">Your Current role</label>
//                           <input
//                             type="text"
//                             id="currentrole"
//                             name="designationName"
//                             placeholder="Your Current Role"
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     <div className="formColTwo">
//                       <div className="signUpform-emp">
//                         <div className="signUpform-group">
//                           <label htmlFor="companyname">Company Name</label>
//                           <input
//                             type="text"
//                             id="company"
//                             name="companyName"
//                             placeholder="Company Name"
//                             onChange={handleChange}
//                           />
//                         </div>
//                         <div className="signUpform-group">
//                           <label htmlFor="email">Email</label>
//                           <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             placeholder="Email"
//                             onChange={handleChange}
//                           />
//                         </div>
//                         <div className="signUpform-group">
//                           <label htmlFor="location">Location</label>
//                           <input
//                             type="text"
//                             id="location"
//                             name="location"
//                             placeholder="Location"
//                             onChange={handleChange}
//                           />
//                         </div>
//                         <div className="signUpform-group">
//                           <label htmlFor="name">Company Size</label>
//                           <input
//                             type="text"
//                             id="companysize"
//                             name="companySize"
//                             placeholder="Company Size"
//                             onChange={handleChange}
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="register-btn">
//                     <button onClick={registerEmployer}>Register Now</button>
//                   </div>
//                 </div>
//               ) : (
//                 <p>Employee registration form remains unchanged.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
