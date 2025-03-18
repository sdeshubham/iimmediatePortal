import React, { useState } from "react";
import "../stylesheets/SignIn.css";
import signInEmp from "../images/signInEmp.png";
import wavinghand from "../images/waving-hand.png";
import EmprSignIn from "./EmprSignIn";
import EmpSignIn from "./EmpSignIn";

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);

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


// import React, { useState } from "react";
// import "../stylesheets/SignIn.css";
// import signInEmp from "../images/signInEmp.png";
// import wavinghand from "../images/waving-hand.png";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";

// const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

// const SignIn = () => {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     mobileNumber: "",
//     otp: "",
//     otpVerified: false,
//     userId: "",
//   });
//   const [employeeSigningUp, setEmployeeSigningUp] = useState(true);

//   const {setUserToken, setUser, setUserType} = useAuth();

//   const navigate = useNavigate();
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const sendOtpEmployee = async () => {
//     if (!formData.mobileNumber) {
//       alert("Please enter a mobile number");
//       return;
//     }

//     setLoading(true);
//     try {
//       let NumberedMobile = Number(formData.mobileNumber);
//       console.log("Sending OTP to:", formData.mobileNumber, typeof NumberedMobile); 

//       const response = await axios.post(
//         `${baseUrl}/api/mobileNumberVerificationSendOtp`,
//         {
//           mobileNumber: NumberedMobile,
//           isForLogin: 1,
//         }
//       );

//       console.log("OTP Send Response:", response.data);
//       if (response.data.status === 200) {
//         alert(response.data.message);
//         sessionStorage.setItem("userId", response.data.result)
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

//   const sendOtpEmployer = async () => {
//     if (!formData.mobileNumber) {
//       alert("Please enter a mobile number");
//       return;
//     }

//     setLoading(true);
//     try {
//       let NumberedMobile = Number(formData.mobileNumber);
//       console.log("Sending OTP to:", formData.mobileNumber, typeof NumberedMobile); 

//       const response = await axios.post(
//         `${baseUrl}/employer/mobileNumberVerificationSendOtp`,
//         {
//           mobileNumber: NumberedMobile,
//           isForLogin: 1,
//         }
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

//   const verifyOtpEmployee = async () => {
//       if (!formData.otp) {
//         alert("Please enter the OTP");
//         return;
//       }
    
//       setLoading(true);
//       try {
//         console.log("Verifying OTP:", formData.otp);

//         const data = new URLSearchParams();

//         data.append("otp", `${formData.otp}`)
//         data.append("id", `${formData.userId}`)

//         const response = await axios.post(`${baseUrl}/api/mobileNumberVerificationSetup`, data)

//         sessionStorage.setItem("userType", "employee")
//         sessionStorage.setItem("userId", formData.userId)
//         setUserToken(response.data.token)
//         setUserType("employee")

//         const userDetails = await axios.post(`${baseUrl}/api/getAllUserDetails`)

//         setUser(userDetails.data.result[0])

//         navigate("/employee")

//       }
//       catch (err) {
//         console.log("error in verifying otp employee", err)
//       }
//       setLoading(false)
//   };

//   const verifyOtpEmployer = async () => {
//     if (!formData.otp) {
//       alert("Please enter the OTP");
//       return;
//     }
//     setLoading(true);
//     try {
//       console.log("Verifying OTP:", formData.otp);

//       const data = new URLSearchParams();

//       data.append("otp", `${formData.otp}`)
//       data.append("id", `${formData.userId}`)

//       const response = await axios.post(`${baseUrl}/employer/mobileNumberVerificationSetup`, data)

//       sessionStorage.setItem("userType", "employer")
//       sessionStorage.setItem("userId", formData.userId)
//       setUserToken(response.data.token)
//       setUserType("employer")

//       const employerDetails = await axios.post(`${baseUrl}/employer/getEmployerAllDetails`)

//       setUser(employerDetails.data.res)

//       navigate("/employer")
//     }
//     catch (err) {
//       console.log("error in verifying otp employee", err)
//     }

//     setLoading(false)
//   } 

//   return (
//     <>
//       <div className="signinBox">
//         <div className="signin-container">
//             <div className="left-box">
//               <div className="signin-left">
//                 <img src={signInEmp} alt="Sign In" />
//                 <h3>
//                   {employeeSigningUp ? "Let's Find the Perfect Job that Fit Your Needs" : "Let's Find The Perfect Candidate For You Meet Your Requirements"}
//                 </h3>
//               </div>
//             </div>

//             <div className="right-form">
//               <div className="right-form-head">
//                 <img src={wavinghand} alt="Hello" className="hello-icon" />
//                 <h2>Welcome back!</h2>
//                 <p>Please login to access your account</p>
//               </div>

//               <div className="signInRight">
//                 <div className="signInForm">
//                   <div className="signIn-toggle">
//                     <button
//                       className={employeeSigningUp ? "active signBtn" : ""}
//                       onClick={() => setEmployeeSigningUp(true)}
//                     >
//                       Employer
//                     </button>
//                     <button
//                       className={!employeeSigningUp ? "active signBtn" : ""}
//                       onClick={() => setEmployeeSigningUp(false)}
//                     >
//                       Employee
//                     </button>
//                   </div>

//                   <div className="form">
//                     <div className="form-group">
//                       <label htmlFor="mobile">Mobile Number</label>
//                       <div className="input-otp">
//                         <input
//                           type="number"
//                           name="mobileNumber"
//                           placeholder="Enter your mobile number"
//                           maxLength={10}
//                           value={formData.mobileNumber}
//                           onChange={handleChange}
//                         />
//                         {employeeSigningUp ? 
//                           <button onClick={sendOtpEmployee}>Send OTP</button>
//                           :
//                           <button onClick={sendOtpEmployer}>Send OTP</button>
//                         }
//                       </div>
//                     </div>

//                     <div className="form-group">
//                       <label htmlFor="otp">OTP</label>
//                       <input
//                         type="password"
//                         name="otp"
//                         placeholder="Enter OTP"
//                         maxLength={4}
//                         value={formData.otp}
//                         onChange={handleChange}
//                       />
//                     </div>

//                     <div className="login-btn">
//                       {employeeSigningUp ? 
//                           <button onClick={verifyOtpEmployee}>Login</button>
//                           :
//                           <button onClick={verifyOtpEmployer}>Login</button>
//                       }
//                       <p>
//                         Don't have an account?{" "}
//                         <Link to="/signup">Register Now</Link>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//         </div>
//       </div>    
//     </>
//   );
// };

// export default SignIn;