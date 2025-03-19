import React from "react";
import { useNavigate } from "react-router-dom";
import "../../stylesheets/Home.css";
import emprcompLogo from "../../images/defaultImg.png";

const EmployerHomeCard = ({ id, companyName }) => {
  const navigate = useNavigate();

  const handleViewEmprProfile = () => {
    navigate(`/employer-profile/${id}`);
  };
  

  return (
    <div className="emprCardBox">
      <div
        className="empr-homeCard"
        onClick={handleViewEmprProfile}
        style={{ cursor: "pointer" }}
      >
        <div className="emprhomeCardDetails">
          <img src={emprcompLogo} alt="" height={20} width={20} />
          <h6>{companyName}</h6>
        </div>
      </div>
    </div>
  );
};

export default EmployerHomeCard;
