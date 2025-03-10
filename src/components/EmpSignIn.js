
import React, { useState } from "react";
import "../stylesheets/SignIn.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/api";

let token = null;

const EmpSignIn = () => {
    const navigate = useNavigate();
    const { setUser } = useAuth();
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
      mobileNumber: "",
      otp: "",
      otpVerified: false,
      userId: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const sendOtp = async () => {
      if (!formData.mobileNumber) {
        alert("Please enter a mobile number");
        return;
      }
  
      setLoading(true);
      try {
        let NumberedMobile = Number(formData.mobileNumber);
        console.log(
          "Sending OTP to:",
          formData.mobileNumber,
          typeof NumberedMobile
        );
  
        const response = await axios.post(
          `${baseUrl}/mobileNumberVerificationSendOtp`,
          {
            mobileNumber: NumberedMobile,
            isForLogin: 1,
          }
        );
  
        console.log("OTP Send Response:", response.data);
        if (response.data.status === 200) {
          alert(response.data.message);
          setFormData((prev) => ({
            ...prev,
            userId: response.data.result,
          }));
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
        alert("Failed to send OTP");
      }
      setLoading(false);
    };
  
    const checkMobileNumber = async () => {
      if (!formData.mobileNumber) {
        alert("Please enter a mobile number");
        return;
      }
  
      setLoading(true);
      try {
        console.log(`Checking mobile number: ${formData.mobileNumber}`);
        let NumberedMobile = Number(formData.mobileNumber);
        const response = await axios.post(`${baseUrl}/register`, {
          mobileNumber: NumberedMobile,
        });
  
        console.log("Check Mobile Response:", response.data);
  
        token = response.data.token;
  
        if (response.data.message === "Registration Successfully") {
          console.log("Mobile is registered, verifying OTP...");
  
          verifyOtp();
        } else {
          alert("Number not registered, please sign up!");
        }
      } catch (error) {
        console.error("Error checking mobile number:", error);
        alert("Failed to check mobile number");
      }
      setLoading(false);
    };
  
    const verifyOtp = async () => {
      if (!formData.otp) {
        alert("Please enter the OTP");
        return;
      }
  
      setLoading(true);
      try {
        console.log("Verifying OTP:", formData.otp);
        if (formData.otp === "1234") {
          alert("Login Successful");
  
          const response = await axios.post(`${baseUrl}/getAllUserDetails`, {
            userId: formData.userId,
          });
          console.log("All Users Data:", response.data);
  
          let matchedUser = response.data;
  
          console.log(response);
  
          matchedUser.token = token;
  
          setUser(matchedUser);
  
          navigate("/employee");
        } else {
          alert("Wrong OTP");
        }
      } catch (error) {
        console.error("OTP verification failed:", error);
        alert("OTP verification failed");
      }
      setLoading(false);
    };

  return (
    <>
      <div className="form">
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <div className="input-otp">
            <input
              type="number"
              name="mobileNumber"
              placeholder="Enter your mobile number"
              maxLength={10}
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            <button onClick={sendOtp}>Send OTP</button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="otp">OTP</label>
          <input
            type="password"
            name="otp"
            placeholder="Enter OTP"
            maxLength={4}
            value={formData.otp}
            onChange={handleChange}
          />
        </div>

        <div className="login-btn">
          <button onClick={checkMobileNumber}>Login</button>
          <p>
            Don't have an account? <Link to="/signup">Register Now</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default EmpSignIn;
