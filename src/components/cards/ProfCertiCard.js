import React, { useState } from "react";
import certiLogo from "../../images/defaultImg.png";
import LicensCertificates from "../profileCards/LicensCertficates";
import { RiEditBoxLine } from "react-icons/ri";

const ProfCertiCard = ({ certiImg, certName, certOrg, certIssueDate }) => {
  const [showLicensCertificates, setShowLicensCertificates] = useState(false);

  const toggleLicensCertificatesPopup = () =>
    setShowLicensCertificates(!showLicensCertificates);

  return (
    <>
      {showLicensCertificates && (
        <LicensCertificates onClose={toggleLicensCertificatesPopup} />
      )}
      <div className="certif-boxes">
        <div className="certi-boxOne">
          <img src={certiImg || certiLogo} alt="" />
          <div className="certi-box-content">
            <div className="certif-boxTwo">
              <p className="certiName">{certName}</p>
              <p className="certiOrg">{certOrg}</p>
              <p className="certiDate">Issued {certIssueDate}</p>
            </div>
            <button className="show-cred-btn">Show Credentials</button>
          </div>
          <div className="project-editBtn">
            <button>
              <RiEditBoxLine
                size={20}
                onClick={toggleLicensCertificatesPopup}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfCertiCard;
