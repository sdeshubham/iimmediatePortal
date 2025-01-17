// import React, { useState, useEffect } from "react";
// import "../stylesheets/SignIn.css";
// import signInEmp from "../images/signInEmp.png";
// import wavinghand from "../images/waving-hand.png";
// import { useNavigate } from "react-router-dom";

// const SignIn = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [otp, setOtp] = useState("");
//   const [countdown, setCountdown] = useState(0);
//   const navigate = useNavigate();

//   const handleRegister = () => {
//     if (otp.length === 6) {
//       navigate("/candidate");
//     } else {
//       alert("Please enter a valid 6-digit OTP.");
//     }
//   };

//   const handleOtpChange = (event) => {
//     const value = event.target.value;
//     if (/^\d{0,6}$/.test(value)) {
//       setOtp(value);
//     }
//   };

//   const handleSendOtp = () => {
//     setCountdown(60);
//   };

//   useEffect(() => {
//     let timer;
//     if (countdown > 0) {
//       timer = setInterval(() => {
//         setCountdown((prevCountdown) => prevCountdown - 1);
//       }, 1000);
//     } else if (countdown === 0) {
//       clearInterval(timer);
//     }

//     return () => clearInterval(timer);
//   }, [countdown]);

//   return (
//     <>
//       <div className="signinBox">
//         <div className="signin-container">
//           <div className="left-box">
//             {isLogin ? (
//               <>
//                 <div className="signin-left">
//                   <img src={signInEmp} alt="" />
//                   <h3>Find Immediate Joiners for You</h3>
//                   <p>
//                     you will never know everything <br />
//                     But you will Know more
//                   </p>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="signin-left">
//                   <img src={signInEmp} alt="" />
//                   <h3>Let Job Find You</h3>
//                   <p>
//                     you will never know everything <br />
//                     But you will Know more
//                   </p>
//                 </div>
//               </>
//             )}
//           </div>
//           <div className="right-form">
//             <div className="right-form-head">
//               <img src={wavinghand} alt="" className="hello-icon" />
//               <h2>Welcome back!</h2>
//               <p>Please login to access your account</p>
//             </div>
//             <div className="signInRight">
//               <div className="signInForm">
//                 <div className="signIn-toggle">
//                   <button
//                     className={isLogin ? "active signBtn" : ""}
//                     onClick={() => setIsLogin(true)}
//                   >
//                     Employee
//                   </button>
//                   <button
//                     className={!isLogin ? "active signBtn" : ""}
//                     onClick={() => setIsLogin(false)}
//                   >
//                     Job seeker
//                   </button>
//                 </div>
//                 {isLogin ? (
//                   <>
//                     <div className="form">
//                       <div className="form-emp">
//                         <div className="form-group">
//                           <label htmlFor="mobile">Mobile Number</label>
//                           <div className="input-otp">
//                             <input
//                               type="number"
//                               id="mobile"
//                               placeholder="Enter your mobile number"
//                               maxLength={10}
//                             />
//                             <button onClick={handleSendOtp}>
//                               {countdown > 0 ? `${countdown}s` : "Send OTP"}
//                             </button>
//                           </div>
//                         </div>
//                         <div className="form-group">
//                           <label htmlFor="otp">OTP</label>
//                           <input
//                             type="password"
//                             id="otp"
//                             placeholder="Enter OTP"
//                             value={otp}
//                             onChange={handleOtpChange}
//                             maxLength={6}
//                           />
//                         </div>
//                       </div>
//                       <div className="login-btn">
//                         <button onClick={handleRegister}>Login</button>
//                         <p>
//                           Don't have an account? <a href="">Register Now</a>
//                         </p>
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <div className="form">
//                       <div className="form-group">
//                         <label htmlFor="mobile">Mobile Number</label>
//                         <div className="input-otp">
//                           <input
//                             type="number"
//                             id="mobile"
//                             placeholder="Enter your mobile number"
//                             maxLength={10}
//                           />
//                           <button onClick={handleSendOtp}>
//                             {countdown > 0 ? `${countdown}s` : "Send OTP"}
//                           </button>
//                         </div>
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="otp">OTP</label>
//                         <div className="input-otp">
//                           <input
//                             type="password"
//                             id="otp"
//                             placeholder="Enter OTP"
//                             value={otp}
//                             onChange={handleOtpChange}
//                             maxLength={6} // Enforces 6 digits at the UI level
//                           />
//                         </div>
//                       </div>
//                       <div className="login-btn">
//                         <button onClick={handleRegister}>Login</button>
//                         <p>
//                           Don't have an account? <a href="">Register Now</a>
//                         </p>
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

