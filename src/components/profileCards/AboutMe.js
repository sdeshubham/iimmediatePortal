// import React, { useState } from "react";
// import { RxCross2 } from "react-icons/rx";
// import "../../stylesheets/InputFields.css";

// const AboutMe = ({ onClose }) => {
//   const [message, setMessage] = useState("");

//   const handleInputChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onClose();
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-form">
//         <div className="aboutMe-inp">
//           <button className="close-btn" onClick={onClose}>
//             <RxCross2 />
//           </button>
//           <div className="about-inp-box">
//             <div className="abouttext-head">
//               <h3>About Me</h3>
//               <p>
//                 It is the first thing recruiters notice in your profile. Write
//                 and introduce yourself to employers.
//               </p>
//             </div>
//             <form className="about-text-inp" onSubmit={handleSubmit}>

//               <textarea
//                 id="message"
//                 name="message"
//                 rows="4"
//                 cols="50"
//                 value={message}
//                 onChange={handleInputChange}
//               ></textarea>
//             </form>
//             <div className="expInp-btns">
//               <div>
//                 <button className="exp-deleteBtn" type="button">
//                   Delete
//                 </button>
//                 <button className="exp-submitBtn" type="submit">
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;




import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { RxCross2 } from "react-icons/rx";
import "../../stylesheets/InputFields.css";

const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const AboutMe = ({ onClose, fetchUserData }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const authToken = Cookies.get("authToken"); // Get token from cookies

    if (!authToken) {
      setError("Session expired! Please login again.");
      return;
    }

    try {
      const response = await axios.post(
        `${baseUrl}/api/addAboutMe`,
        { about: message },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.data.status === 200) {
        setSuccess("About me updated successfully!");
        onClose(); // Close the popup on success
        fetchUserData(); // Fetch updated user data after submit
      } else {
        setError(response.data.msg || "Failed to update about me.");
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <div className="aboutMe-inp">
          <button className="close-btn" onClick={onClose}>
            <RxCross2 />
          </button>
          <div className="about-inp-box">
            <div className="abouttext-head">
              <h3>About Me</h3>
              <p>
                It is the first thing recruiters notice in your profile. Write
                and introduce yourself to employers.
              </p>
            </div>
            <form className="about-text-inp" onSubmit={handleSubmit}>
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                value={message}
                onChange={handleInputChange}
                placeholder="Write something about yourself"
              />
              <div className="expInp-btns">
                <div>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  {success && <p style={{ color: "green" }}>{success}</p>}
                  <button className="exp-submitBtn" type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
