import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const EmpSignUp = ({ employeeSigningUp, setEmployeeSigningUp }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    otp: "",
    email: "",
    currentPosition: "",
    specialization: "",
    location: "",
    experience: "",
    gender: "",
    isImmediateJoiner: false,
    otpVerified: false,
    userId: "",
  });

  const immediate = [
    { label: "Yes", value: true },
    { label: "No", value: false },
  ];

  const options = [
    { label: "Select Gender", value: "" },
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "isImmediateJoiner" ? value === "true" : value,
    });
  };

  const sendOtp = async () => {
    if (!formData.mobileNumber) {
      alert("Please enter a mobile number");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/api/mobileNumberVerificationSendOtp`, {
        mobileNumber: formData.mobileNumber,
        isForLogin: 0,
      });

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

  const verifyOtp = async () => {
    if (!formData.otp) {
      alert("Please enter the OTP");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/api/mobileNumberVerificationSetup`, {
        mobileNumber: formData.mobileNumber,
        otp: formData.otp,
        id: formData.userId,
      });

      if (response.data.status === 200) {
        alert("OTP Verified Successfully");
        setFormData((prev) => ({ ...prev, otpVerified: true }));
      }
    } catch (error) {
      console.error("OTP verification failed:", error);
      alert("OTP verification failed");
    }
    setLoading(false);
  };

  const registerUser = async () => {
    if (!formData.otpVerified) {
      alert("Please verify OTP first");
      return;
    }
  
    try {
      console.log({
        "name": formData.fullName,
        "mobileNumber": Number(formData.mobileNumber),
        "email": formData.email,
        "gender": formData.gender,
        "currentPosition": formData.experience,
        "location": formData.location,
        "isImmediateJoiner": formData.isImmediateJoiner,
        "specialization": formData.specialization,
      })
      const response = await axios.post(`${BASE_URL}/api/register`, {
        "name": formData.fullName,
        "mobileNumber": Number(formData.mobileNumber),
        "email": formData.email,
        "gender": formData.gender,
        "currentPosition": formData.experience,
        "location": formData.location,
        "isImmediateJoiner": formData.isImmediateJoiner,
        "specialization": formData.specialization,
        "expYear": Number(formData.experience)
      });
  
      if (response.data.status === 200) {
        alert("Registration successful!");
  
        console.log(response.data.result);
  
        const userId = response.data.result._id;
  
        navigate(`/signin/${userId}`);
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };
    
  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/getAllUserDetails`, {
        params: { userId },
      });

      if (response.data.status === 200) {
        console.log("User data:", response.data.result);

        setFormData((prev) => ({
          ...prev,
          fullName: response.data.result.name,
          email: response.data.result.email,
          location: response.data.result.location,
          specialization: response.data.result.specialization,
          experience: response.data.result.experienceInStack,
        }));
      } else {
        alert("Failed to fetch user data.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("Error fetching user data.");
    }
  };

  return (
    <>
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
                    <button onClick={checkMobileNumberAndVerifyOtp}>Login</button>
                    <p>
                      Don't have an account?{" "}
                      <Link to="/signup">Register Now</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default EmpSignUp;
