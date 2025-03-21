import React, { useState } from "react";
import awardLogo from "../../images/defaultImg.png";
import Awads from "../profileCards/Awads";
import { RiEditBoxLine } from "react-icons/ri";

const ProfAwardCard = ({
  awardImgLogo,
  awardName,
  awardIssuedBy,
  awardIssueDate,
  assosiate,
}) => {
  const [showAwads, setShowAwads] = useState(false);

  const toggleAwadsPopup = () => setShowAwads(!showAwads);

  return (
    <>
      {showAwads && <Awads onClose={toggleAwadsPopup} />}
      <div className="award-boxes">
        <div className="awardsBocxNew">
          <img src={awardImgLogo || awardLogo} alt="" />
          <div className="award-boxTwo">
            <p className="awardName">{awardName}</p>
            <div className="award-subbox">
              <p className="issuedBy">Issued by: {awardIssuedBy}</p>
              {" • "}
              <p className="issueDate">{awardIssueDate}</p>
            </div>
            <p className="assosiate">Associated with: {assosiate}</p>
          </div>
        </div>
        <div className="project-editBtn">
          <button>
            <RiEditBoxLine size={20} onClick={toggleAwadsPopup} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfAwardCard;
