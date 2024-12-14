import React from "react";
import aboutGirl from "../../images/homePageGirl.png";

const HomeAbout = () => {
  return (
    <>
      <div className="homeAboutBox">
        <div className="aboutLeftBox">
          <h3>About Us</h3>
          <h1>
            Connecting people to <br />
            better work to create better <br />
            lives
          </h1>
          <p className="leftBoxP1">We help all people get jobs.</p>
          <p className="leftBoxP1">
            We believe the world can work better. With the power of our platform
            and our people, and in partnership with organizations that share our
            mission, we're creating an environment where current and future
            generations can thrive.
          </p>
          <button className="empBtn">Employee</button>
          <button className="jobseekerBtn">Job Seeker</button>
        </div>
        <div className="aboutRightBox">
          <img src={aboutGirl} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
