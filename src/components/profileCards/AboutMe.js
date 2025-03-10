import React, { useState } from "react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import "../../stylesheets/InputFields.css";

import { useAuth } from "../AuthContext";

const baseURL = 'https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/api'


const AboutMe = ({ onClose, setAboutDataObject, aboutText }) => {
  const [message, setMessage] = useState("");

  const { user } = useAuth();

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (aboutText === "" || aboutText === null || aboutText === undefined) {
      const response = await axios.post(`${baseURL}/addAboutMe`, 
        {
          "about": message
        },
        {
        headers: {
          Authorization: `Bearer ${user.token}`, // Passing the token
        },
      })
      setAboutDataObject({aboutText:message})
      console.log('inside about me',response.data.result.about)
    }
    else {
      const response = await axios.post(`${baseURL}/editAboutMe`, 
        {
          "about": message
        },
        {
        headers: {
          Authorization: `Bearer ${user.token}`, // Passing the token
        },
      })
      setAboutDataObject({aboutText:message})
      console.log('inside about me',response.data.result.about)
    }
    

    
    onClose();
  };

  const handleDelete = async () => {
    axios.post(`${baseURL}/deleteAboutMe`,{
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
    setAboutDataObject({aboutText:""})
  }

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
              <div className="expInp-btns">
                <div>
                  <button className="exp-deleteBtn" type="button" onClick={handleDelete}>
                    Delete
                  </button>
                  <button className="exp-submitBtn" type="submit">
                    Submit
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
