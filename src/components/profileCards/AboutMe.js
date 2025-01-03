import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "../../stylesheets/InputFields.css";

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
        <div className="abouttext-head">
          <h4>About Me</h4>
          <p>
            It is the first thing recruiters notice in your profile. Write and
            introduce yourself to employers.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            value={message}
            onChange={handleInputChange}
          ></textarea>
          <div className="details-submit-btn">
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutMe;
