import React from "react";
import "../stylesheets/SignIn.css";
import signInEmp from "../images/signInEmp.png";
import SignUp from "../components/SignUp";
import { FaHandsClapping } from "react-icons/fa6";

const SignIn = () => {
  return (
    <>
      <div className="signinBox">
        <div className="signIn">
          <div className="signin-left">
            <img src={signInEmp} alt="" />
            <h1>Let Job Find You</h1>
            <p>
              you will never know everything <br />
              But you will Konw more.
            </p>
          </div>
          <div className="signin-right">
            <div className="signin-right-box">
              <FaHandsClapping color="yellow" />
              <h2>Welcome Back!</h2>
              <p>Please login to access your account.</p>
              <div className="signIn-swithBtn">
                <button className="empBtn" >Employee</button>Ï
                <button className="jobSeekerBtn">Job Seeker</button>
              </div>
              <form>
                <div className="form-group">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="text"
                    id="mobile"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <button>Send OTP</button>

                <div className="form-group">
                  <label htmlFor="otp">OTP</label>
                  <input type="text" id="otp" placeholder="Enter OTP" />
                </div>
              </form>
              <button>login</button>
              <p>
                Don't have and account? <a href={SignUp}>Register here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
