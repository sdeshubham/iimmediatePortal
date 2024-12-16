import React from "react";
import AboutTeamCard from "./AboutTeamCard";
import ourTeamData from "./ourTeamData";

const OurTeam = () => {
  return (
    <>
      <div className="our-team-container">
        <div className="team-members">
          {ourTeamData.map((item, index) => (
            <AboutTeamCard
              key={index}
              teamImg={item.teamImg}
              teamName={item.teamName}
              teamRole={item.teamRole}
              teamDesc={item.teamDesc}
              socialMedia={item.socialMedia}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurTeam;
