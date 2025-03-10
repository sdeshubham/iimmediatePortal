// import React from "react";

// const EmprSignUp = () => {
//   return (
//     <>
//       <div className="signUpform">
//         <div className="formCols">
//           <div className="formColOne">
//             <div className="signUpform-emp">
//               <div className="signUpform-group">
//                 <label htmlFor="name">Full Name</label>
//                 <input type="text" id="fullname" placeholder="Your Full Name" />
//               </div>

//               <div className="signUpform-group">
//                 <label htmlFor="mobile">Mobile Number</label>
//                 <div className="send-otp no-spinner">
//                   <input
//                     type="number"
//                     id="mobile"
//                     placeholder="Mobile Number"
//                   />
//                   <button>Send OTP</button>
//                 </div>
//               </div>
//               <div className="signUpform-group">
//                 <label htmlFor="mobile">OTP</label>
//                 <div className="send-otp">
//                   <input
//                     type="password"
//                     id="verify-otp"
//                     placeholder="Enter OTP"
//                   />
//                   <button>Verify OTP</button>
//                 </div>
//               </div>
//               <div className="signUpform-group">
//                 <label htmlFor="name">Your Current role</label>
//                 <input
//                   type="text"
//                   id="currentrole"
//                   placeholder="Your Current Role"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="formColTwo">
//             <div className="signUpform-emp">
//               <div className="signUpform-group">
//                 <label htmlFor="companyname">Company Name</label>
//                 <input type="text" id="company" placeholder="Company Name" />
//               </div>

//               <div className="signUpform-group">
//                 <label htmlFor="email">Email</label>
//                 <div className="send-otp">
//                   <input type="email" id="email" placeholder="Email" />
//                 </div>
//               </div>
//               <div className="signUpform-group">
//                 <label htmlFor="location">Location</label>
//                 <div className="send-otp">
//                   <input type="text" id="location" placeholder="Location" />
//                 </div>
//               </div>
//               <div className="signUpform-group">
//                 <label htmlFor="name">Company Size</label>
//                 <input
//                   type="text"
//                   id="companysize"
//                   placeholder="Company Size"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="register-btn">
//           <div className="register-btns">
//             <button>Register Now</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EmprSignUp;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const EmprSignUp = () => {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    otp: "1234",
    fullname: "",
    currentRole: "",
    companyName: "",
    email: "",
    location: "",
    companySize: "",
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
      const response = await axios.post(`${baseUrl}/employer/mobileNumberVerificationSendOtp`, {
        mobileNumber: formData.mobileNumber,
        isForLogin: 0,
      });

      if (response.data.status === 200) {
        setVerificationId(response.data.result);
        alert("OTP sent successfully!");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${baseUrl}/employer/mobileNumberVerificationSetup`, {
        id: verificationId,
        otp: formData.otp,
      });

      if (response.data.status === 200) {
        alert("Mobile verification successful!");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${baseUrl}/employer/register`, {
        email: formData.email,
        name: formData.fullname,
        contactNumber: formData.mobileNumber,
        designationName: formData.currentRole,
        companyName: formData.companyName,
        location: formData.location,
        companySize: formData.companySize,
      });

      if (response.data.status === 200) {
        alert("User registered successfully!");
        console.log(response.data.result);

        navigate("/signin");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : "Something went wrong");
    } finally {
      setLoading(false);
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
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Your Full Name"
                  value={formData.fullname}
                  onChange={handleChange}
                />
              </div>

              <div className="signUpform-group">
                <label htmlFor="mobile">Mobile Number</label>
                <div className="send-otp no-spinner">
                  <input
                    type="number"
                    id="mobile"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                  />
                  <button type="button" onClick={sendOtp} disabled={loading}>
                    {loading ? "Sending OTP..." : "Send OTP"}
                  </button>
                </div>
              </div>

              <div className="signUpform-group">
                <label htmlFor="verify-otp">OTP</label>
                <div className="send-otp">
                  <input
                    type="password"
                    id="verify-otp"
                    name="otp"
                    placeholder="Enter OTP"
                    value={formData.otp}
                    onChange={handleChange}
                  />
                  <button type="button" onClick={verifyOtp} disabled={loading}>
                    {loading ? "Verifying OTP..." : "Verify OTP"}
                  </button>
                </div>
              </div>

              <div className="signUpform-group">
                <label htmlFor="currentrole">Your Current Role</label>
                <input
                  type="text"
                  id="currentrole"
                  name="currentRole"
                  placeholder="Your Current Role"
                  value={formData.currentRole}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="formColTwo">
            <div className="signUpform-emp">
              <div className="signUpform-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

              <div className="signUpform-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="signUpform-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>

              <div className="signUpform-group">
                <label htmlFor="companysize">Company Size</label>
                <input
                  type="text"
                  id="companysize"
                  name="companySize"
                  placeholder="Company Size"
                  value={formData.companySize}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="register-btn">
          <div className="register-btns">
            <button type="submit" onClick={handleSubmit} >
              {loading ? "Registering..." : "Register Now"}
            </button>
          </div>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </>
  );
};

export default EmprSignUp;
