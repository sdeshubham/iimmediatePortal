// import React, { useState } from "react";
// import "../../components/profileCards/ProfileCards.css";
// import { RxCross2 } from "react-icons/rx";

// import { setCandiProfileData } from "../../components/profileCards/CandiProfileData";

// const AboutMe = () => {
//   const [message, setMessage] = useState("");

//   const handleInputChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setCandiProfileData(message);
//   };

//   return (
//     <>
//       <div className="aboutme-box">
//         <div className="about-card">
//           <button>
//             <RxCross2 />
//           </button>
//           <form onSubmit={handleSubmit}>
//             <textarea
//               id="message"
//               name="message"
//               rows="4"
//               cols="50"
//               value={message}
//               onChange={handleInputChange}
//             ></textarea>
//             <input type="submit" value="submit" />
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutMe;


import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const AboutMe = ({ onClose }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button className="close-btn" onClick={onClose}>
          <RxCross2 />
        </button>
        <form onSubmit={handleSubmit}>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            value={message}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AboutMe;
