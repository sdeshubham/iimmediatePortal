// import React from "react";
// import "../stylesheets/SignIn.css";
// import { Link } from "react-router-dom";

// const EmpSignIn = () => {

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
//           <input
//             type="password"
//             placeholder="Enter OTP"
//             maxLength={4}
//           />
//         </div>

//         <div className="login-btn">
//           <button>Login</button>
//           <p>
//             Don't have an account? <Link to="/signup">Register Now</Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EmpSignIn;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import "../stylesheets/SignIn.css";

// const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

// const EmpSignIn = () => {
//   const [formData, setFormData] = useState({
//     mobileNumber: "",
//     otp: "1234",
//   });
//   const [verificationId, setVerificationId] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const sendOtp = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(`${baseUrl}/api/mobileNumberVerificationSendOtp`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           mobileNumber: formData.mobileNumber,
//           isForLogin: 1,
//         }),
//       });
//       const data = await response.json();
//       if (data.status === 200) {
//         setVerificationId(data.result);
//         alert("OTP Sent Successfully");
//       } else {
//         setError(data.message);
//       }
//     } catch (error) {
//       setError(error.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const verifyOtp = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(`${baseUrl}/api/mobileNumberVerificationSetup`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           id: verificationId,
//           otp: formData.otp,
//         }),
//       });
//       const data = await response.json();
//       if (data.status === 200) {
//         alert("OTP Verification Successful!");

//         if (data.token) {
//           Cookies.set("authToken", data.token, { expires: 1 });
//           navigate("/employeesprofile");
//         }
//       } else {
//         setError(data.message);
//       }
//     } catch (error) {
//       setError(error.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="form">
//       <div className="form-group">
//         <label htmlFor="mobile">Mobile Number</label>
//         <div className="input-otp">
//           <input
//             type="number"
//             placeholder="Enter your mobile number"
//             maxLength={10}
//             value={formData.mobileNumber}
//             onChange={handleChange}
//             name="mobileNumber"
//           />
//           <button type="button" onClick={sendOtp} disabled={loading}>
//             Send OTP
//           </button>
//         </div>
//       </div>

//       <div className="form-group">
//         <label htmlFor="otp">OTP</label>
//         <input
//           type="password"
//           placeholder="Enter OTP"
//           maxLength={4}
//           value={formData.otp}
//           onChange={handleChange}
//           name="otp"
//         />
//       </div>

//       <div className="login-btn">
//         <button onClick={verifyOtp} disabled={loading}>
//           Login
//         </button>
//         <p>
//           Don't have an account? <Link to="/signup">Register Now</Link>
//         </p>
//       </div>

//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default EmpSignIn;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../stylesheets/SignIn.css";

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

// const EmpSignIn = () => {
//   const [formData, setFormData] = useState({
//     mobileNumber: "",
//     otp: "1234",
//   });
//   const [verificationId, setVerificationId] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const sendOtp = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(`${baseUrl}/api/mobileNumberVerificationSendOtp`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           mobileNumber: formData.mobileNumber,
//           isForLogin: 1,
//         }),
//       });
//       const data = await response.json();
//       if (data.status === 200) {
//         setVerificationId(data.result);
//         alert("OTP Sent Successfully");
//       } else {
//         setError(data.message);
//       }
//     } catch (error) {
//       setError(error.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const verifyOtp = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(`${baseUrl}/api/mobileNumberVerificationSetup`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           id: verificationId,
//           otp: formData.otp,
//         }),
//       });
//       const data = await response.json();
//       if (data.status === 200) {
//         alert("OTP Verification Successful!");

//         if (data.token) {
//           Cookies.set("authToken", data.token, { expires: 1 });
//           const userId = data.result._id;
//           Cookies.set("userId", userId);
//           navigate("/employee-page");
//         }
//       } else {
//         setError(data.message);
//       }
//     } catch (error) {
//       setError(error.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="form">
//       <div className="form-group">
//         <label htmlFor="mobile">Mobile Number</label>
//         <div className="input-otp">
//           <input
//             type="number"
//             placeholder="Enter your mobile number"
//             maxLength={10}
//             value={formData.mobileNumber}
//             onChange={handleChange}
//             name="mobileNumber"
//           />
//           <button type="button" onClick={sendOtp} disabled={loading}>
//             Send OTP
//           </button>
//         </div>
//       </div>

//       <div className="form-group">
//         <label htmlFor="otp">OTP</label>
//         <input
//           type="password"
//           placeholder="Enter OTP"
//           maxLength={4}
//           value={formData.otp}
//           onChange={handleChange}
//           name="otp"
//         />
//       </div>

//       <div className="login-btn">
//         <button onClick={verifyOtp} disabled={loading}>
//           Login
//         </button>
//         <p>
//           Don't have an account? <Link to="/signup">Register Now</Link>
//         </p>
//       </div>

//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default EmpSignIn;

const EmpSignIn = () => {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    otp: "1234",
  });
  const [verificationId, setVerificationId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendOtp = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${baseUrl}/api/mobileNumberVerificationSendOtp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber: formData.mobileNumber, isForLogin: 1 }),
      });
      const data = await response.json();
      if (data.status === 200) {
        setVerificationId(data.result);
        alert("OTP Sent Successfully");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${baseUrl}/api/mobileNumberVerificationSetup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: verificationId, otp: formData.otp }),
      });
      const data = await response.json();
      if (data.status === 200) {
        alert("OTP Verification Successful!");
        if (data.token) {
          Cookies.set("authToken", data.token, { expires: 1 });
          Cookies.set("userId", data.result._id);
          navigate("/employee-page");
        }
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
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
          type="password"
          placeholder="Enter OTP"
          maxLength={4}
          value={formData.otp}
          onChange={handleChange}
          name="otp"
        />
      </div>
      <div className="login-btn">
        <button onClick={verifyOtp} disabled={loading}>Login</button>
        <p>Don't have an account? <Link to="/signup">Register Now</Link></p>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default EmpSignIn;