// components/common/Popup.js
import React from "react";
import "../../stylesheets/Popup.css";

const Popup = ({ isVisible, content, onClose }) => {
  if (!isVisible) return null; // If the popup is not visible, render nothing

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="popup-content">
          {content}  {/* Dynamically render content passed as props */}
        </div>
      </div>
    </div>
  );
};

export default Popup;
