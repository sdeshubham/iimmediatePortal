import React from "react";

const AboutTeamCard = ({
  teamImg,
  teamName,
  teamRole,
  teamDesc,
  socialMedia,
}) => {
  return (
    <div className="team-card">
      <img
        src={teamImg}
        alt={teamName}
        className="team-img"
      />
      <h3 className="team-name">{teamName}</h3>
      <p className="team-role">{teamRole}</p>
      <p className="team-desc">{teamDesc}</p>
      <div className="team-social-media">
        <a href="#" aria-label="Facebook">
          {socialMedia.facebook}
        </a>
        <a href="#" aria-label="LinkedIn">
          {socialMedia.linkedIn}
        </a>
        <a href="#" aria-label="Instagram">
          {socialMedia.instagram}
        </a>
        <a href="#" aria-label="Twitter">
          {socialMedia.twitter}
        </a>
        <a href="#" aria-label="Call">
          {socialMedia.call}
        </a>
      </div>
    </div>
  );
};

export default AboutTeamCard;
