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

import React from "react";

const EmprSignUp = () => {

  return (
    <>
      <div className="signUpform">
        <div className="formCols">
          <div className="formColOne">
            <div className="signUpform-emp">
              <div className="signUpform-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="fullname" placeholder="Your Full Name" />
              </div>

              <div className="signUpform-group">
                <label htmlFor="mobile">Mobile Number</label>
                <div className="send-otp no-spinner">
                  <input
                    type="number"
                    id="mobile"
                    placeholder="Mobile Number"
                  />
                  <button>Send OTP</button>
                </div>
              </div>
              <div className="signUpform-group">
                <label htmlFor="mobile">OTP</label>
                <div className="send-otp">
                  <input
                    type="password"
                    id="verify-otp"
                    placeholder="Enter OTP"
                  />
                  <button>Verify OTP</button>
                </div>
              </div>
              <div className="signUpform-group">
                <label htmlFor="name">Your Current role</label>
                <input
                  type="text"
                  id="currentrole"
                  placeholder="Your Current Role"
                />
              </div>
            </div>
          </div>
          <div className="formColTwo">
            <div className="signUpform-emp">
              <div className="signUpform-group">
                <label htmlFor="companyname">Company Name</label>
                <input type="text" id="company" placeholder="Company Name" />
              </div>

              <div className="signUpform-group">
                <label htmlFor="email">Email</label>
                <div className="send-otp">
                  <input type="email" id="email" placeholder="Email" />
                </div>
              </div>
              <div className="signUpform-group">
                <label htmlFor="location">Location</label>
                <div className="send-otp">
                  <input type="text" id="location" placeholder="Location" />
                </div>
              </div>
              <div className="signUpform-group">
                <label htmlFor="name">Company Size</label>
                <input
                  type="text"
                  id="companysize"
                  placeholder="Company Size"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="register-btn">
          <div className="register-btns">
            <button>Register Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmprSignUp;