// export default SignIn;





// import React, { useState, useEffect } from "react";
// import "../stylesheets/SignIn.css";
// import signInEmp from "../images/signInEmp.png";
// import wavinghand from "../images/waving-hand.png";
// import { useNavigate } from "react-router-dom";

// const SignIn = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [otp, setOtp] = useState("");
//   const [countdown, setCountdown] = useState(0);
//   const navigate = useNavigate();

//   const handleRegister = () => {
//     navigate("/candidate");
//   };

//   const handleOtpChange = (event) => {
//     setOtp(event.target.value);
//   };

//   const handleSendOtp = () => {
//     setCountdown(60);
//   };

//   useEffect(() => {
//     let timer;
//     if (countdown > 0) {
//       timer = setInterval(() => {
//         setCountdown((prevCountdown) => prevCountdown - 1);
//       }, 1000);
//     } else if (countdown === 0) {
//       clearInterval(timer);
//     }

//     return () => clearInterval(timer);
//   }, [countdown]);

//   return (
//     <>
//       <div className="signinBox">
//         <div className="signin-container">
//           <div className="left-box">
//             {isLogin ? (
//               <>
//                 <div className="signin-left">
//                   <img src={signInEmp} alt="" />
//                   <h3>Find Immediate Joiners for You</h3>
//                   <p>
//                     you will never know everything <br />
//                     But you will Know more
//                   </p>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="signin-left">
//                   <img src={signInEmp} alt="" />
//                   <h3>Let Job Find You</h3>
//                   <p>
//                     you will never know everything <br />
//                     But you will Know more
//                   </p>
//                 </div>
//               </>
//             )}
//           </div>
//           <div className="right-form">
//             <div className="right-form-head">
//               <img src={wavinghand} alt="" className="hello-icon" />
//               <h2>Welcome back!</h2>
//               <p>Please login to access your account</p>
//             </div>
//             <div className="signInRight">
//               <div className="signInForm">
//                 <div className="signIn-toggle">
//                   <button
//                     className={isLogin ? "active signBtn" : ""}
//                     onClick={() => setIsLogin(true)}
//                   >
//                     Employee
//                   </button>
//                   <button
//                     className={!isLogin ? "active signBtn" : ""}
//                     onClick={() => setIsLogin(false)}
//                   >
//                     Job seeker
//                   </button>
//                 </div>
//                 {isLogin ? (
//                   <>
//                     <div className="form">
//                       <div className="form-emp">
//                         <div className="form-group">
//                           <label htmlFor="mobile">Mobile Number</label>
//                           <div className="input-otp">
//                             <input
//                               type="number"
//                               id="mobile"
//                               placeholder="Enter your mobile number"
//                               maxLength="10"
//                               onInput={(e) => {
//                                 if (e.target.value.length > 10) {
//                                   e.target.value = e.target.value.slice(0, 10);
//                                 }
//                               }}
//                             />
//                             <button onClick={handleSendOtp}>
//                               {countdown > 0 ? `${countdown}s` : "Send OTP"}
//                             </button>
//                           </div>
//                         </div>
//                         <div className="form-group">
//                           <label htmlFor="otp">OTP</label>
//                           <input
//                             type="password"
//                             id="otp"
//                             placeholder="Enter OTP"
//                             value={otp}
//                             onChange={handleOtpChange}
//                             maxLength="6"
//                             onInput={(e) => {
//                               if (e.target.value.length > 6) {
//                                 e.target.value = e.target.value.slice(0, 10);
//                               }
//                             }}
//                           />
//                         </div>
//                       </div>
//                       <div className="login-btn">
//                         <button onClick={handleRegister}>Login</button>
//                         <p>
//                           Don't have an account? <a href="">Register Now</a>
//                         </p>
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <div className="form">
//                       <div className="form-group">
//                         <label htmlFor="mobile">Mobile Number</label>
//                         <div className="input-otp">
//                           <input
//                             type="number"
//                             id="mobile"
//                             placeholder="Enter your mobile number"
//                             maxLength="10"
//                             onInput={(e) => {
//                               if (e.target.value.length > 10) {
//                                 e.target.value = e.target.value.slice(0, 10);
//                               }
//                             }}
//                           />
//                           <button onClick={handleSendOtp}>
//                             {countdown > 0 ? `${countdown}s` : "Send OTP"}
//                           </button>
//                         </div>
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="otp">OTP</label>
//                         <div className="input-otp">
//                           <input
//                             type="password"
//                             id="otp"
//                             placeholder="Enter OTP"
//                             value={otp}
//                             onChange={handleOtpChange}
//                             maxLength="6"
//                             onInput={(e) => {
//                               if (e.target.value.length > 6) {
//                                 e.target.value = e.target.value.slice(0, 10);
//                               }
//                             }}
//                           />
//                         </div>
//                       </div>
//                       <div className="login-btn">
//                         <button onClick={handleRegister}>Login</button>
//                         <p>
//                           Don't have an account? <a href="">Register Now</a>
//                         </p>
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

