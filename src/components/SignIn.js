import React, { useState, useEffect } from "react";
import "../stylesheets/SignIn.css";
import signInEmp from "../images/signInEmp.png";
import wavinghand from "../images/waving-hand.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate();

  const handleRegister = () => {
    // Perform validation or any logic here before navigating
    if (otp.length === 6) {
      navigate("/candi-profile");
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  const handleOtpChange = (event) => {
    const value = event.target.value;
    // Allow only numeric values and restrict to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
    }
  };

  const handleSendOtp = () => {
    setCountdown(60);
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      // Decrease the countdown by 1 every second
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      // Stop the timer when countdown reaches 0
      clearInterval(timer);
    }

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [countdown]);

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
                            />
                            <button onClick={handleSendOtp}>
                              {countdown > 0 ? `${countdown}s` : "Send OTP"}
                            </button>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="otp">OTP</label>
                          <input
                            type="text"
                            id="otp"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={handleOtpChange}
                            maxLength={6} // Enforces 6 digits at the UI level
                          />
                        </div>
                      </div>
                      <div className="login-btn">
                        <button onClick={handleRegister}>Login</button>
                        <p>
                          Don't have an account? <a href="">Register Now</a>
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="form">
                      <div className="form-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <div className="input-otp">
                          <input
                            type="number"
                            id="mobile"
                            placeholder="Enter your mobile number"
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
                            type="text"
                            id="otp"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={handleOtpChange}
                            maxLength={6} // Enforces 6 digits at the UI level
                          />
                        </div>
                      </div>
                      <div className="login-btn">
                        <button onClick={handleRegister}>Login</button>
                        <p>
                          Don't have an account? <a href="">Register Now</a>
                        </p>
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

export default SignIn;
