import React, { useState } from "react";
import "../stylesheets/SignUp.css";
import signUpEmp from "../images/signupFromImg.png";
import EmprSignUp from "./EmprSignUp";
import EmpSignUp from "./EmpSignUp";

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(false);

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
                    <EmprSignUp />
                  </>
                ) : (
                  <>
                    <EmpSignUp />
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
