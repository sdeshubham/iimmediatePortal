// import React, { useState } from "react";
// import "../stylesheets/SignUp.css";
// import signupFromImg from "../images/signupFromImg.png";

// const SignUp = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <>
//       <div className="signUp-Box">
//         <div className="signUp-main">
//           <div className="left-subBox">
//             <div className="signUpleft-box">
//               {isLogin ? (
//                 <>
//                   <div className="signUp-left">
//                     <img src={signupFromImg} alt="" />
//                     <div className="signUp-left-content">
//                       <h3>Find Immediate Joiners for You</h3>
//                       <p className="left-bottomtext">
//                         You will never know everything <br />
//                         But you will Konw more
//                       </p>
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className="signUp-left">
//                     <div className="signUp-left-content">
//                       <img src={signupFromImg} alt="" />
//                       <h3>Let Job Find You</h3>
//                       <p>
//                         You will never know everything <br />
//                         But you will Konw more
//                       </p>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//           <div className="right-box">
//             <div className="right-subBox">
//               <div className="signUp-toggle">
//                 <button
//                   className={isLogin ? "activeBtn signBtn" : ""}
//                   onClick={() => setIsLogin(true)}
//                 >
//                   Employee
//                 </button>
//                 <button
//                   className={!isLogin ? "activeBtn signBtn" : ""}
//                   onClick={() => setIsLogin(false)}
//                 >
//                   Job seeker
//                 </button>
//               </div>
//               {isLogin ? (
//                 <>
//                   <div className="singUp-box">
//                     <h2>Register As a Employee</h2>
//                     <div className="input-form">
//                       <div className="form-empy">
//                         <div className="signUpform-group">
//                           <label htmlFor="mobile">Mobile Number</label>
//                           <div className="outh-otp">
//                             <input
//                               type="number"
//                               id="mobile"
//                               placeholder="Enter your mobile number"
//                             />
//                             <button>Send otp</button>
//                           </div>
//                         </div>
//                         <div className="signUpform-group">
//                           <label htmlFor="mobile">OTP</label>
//                           <input
//                             type="number"
//                             id="otp"
//                             placeholder="Enter OTP"
//                           />
//                         </div>
//                       </div>

//                       <div className="register-btn">
//                         <p>
//                           <input type="radio" placeholder="Register Now" />{" "}
//                           <p>I accept all terms and condition</p>
//                           <button>Register Now</button>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className="singUp-box">
//                     <h2>Register As a Job Seeker</h2>
//                     <div className="input-form">
//                       <div className="form-emp">
//                         <div className="signUpform-group">
//                           <label>Mobile Number</label>
//                           <div className="outh-otp">
//                             <input
//                               type="number"
//                               id="mobile"
//                               placeholder="Enter your mobile number"
//                             />
//                             <button>Send otp</button>
//                           </div>
//                         </div>
//                         <div className="signUpform-group">
//                           <label htmlFor="mobile">OTP</label>
//                           <input
//                             type="number"
//                             id="otp"
//                             placeholder="Enter OTP"
//                           />
//                         </div>
//                       </div>

//                       <div className="register-btn">
//                         <p>
//                           <input type="radio" placeholder="Register Now" />{" "}
//                           <p>I accept all terms and condition</p>
//                           <button>Register Now</button>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;

import React from 'react'

const SignUp = () => {
  return (
    <div>
      
    </div>
  )
}

export default SignUp
