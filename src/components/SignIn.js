import React, { useState } from "react";
import "../stylesheets/SignIn.css";
import signInEmp from "../images/signInEmp.png";
import { FaHandsClapping } from "react-icons/fa6";
import SignUp from "./SignUp";

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="signinBox">
        <div className="signin-container">
          <div className="left-box">
            {isLogin ? (
              <>
                <div className="signin-left">
                  <img src={signInEmp} alt="" />
                  <h3>Let Job Find You</h3>
                  <p>
                    you will never know everything <br />
                    But you will Konw more
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="signin-left">
                  <img src={signInEmp} alt="" />
                  <h3>Find Immediate Joiners for You</h3>
                  <p>
                    you will never know everything <br />
                    But you will Konw more
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="right-form">
            <div className="right-form-head">
              <FaHandsClapping className="hello-icon" />
              <h2>WelCome back!</h2>
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
                            <button>Send otp</button>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="mobile">OTP</label>
                          <input
                            type="number"
                            id="otp"
                            placeholder="Enter OTP"
                          />
                        </div>
                      </div>
                      <div className="login-btn">
                        <button>Log In</button>
                        <p>
                          Don't have an account{" "}
                          <a href="" onClick={() => setIsLogin(<SignUp />)}>
                            Register now
                          </a>
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
                          <button>Send otp</button>
                        </div>{" "}
                      </div>
                      <div className="form-group">
                        <label htmlFor="mobile">OTP</label>
                        <input type="number" id="otp" placeholder="Enter OTP" />
                      </div>
                      <div className="login-btn">
                        <button>Log In</button>
                        <p>
                          Don't have an account <a href="#">Register now</a>
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
