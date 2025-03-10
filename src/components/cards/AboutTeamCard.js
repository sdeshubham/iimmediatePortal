import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="" aria-label="Facebook">
          {socialMedia.facebook}
        </Link>
        <Link to="" aria-label="LinkedIn">
          {socialMedia.linkedIn}
        </Link>
        <Link to="" aria-label="Instagram">
          {socialMedia.instagram}
        </Link>
        <Link to="" aria-label="Twitter">
          {socialMedia.twitter}
        </Link>
        <Link to="" aria-label="Call">
          {socialMedia.call}
        </Link>
      </div>
    </div>
  );
};

export default AboutTeamCard;
