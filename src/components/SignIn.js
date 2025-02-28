import React, { useState, useEffect } from "react";
import "../stylesheets/SignIn.css";
import signInEmp from "../images/signInEmp.png";
import wavinghand from "../images/waving-hand.png";
import { Link } from "react-router-dom";
import axios from "axios";

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);

  // const [mobileNumber, setMobileNumber] = useState("");
  // const [otp, setOtp] = useState("");
  // const [otpSent, setOtpSent] = useState(false);
  // const [error, setError] = useState("");

  // const handleSendOtp = async () => {
  //   try {
  //     const usersResponse = await axios.get(`${baseUrl}/api/getAllUserDetails`);
  //     const users = usersResponse.data;
  //     const user = users.find((u) => u.mobile === mobileNumber);

  //     if (!user) {
  //       setError("You are not registered. Please register first.");
  //       return;
  //     }

  //     const otpResponse = await axios.post(
  //       `${baseUrl}/api/mobileNumberVerificationSendOtp`,
  //       {
  //         mobileNumber,
  //       }
  //     );

  //     if (otpResponse.status === 200) {
  //       setOtpSent(true);
  //       setError("");
  //     } else {
  //       setError("Failed to send OTP. Try again.");
  //     }
  //   } catch (err) {
  //     console.error("Error sending OTP", err);
  //     setError("Failed to send OTP. Try again.");
  //   }
  // };

  // const handleVerifyOtp = async () => {
  //   try {
  //     if (otp !== "1234") {
  //       setError("Invalid OTP");
  //       return;
  //     }

  //     const usersResponse = await axios.get(`${baseUrl}/api/getAllUserDetails`);
  //     const users = usersResponse.data;
  //     const user = users.find((u) => u.mobile === mobileNumber);

  //     if (user) {
  //       console.log("Login Successful", user);
  //     } else {
  //       setError("User not found. Please register.");
  //     }
  //   } catch (err) {
  //     console.error("Error verifying OTP", err);
  //     setError("Verification failed. Try again.");
  //   }
  // };

  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");

  const handleSendOtp = async () => {
    try {
      const usersResponse = await axios.get(`${baseUrl}/api/getAllUserDetails`);
      const users = usersResponse.data;
      const user = users.find((u) => u.mobile === mobileNumber);

      if (!user) {
        setError("You are not registered. Please register first.");
        return;
      }

      const otpResponse = await axios.post(
        `${baseUrl}/api/mobileNumberVerificationSendOtp`,
        {
          mobileNumber,
        }
      );

      if (otpResponse.status === 200) {
        setOtpSent(true);
        setError("");
      } else {
        setError("Failed to send OTP. Try again.");
      }
    } catch (err) {
      console.error(
        "Error sending OTP",
        err.response ? err.response.data : err.message
      );
      setError("Failed to send OTP. Try again.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      if (otp !== "1234") {
        setError("Invalid OTP");
        return;
      }

      const usersResponse = await axios.get(`${baseUrl}/api/getAllUserDetails`);
      const users = usersResponse.data;
      const user = users.find((u) => u.mobile === mobileNumber);

      if (user) {
        console.log("Login Successful", user);
      } else {
        setError("User not found. Please register.");
      }
    } catch (err) {
      console.error(
        "Error verifying OTP",
        err.response ? err.response.data : err.message
      );
      setError("Verification failed. Try again.");
    }
  };
  return (
    <>
      <div className="signinBox">
        <div className="signin-container">
          <div className="left-box">
            {isLogin ? (
              <>
                <div className="signin-left">
                  <img src={signInEmp} alt="" />
                  <h3>Find Immediate Joiners for You</h3>
                  <p>
                    you will never know everything <br />
                    But you will Know more
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="signin-left">
                  <img src={signInEmp} alt="" />
                  <h3>Let Job Find You</h3>
                  <p>
                    you will never know everything <br />
                    But you will Know more
                  </p>
                </div>
              </>
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
                    Employer
                  </button>
                  <button
                    className={!isLogin ? "active signBtn" : ""}
                    onClick={() => setIsLogin(false)}
                  >
                    Employee
                  </button>
                </div>
                {isLogin ? (
                  <>
                    <div className="form">
                      <div className="form-emp">
                        <div className="form-group">
                          <label htmlFor="mobile">Mobile Number</label>
                          <div className="input-otp">
                            <input
                              type="number"
                              id="mobile"
                              placeholder="Enter your mobile number"
                              maxLength={10}
                            />
                            <button>Send OTP</button>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="otp">OTP</label>
                          <input
                            type="password"
                            id="otp"
                            placeholder="Enter OTP"
                            maxLength={4}
                          />
                        </div>
                      </div>
                      <div className="login-btn">
                        <button>Login</button>
                        <p>
                          Don't have an account?{" "}
                          <Link to="/signup">Register Now</Link>
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* <div className="form">
                      <div className="form-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <div className="input-otp">
                          <input
                            type="number"
                            id="mobile"
                            placeholder="Enter your mobile number"
                            maxLength={10}
                          />
                          <button>
                            Send OTP
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
                            maxLength={4}
                          />
                        </div>
                      </div>
                      <div className="login-btn">
                        <button>Login</button>
                        <p>
                          Don't have an account? <Link to="/signup">Register Now</Link>
                        </p>
                      </div>
                    </div> */}
                    {/* ////////////////////////// */}

                    {/* <div className="form">
                      <div className="form-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <div className="input-otp">
                          <input
                            type="number"
                            id="mobile"
                            placeholder="Enter your mobile number"
                            maxLength={10}
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                          />
                          <button onClick={handleSendOtp}>Send OTP</button>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="otp">OTP</label>
                        <div className="input-otp">
                          <input
                            type="password"
                            id="otp"
                            placeholder="Enter OTP"
                            maxLength={4}
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="login-btn">
                        <button onClick={handleVerifyOtp}>Login</button>
                        <p>
                          Don't have an account?{" "}
                          <Link to="/signup">Register Now</Link>
                        </p>
                      </div>
                      {error && <p style={{ color: "red" }}>{error}</p>}
                    </div> */}

                    {/* ////////////////////////// */}
                    <div className="form">
                      <div className="form-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <div className="input-otp">
                          <input
                            type="number"
                            id="mobile"
                            placeholder="Enter your mobile number"
                            maxLength={10}
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                          />
                          <button onClick={handleSendOtp}>Send OTP</button>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="otp">OTP</label>
                        <div className="input-otp">
                          <input
                            type="password"
                            id="otp"
                            placeholder="Enter OTP"
                            maxLength={4}
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="login-btn">
                        <button onClick={handleVerifyOtp}>Login</button>
                        <p>
                          Don't have an account?{" "}
                          <Link to="/signup">Register Now</Link>
                        </p>
                      </div>
                      {error && <p style={{ color: "red" }}>{error}</p>}
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

export default SignIn;
