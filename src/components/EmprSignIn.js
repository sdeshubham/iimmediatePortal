import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../components/AuthContext";

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const EmprSignIn = () => {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    otp: "",
  });

  const [verificationId, setVerificationId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth(); // Get login function from AuthContext
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendOtp = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${baseUrl}/employer/mobileNumberVerificationSendOtp`,
        {
          mobileNumber: formData.mobileNumber,
          isForLogin: 1,
        }
      );

      if (response.data.status === 200) {
        setVerificationId(response.data.result);
        alert("OTP sent successfully!");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(
        error.response ? error.response.data.message : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${baseUrl}/employer/mobileNumberVerificationSetup`,
        {
          id: verificationId,
          otp: formData.otp,
        }
      );

      if (response.data.status === 200) {
        alert("OTP Verification Successful!");

        if (response.data.token) {
          Cookies.set("authToken", response.data.token, { expires: 1 });

          // Store user in AuthContext
          const userData = { name: "Employer", mobile: formData.mobileNumber };
          login(userData);

          navigate("/employer");
        }
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(
        error.response ? error.response.data.message : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="form">
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <div className="input-otp">
            <input
              type="number"
              placeholder="Enter your mobile number"
              maxLength={10}
              value={formData.mobileNumber}
              onChange={handleChange}
              name="mobileNumber"
            />
            <button type="button" onClick={sendOtp} disabled={loading}>
              Send OTP
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="otp">OTP</label>
          <input
            type="text"
            placeholder="Enter OTP"
            maxLength={4}
            value={formData.otp}
            onChange={handleChange}
            name="otp"
          />
        </div>

        <div className="login-btn">
          <button onClick={verifyOtp}>Login</button>
          <p>
            Don't have an account? <Link to="/signup">Register Now</Link>
          </p>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
};

export default EmprSignIn;