// export default SignIn;






import React, { useState, useEffect } from "react";
import "../stylesheets/SignIn.css";
import signInEmp from "../images/signInEmp.png";
import wavinghand from "../images/waving-hand.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/candidate");
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleSendOtp = () => {
    // Make API call to send OTP
    fetch("https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/api/mobileNumberVerificationSendOtp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mobileNumber: mobileNumber,
        type: 1,
        isForLogin: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          setOtpSent(true);
          setCountdown(60); // Start countdown for OTP
        } else {
          alert("Failed to send OTP. Try again!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while sending OTP.");
      });
  };

  const handleVerifyOtp = () => {
    // Make API call to verify OTP
    fetch("https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/api/mobileNumberVerificationSetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        otp: otp,
        id: "677cfee719ce191f1642f5f9", // Replace with actual user ID
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          setVerificationStatus("Verification successful!");
          // Redirect or proceed with further actions
          handleRegister();
        } else {
          setVerificationStatus("Invalid OTP. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setVerificationStatus("An error occurred during verification.");
      });
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <>
      <div className="signinBox">
        <div className="signin-container">
          <div className="left-box">
            {isLogin ? (
              <div className="signin-left">
                <img src={signInEmp} alt="" />
                <h3>Find Immediate Joiners for You</h3>
                <p>
                  you will never know everything <br />
                  But you will Know more
                </p>
              </div>
            ) : (
              <div className="signin-left">
                <img src={signInEmp} alt="" />
                <h3>Let Job Find You</h3>
                <p>
                  you will never know everything <br />
                  But you will Know more
                </p>
              </div>
            )}
          </div>
          <div className="right-form">
            <div className="right-form-head">
              <img src={wavinghand} alt="" className="hello-icon" />
              <h2>Welcome back!</h2>
              <p>Please login to access your account</p>
            </div>
            <div className="signInRight">
              <div className="signInForm">
                <div className="signIn-toggle">
                  <button
                    className={isLogin ? "active signBtn" : ""}
                    onClick={() => setIsLogin(true)}
                  >
                    Employee
                  </button>
                  <button
                    className={!isLogin ? "active signBtn" : ""}
                    onClick={() => setIsLogin(false)}
                  >
                    Job seeker
                  </button>
                </div>
                {isLogin ? (
                  <div className="form">
                    <div className="form-emp">
                      <div className="form-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <div className="input-otp">
                          <input
                            type="number"
                            id="mobile"
                            placeholder="Enter your mobile number"
                            maxLength="10"
                            value={mobileNumber}
                            onChange={handleMobileNumberChange}
                          />
                          <button onClick={handleSendOtp}>
                            {countdown > 0 ? `${countdown}s` : "Send OTP"}
                          </button>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="otp">OTP</label>
                        <input
                          type="password"
                          id="otp"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={handleOtpChange}
                          maxLength="6"
                        />
                      </div>
                    </div>
                    <div className="login-btn">
                      <button onClick={handleVerifyOtp}>Login</button>
                      <p>
                        Don't have an account? <a href="">Register Now</a>
                      </p>
                    </div>
                    {verificationStatus && <p>{verificationStatus}</p>}
                  </div>
                ) : (
                  <div className="form">
                    <div className="form-group">
                      <label htmlFor="mobile">Mobile Number</label>
                      <div className="input-otp">
                        <input
                          type="number"
                          id="mobile"
                          placeholder="Enter your mobile number"
                          maxLength="10"
                          value={mobileNumber}
                          onChange={handleMobileNumberChange}
                        />
                        <button onClick={handleSendOtp}>
                          {countdown > 0 ? `${countdown}s` : "Send OTP"}
                        </button>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="otp">OTP</label>
                      <div className="input-otp">
                        <input
                          type="password"
                          id="otp"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={handleOtpChange}
                          maxLength="6"
                        />
                      </div>
                    </div>
                    <div className="login-btn">
                      <button onClick={handleVerifyOtp}>Login</button>
                      <p>
                        Don't have an account? <a href="">Register Now</a>
                      </p>
                    </div>
                    {verificationStatus && <p>{verificationStatus}</p>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
