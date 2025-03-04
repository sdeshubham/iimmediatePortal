// import React, { useState } from "react";
// import "../stylesheets/ContactUs.css";
// import { IoMdHome } from "react-icons/io";
// import { TbPhoneCall } from "react-icons/tb";
// import { IoIosMail } from "react-icons/io";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

// const ContactUs = () => {
//   const [inputData, setInputData] = useState({
//     cname: "",
//     cemail: "",
//     cphoneNumber: "",
//     cmessage: "",
//   });

//   const handleChange = (e) => {
//     setInputData({ ...inputData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formattedData = {
//       name: inputData.cname,
//       emailId: inputData.cemail,
//       contactNumber: inputData.cphoneNumber,
//       feedback: inputData.cmessage,
//     };

//     console.log("Submitting data:", formattedData);

//     try {
//       const response = await axios.post(
//         `${baseUrl}/withOutLogin/contacUs`,
//         formattedData
//       );
//       console.log("Success:", response.data);
//     } catch (error) {
//       console.error(
//         "Error submitting form:",
//         error.response?.data || error.message
//       );
//     }
//   };

//   return (
//     <div className="contactBox">
//       <div className="contactContainer">
//         <div className="contact-head">
//           <h1>Contact Us</h1>
//           <div className="contactTop">
//             <Link to="/home">Home</Link> {"/"}
//             <Link to="/contactus">Contact us</Link>
//           </div>
//         </div>
//       </div>
//       <div className="contact-content">
//         <div className="contact-left">
//           <h2>Get In Touch With Us</h2>
//           <p className="ContactleftContent">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit...
//           </p>
//           <div className="contact-details">
//             <span>
//               <IoMdHome />
//             </span>
//             <div className="contact-detail">
//               <h3>Our Location</h3>
//               <p>Shop No 2, Veer Sawarkar Nagar Thane west, 400606</p>
//             </div>
//           </div>
//           <div className="contact-details">
//             <span>
//               <TbPhoneCall />
//             </span>
//             <div className="contact-detail">
//               <h3>Contact Number</h3>
//               <p>+91 77383 11925</p>
//               <p>+91 9717569519</p>
//             </div>
//           </div>
//           <div className="contact-details">
//             <span>
//               <IoIosMail />
//             </span>
//             <div className="contact-detail">
//               <h3>Email Address</h3>
//               <p>info@sovtechnologies.com</p>
//             </div>
//           </div>
//         </div>
//         <div className="contact-right">
//           <div className="contact-form">
//             <form className="contactForm-input" onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 name="cname"
//                 value={inputData.cname}
//                 onChange={handleChange}
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 name="cemail"
//                 value={inputData.cemail}
//                 onChange={handleChange}
//               />
//               <input
//                 type="number"
//                 placeholder="Your Phone"
//                 name="cphoneNumber"
//                 value={inputData.cphoneNumber}
//                 onChange={handleChange}
//               />
//               <input
//                 type="text"
//                 placeholder="Your Message"
//                 name="cmessage"
//                 value={inputData.cmessage}
//                 onChange={handleChange}
//               />
//               <button type="submit">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="messgPopup">
//         <div className="mesgBox">
//           <h3>Message sent successfully!</h3>
//           <p>We will connect with you very soon</p>
//         </div>
//         <div className="error-mesgBox">
//           <h3>Message failed!</h3>
//           <p>Kindly fill all the details...</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React, { useState } from "react";
import "../stylesheets/ContactUs.css";
import { IoMdHome } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const ContactUs = () => {
  const [inputData, setInputData] = useState({
    cname: "",
    cemail: "",
    cphoneNumber: "",
    cmessage: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      name: inputData.cname,
      emailId: inputData.cemail,
      contactNumber: inputData.cphoneNumber,
      feedback: inputData.cmessage,
    };

    try {
      const response = await axios.post(
        `${baseUrl}/withOutLogin/contacUs`,
        formattedData
      );
      console.log("Success:", response.data);

      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);

      setInputData({
        cname: "",
        cemail: "",
        cphoneNumber: "",
        cmessage: "",
      });
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="contactBox">
      <div className="contactContainer">
        <div className="contact-head">
          <h1>Contact Us</h1>
          <div className="contactTop">
            <Link to="/home">Home</Link> {"/"}
            <Link to="/contactus">Contact us</Link>
          </div>
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-left">
          <h2>Get In Touch With Us</h2>
          <p className="ContactleftContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
          <div className="contact-details">
            <span>
              <IoMdHome />
            </span>
            <div className="contact-detail">
              <h3>Our Location</h3>
              <p>Shop No 2, Veer Sawarkar Nagar Thane west, 400606</p>
            </div>
          </div>
          <div className="contact-details">
            <span>
              <TbPhoneCall />
            </span>
            <div className="contact-detail">
              <h3>Contact Number</h3>
              <p>+91 77383 11925</p>
              <p>+91 9717569519</p>
            </div>
          </div>
          <div className="contact-details">
            <span>
              <IoIosMail />
            </span>
            <div className="contact-detail">
              <h3>Email Address</h3>
              <p>info@sovtechnologies.com</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-form">
            <form className="contactForm-input" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                name="cname"
                value={inputData.cname}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                name="cemail"
                value={inputData.cemail}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                placeholder="Your Phone"
                name="cphoneNumber"
                value={inputData.cphoneNumber}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Your Message"
                name="cmessage"
                value={inputData.cmessage}
                onChange={handleChange}
                required
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="messgPopup">
          <div className="mesgBox">
            <h3>Message sent successfully!</h3>
            <p>We will connect with you very soon</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
