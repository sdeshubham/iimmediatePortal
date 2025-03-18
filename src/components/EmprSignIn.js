// import React, { useState } from "react";
// import "../stylesheets/SignIn.css";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";

// const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

// let token = null;

// const EmprSignIn = () => {
//   const navigate = useNavigate();
//   const { setUser } = useAuth();
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     mobileNumber: "",
//     otp: "",
//     otpVerified: false,
//     userId: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const sendOtp = async () => {
//     if (!formData.mobileNumber) {
//       alert("Please enter a mobile number");
//       return;
//     }

//     setLoading(true);
//     try {
//       let NumberedMobile = Number(formData.mobileNumber);
//       console.log(
//         "Sending OTP to:",
//         formData.mobileNumber,
//         typeof NumberedMobile
//       );

//       const response = await axios.post(`${baseUrl}/employer/mobileNumberVerificationSendOtp`,
//         { mobileNumber: NumberedMobile, isForLogin: 1 },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       console.log("OTP Send Response:", response.data);
//       if (response.data.status === 200) {
//         alert(response.data.message);
//         setFormData((prev) => ({
//           ...prev,
//           userId: response.data.result,
//         }));
//       }
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//       alert("Failed to send OTP");
//     }
//     setLoading(false);
//   };

//   const checkMobileNumber = async () => {
//     if (!formData.mobileNumber) {
//       alert("Please enter a mobile number");
//       return;
//     }

//     setLoading(true);
//     try {
//       console.log(`Checking mobile number: ${formData.mobileNumber}`);
//       let NumberedMobile = Number(formData.mobileNumber);
//       const response = await axios.post(`${baseUrl}/employer/register`, {
//         mobileNumber: NumberedMobile,
//       });

//       console.log("Check Mobile Response:", response.data);

//       if (response.data.token) {
//         token = response.data.token;
//       } else {
//         console.error("Token is missing in response");
//         alert("Token not found. Please try again.");
//         setLoading(false);
//         return;
//       }

//       if (response.data.message === "Registration Successfully") {
//         console.log("Mobile is registered, verifying OTP...");
//         verifyOtp();
//       } else {
//         alert("Number not registered, please sign up!");
//       }
//     } catch (error) {
//       console.error("Error checking mobile number:", error);
//       alert("Failed to check mobile number");
//     }
//     setLoading(false);
//   };

//   const verifyOtp = async () => {
//     if (!formData.otp) {
//       alert("Please enter the OTP");
//       return;
//     }

//     setLoading(true);
//     try {
//       console.log("Verifying OTP:", formData.otp);
//       if (formData.otp === "1234") {
//         alert("Login Successful");

//         const response = await axios.post(`${baseUrl}/employer/getEmployerAllDetails`, {
//           userId: formData.userId,
//         });
//         console.log("All Users Data:", response.data);

//         let matchedUser = response.data;

//         if (matchedUser && matchedUser.token) {
//           matchedUser.token = token;
//           setUser(matchedUser);
//           navigate("/employee");
//         } else {
//           console.error("User data or token is missing");
//           alert("Invalid user data or token");
//         }
//       } else {
//         alert("Wrong OTP");
//       }
//     } catch (error) {
//       console.error("OTP verification failed:", error);
//       alert("OTP verification failed");
//     }
//     setLoading(false);
//   };

//   return (
//     <>
//       <div className="form">
//         <div className="form-group">
//           <label htmlFor="mobile">Mobile Number</label>
//           <div className="input-otp">
//             <input
//               type="number"
//               name="mobileNumber"
//               placeholder="Enter your mobile number"
//               maxLength={10}
//               value={formData.mobileNumber}
//               onChange={handleChange}
//             />
//             <button onClick={sendOtp} disabled={loading}>
//               {loading ? "Sending..." : "Send OTP"}
//             </button>
//           </div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="otp">OTP</label>
//           <input
//             type="password"
//             name="otp"
//             placeholder="Enter OTP"
//             maxLength={4}
//             value={formData.otp}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="login-btn">
//           <button onClick={checkMobileNumber} disabled={loading}>
//             {loading ? "Logging In..." : "Login"}
//           </button>
//           <p>
//             Don't have an account? <Link to="/signup">Register Now</Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EmprSignIn;

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
    otp: "1234", // Hardcoded OTP for testing purposes
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

  // Send OTP function
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
          navigate("/dashboard"); // Redirect to dashboard after successful login
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
              {loading ? "Sending OTP..." : "Send OTP"}
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
            // readOnly 
          />
        </div>

        <div className="login-btn">
          <button onClick={verifyOtp}>
            Login Now
          </button>
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
