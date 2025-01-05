import React, { useState } from "react";
import "../stylesheets/SignUp.css";
import signUpEmp from "../images/signupFromImg.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const immediate = [
    { label: "Select", value: 1 },
    { label: "Within 7 Days", value: 2 },
    { label: "Within 15 Days", value: 3 },
    { label: "Within 30 Days", value: 4 },
    { label: "Within 45 Days", value: 5 },
  ];

  const options = [
    { label: "Select Gender", value: 1 },
    { label: "Male", value: 2 },
    { label: "Female", value: 3 },
    { label: "Other", value: 4 },
  ];

  function handleSelect (event) {
    setValue(event.target.value)
  }

  const handleRegister = () => {
    navigate("/candidate");
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
                        {/* Column two */}
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
                    </div>
                  </>
                ) : (
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

                            <div className="signUpform-emp dropdown-main">
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
                            {/* -------------------------------- */}
                            {/* -------------------------------- */}
                            <div className="signUpform-group empyr-loca">
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
