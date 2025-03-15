import React, { useState } from "react";
import "../stylesheets/SignIn.css";
import signInEmp from "../images/signInEmp.png";
import wavinghand from "../images/waving-hand.png";
import EmprSignIn from "./EmprSignIn";
import EmpSignIn from "./EmpSignIn";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/api";

let token = null;

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);
  // const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  // const [loading, setLoading] = useState(false);
  // const [formData, setFormData] = useState({
  //   mobileNumber: "",
  //   otp: "",
  //   otpVerified: false,
  //   userId: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const sendOtp = async () => {
  //   if (!formData.mobileNumber) {
  //     alert("Please enter a mobile number");
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     let NumberedMobile = Number(formData.mobileNumber);
  //     console.log("Sending OTP to:", formData.mobileNumber, typeof NumberedMobile); 

  //     const response = await axios.post(
  //       `${baseUrl}/mobileNumberVerificationSendOtp`,
  //       {
  //         mobileNumber: NumberedMobile,
  //         isForLogin: 1,
  //       }
  //     );

  //     console.log("OTP Send Response:", response.data);
  //     if (response.data.status === 200) {
  //       alert(response.data.message);
  //       setFormData((prev) => ({
  //         ...prev,
  //         userId: response.data.result,
  //       }));
  //     }
  //   } catch (error) {
  //     console.error("Error sending OTP:", error);
  //     alert("Failed to send OTP");
  //   }
  //   setLoading(false);
  // };

  // const checkMobileNumber = async () => {
  //   if (!formData.mobileNumber) {
  //     alert("Please enter a mobile number");
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     console.log(`Checking mobile number: ${formData.mobileNumber}`);
  //      let NumberedMobile = Number(formData.mobileNumber);
  //     const response = await axios.post(`${baseUrl}/register`, {
  //       mobileNumber: NumberedMobile,
  //     });

  //     console.log("Check Mobile Response:", response.data);

  //     token = response.data.token;

  //     if (response.data.message === "Registration Successfully") {
  //       console.log("Mobile is registered, verifying OTP...");

  //       verifyOtp();
  //     } else {
  //       alert("Number not registered, please sign up!");
  //     }
  //   } catch (error) {
  //     console.error("Error checking mobile number:", error);
  //     alert("Failed to check mobile number");
  //   }
  //   setLoading(false);
  // };



  // const verifyOtp = async () => {
  //   if (!formData.otp) {
  //     alert("Please enter the OTP");
  //     return;
  //   }
  
  //   setLoading(true);
  //   try {
  //     console.log("Verifying OTP:", formData.otp);
  //     if (formData.otp === "1234") {
  //       alert("Login Successful");
  
  //       const response = await axios.post(`${baseUrl}/getAllUserDetails`, {
  //         userId: formData.userId,
  //       });
  //       console.log("All Users Data:", response.data);

  //       let matchedUser = response.data 

  //       console.log(response);

  //       matchedUser.token = token;

  //       setUser(matchedUser);

  //       navigate("/employee");

  //     } else {
  //       alert("Wrong OTP");
  //     }
  //   } catch (error) {
  //     console.error("OTP verification failed:", error);
  //     alert("OTP verification failed");
  //   }
  //   setLoading(false);
  // };

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