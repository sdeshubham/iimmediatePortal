import React from "react";
import certiLogo from "../../images/defaultImg.png"

const ProfCertiCard = ({ certiImg, certName, certOrg, certIssueDate }) => {
  return (
    <>
      <div className="certif-boxes">
        <div className="certi-boxOne">
          <img src={certiImg || certiLogo} alt="" />
          <div className="certi-box-content">
            <div className="certif-boxTwo">
              <p className="certiName">{certName}</p>
              <p className="certiOrg">{certOrg}</p>
              <p className="certiDate">Issued {" "}{certIssueDate}</p>
            </div>
            <button className="show-cred-btn">Show Credentials</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfCertiCard;
