import React, { useState } from "react";
import "../stylesheets/SignUp.css";
import signUpEmp from "../images/signupFromImg.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRegister = () => {
    // Perform validation or any logic here before navigating
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
                    Employee
                  </button>
                  <button
                    className={!isLogin ? "active signUpBtn" : ""}
                    onClick={() => setIsLogin(false)}
                  >
                    Job seeker
                  </button>
                </div>
                {isLogin ? (
                  <>
                    <div className="signUpform">
                      {/* <h2>Register As a Employee</h2> */}

                      <div className="formCols">
                        {/* Column two */}
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
                      {/* <div className="checkBox">
                        <input type="checkbox" name="check" id="check-box" />{" "}
                        <p>I accept all terms and condition</p>
                      </div> */}
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
                      {/* <h2>Register As a Job Seeker</h2> */}

                      <div className="formCols">
                        {/* Column two */}
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
                        {/* Column two */}
                        <div className="formColTwo">
                          <div className="signUpform-emp">
                            <div className="signUpform-group">
                              <label htmlFor="companyname">Gender</label>
                              <input
                                type="text"
                                id="gender"
                                placeholder="Gender"
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
                              <label htmlFor="immediateJoiner">
                                Immediate Joiner
                              </label>
                              <div className="send-otp immBtn">
                                <div className="immediate-check">
                                  <input
                                    type="radio"
                                    id="immediatejoinerYes"
                                    name="immediateJoiner"
                                    value="yes"
                                    checked={selectedOption === "yes"}
                                    onChange={handleOptionChange}
                                  />
                                  <span>Yes</span>
                                </div>
                                <div className="immediate-check">
                                  <input
                                    type="radio"
                                    id="immediatejoinerNo"
                                    name="immediateJoiner"
                                    value="no"
                                    checked={selectedOption === "no"}
                                    onChange={handleOptionChange}
                                  />
                                  <span>No</span>
                                </div>
                              </div>
                            </div>
                            <div className="signUpform-group">
                              <label htmlFor="name">Location</label>
                              <input
                                type="text"
                                id="location"
                                placeholder="Location"
                              />
                            </div>
                            <div className="signUpform-group">
                              <label htmlFor="name">Experiencw</label>
                              <input
                                type="text"
                                id="experience"
                                placeholder="Experience"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="checkBox">
                        <input type="checkbox" name="check" id="check-box" />{" "}
                        <p>I accept all terms and condition</p>
                      </div> */}
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
