import React from "react";

const ProfAwardCard = ({
  awardImgLogo,
  awardName,
  awardIssuedBy,
  awardIssueDate,
  assosiate,
}) => {
  return (
    <>
      <div className="award-boxes">
        <img src={awardImgLogo} alt="" />
        <div className="award-boxTwo">
          <p className="awardName">{awardName}</p>
          <div className="award-subbox">
            <p className="issuedBy">Issued by {awardIssuedBy}</p>{" • "}
            <p className="issueDate">{awardIssueDate}</p>
          </div>
          <p className="assosiate">Associated with {assosiate}</p>
        </div>
      </div>
    </>
  );
};

export default ProfAwardCard;
