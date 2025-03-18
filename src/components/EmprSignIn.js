// import React, { useState } from "react";
// import "../stylesheets/SignIn.css";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";
// let token = null;

// const EmprSignIn = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <div className="form">
//         <div className="form-group">
//           <label htmlFor="mobile">Mobile Number</label>
//           <div className="input-otp">
//             <input
//               type="number"
//               placeholder="Enter your mobile number"
//               maxLength={10}
//             />
//             <button>Send OTP</button>
//           </div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="otp">OTP</label>
//           <input type="password" placeholder="Enter OTP" maxLength={4} />
//         </div>

//         <div className="login-btn">
//           <button>Login Now</button>
//           <p>
//             Don't have an account? <Link to="/signup">Register Now</Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };
// export default EmprSignIn;

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const EmprSignIn = () => {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    otp: "",
  });

  const [verificationId, setVerificationId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
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
          isForLogin: 1, // Indicating that this is for login
        }
      );

      if (response.data.status === 200) {
        setVerificationId(response.data.result); // Store verification ID
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

  // Verify OTP function
  const verifyOtp = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${baseUrl}/employer/mobileNumberVerificationSetup`,
        {
          id: verificationId, // Use the verification ID received earlier
          otp: formData.otp, // Use the hardcoded OTP "1234"
        }
      );

      if (response.data.status === 200) {
        alert("OTP Verification Successful!");

        // Proceed to login after successful verification
        if (response.data.token) {
          Cookies.set("authToken", response.data.token, { expires: 1 });
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
          <button onClick={verifyOtp}>Login Now</button>
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
