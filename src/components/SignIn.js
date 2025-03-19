import React, { useState } from "react";
import "../stylesheets/SignIn.css";
import signInEmp from "../images/signInEmp.png";
import wavinghand from "../images/waving-hand.png";
import EmprSignIn from "./EmprSignIn";
import EmpSignIn from "./EmpSignIn";

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="signinBox">
      <div className="signin-container">
        <div className="left-box">
          <div className="signin-left">
            <img src={signInEmp} alt="Sign In" />
            <h3>
              {isLogin ? "Find Immediate Joiners for You" : "Let Job Find You"}
            </h3>
            <p>
              you will never know everything <br /> But you will Know more
            </p>
          </div>
        </div>

        <div className="right-form">
          <div className="right-form-head">
            <img src={wavinghand} alt="Hello" className="hello-icon" />
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

              {isLogin ? <EmprSignIn /> : <EmpSignIn />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
