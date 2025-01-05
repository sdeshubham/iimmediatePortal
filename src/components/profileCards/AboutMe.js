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
    onClose();
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
              {/* <input type="text" /> */}
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                value={message}
                onChange={handleInputChange}
              ></textarea>
            </form>
            <div className="expInp-btns">
              <div>
                <button className="exp-deleteBtn" type="button">
                  Delete
                </button>
                <button className="exp-submitBtn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
