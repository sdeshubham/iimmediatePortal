import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const EmpSignUp = () => {
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
    isImmediateJoiner: "",
    otpVerified: false,
    userId: "",
    noticePeriod: "",
  });

  const immediate = [
    { label: "Within 7 Days", value: 1 },
    { label: "Within 15 Days", value: 2 },
    { label: "Within 30 Days", value: 3 },
    { label: "Within 45 Days", value: 4 },
    { label: "Within 60 Days", value: 5 },
    { label: "Within 60+ Days", value: 6 },
  ];

  const options = [
    { label: "Select Gender", value: "" },
    { label: "Male", value: 1 },
    { label: "Female", value: 2 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendOtp = async () => {
    if (!formData.mobileNumber) {
      alert("Please enter a mobile number");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/api/mobileNumberVerificationSendOtp`,
        {
          mobileNumber: formData.mobileNumber,
          isForLogin: 0,
        }
      );

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
      const response = await axios.post(
        `${BASE_URL}/api/mobileNumberVerificationSetup`,
        {
          mobileNumber: formData.mobileNumber,
          otp: formData.otp,
          id: formData.userId,
        }
      );

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
      const response = await axios.post(`${BASE_URL}/api/register`, {
        name: formData.fullName,
        mobileNumber: formData.mobileNumber,
        email: formData.email,
        gender: formData.gender,
        location: formData.location,
        specialization: formData.specialization,
        currentPosition: formData.currentPosition,
        experienceInStack: formData.experience,
        noticePeriod: formData.isImmediateJoiner,
        // isImmediateJoiner: formData.isImmediateJoiner,
        noticePeriod: formData.noticePeriod,
      });

      if (response.data.status === 200) {
        alert("Registration successful! You can login now...");
        navigate("/signin");

        console.log(response.data.result);

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
      <div className="signUpform">
        <div className="formCols">
          <div className="formColOne">
            <div className="signUpform-emp">
              <div className="signUpform-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                  name="fullName"
                  placeholder="Your Full Name"
                  onChange={handleChange}
                />
              </div>
              <div className="signUpform-group">
                <label htmlFor="mobile">Mobile Number</label>
                <div className="send-otp">
                  <input
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    onChange={handleChange}
                  />
                  <button onClick={sendOtp}>Send OTP</button>
                </div>
              </div>
              <div className="signUpform-group">
                <label htmlFor="verify-otp">OTP</label>
                <div className="send-otp">
                  <input
                    name="otp"
                    placeholder="Enter OTP"
                    onChange={handleChange}
                  />
                  <button onClick={verifyOtp}>Verify OTP</button>
                </div>
              </div>
              <div className="signUpform-group">
                <label htmlFor="currentrole">Current Position</label>
                <input
                  name="currentPosition"
                  placeholder="Current Role"
                  onChange={handleChange}
                />
              </div>
              <div className="signUpform-group">
                <label htmlFor="specialization">Specialization</label>
                <input
                  name="specialization"
                  placeholder="Specialization"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="formColTwo">
            <div className="signUpform-emp">
              <div className="signUpform-group">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <div className="signUpform-group">
                <label htmlFor="location">Location</label>
                <input
                  name="location"
                  placeholder="Location"
                  onChange={handleChange}
                />
              </div>
              <div className="signUpform-group">
                <label htmlFor="experience">Experience</label>
                <input
                  name="experience"
                  placeholder="Experience"
                  onChange={handleChange}
                />
              </div>

              <div className="signUpform-emp dropdown-main">
                <div className="dropdown">
                  <label htmlFor="isImmediateJoiner">
                    How soon can you join
                  </label>{" "}
                  <br />
                  <select
                    className="form-select"
                    name="noticePeriod"
                    onChange={handleChange}
                    value={formData.noticePeriod}
                  >
                    {immediate.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="signUpform-emp dropdown-main dropdown-optns">
                <div className="dropdown">
                  <label htmlFor="">Gender</label> <br />
                  <select
                    className="form-select"
                    name="gender"
                    onChange={handleChange}
                    value={formData.gender}
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="register-btn">
          <button onClick={registerUser}>Register Now</button>
        </div>
      </div>
    </>
  );
};

export default EmpSignUp;
