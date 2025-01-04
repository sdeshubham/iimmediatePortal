import React from "react";
import "../stylesheets/Home.css";
import k5Img from "../images/Group 2.png";
import amazon from "../images/Amazon.png";
import paytm from "../images/Paytm.png";
import uber from "../images/Uber.png";
import adani from "../images/Adani.png";
import airbnb from "../images/Airbnb.png";
import spotify from "../images/Spotify.png";
import ActiveJoinerCard from "./cards/ActiveJoinerCard";
import activejoinerData from "../components/cards/activeJoinerData";
import HuntLocationCard from "./cards/HuntLocationCard";
import locationCardData from "../components/cards/locationCardData";
import StackCard from "./cards/StackCard";
import stackData from "./cards/stackData";
import experienceData from "./cards/experienceData";
import HuntExperience from "./cards/HuntExperience";
import HomeAbout from "./cards/HomeAbout";
import BottomJoin from "./cards/BottomJoin";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-sec">
        <div className="home-box">
          <div className="main-section">
            <h4>#1 Job Portal</h4>
            <h1>Your Dream Career Starts here</h1>
            <p>
              Job Hunting Made Easy: Get Instant Alerts For Jobs Matching Your
              Skills & Innovative Job Finder
            </p>
            <form className="home-search">
              <input type="text" placeholder="Job title keywords..." />
              <button type="submit">Find Now</button>
            </form>
            <img src={k5Img} alt="" />
          </div>
          <div className="home-second-box">
            <h5>
              Brands you Admire and Dream of working with are <span>here!</span>
            </h5>
            <div className="main-sec-brands">
              <img src={amazon} alt="amazon image" />
              <img src={paytm} alt="paytm image" />
              <img src={uber} alt="uber image" />
              <img src={adani} alt="adani image" />
              <img src={airbnb} alt="airbnb image" />
              <img src={spotify} alt="spotifyimage" />
            </div>
          </div>
        </div>
      </div>
      <div className="avtivejoinerBox">
        <div className="active-joiners">
          <div className="active-head">
            <h2>
              Active <span>Joiners</span>
            </h2>
            <p>(Can join withing 30days)</p>
          </div>
          <div className="active-viewmore">
            <a href="/empfilter">View More</a>
          </div>
        </div>
        {/* <div className="activejoiner-cardbox">
          {activejoinerData.map((item, index) => (
            <ActiveJoinerCard
              key={index}
              image={item.image}
              name={item.name}
              role={item.role}
              salary={item.salary}
              experience={item.experience}
            />
          ))}
        </div> */}
        <a href="/candidate">
          <div className="activejoiner-cardbox">
            {activejoinerData.map((item, index) => (
              <ActiveJoinerCard
                key={index}
                image={item.image}
                name={item.name}
                role={item.role}
                salary={item.salary}
                experience={item.experience}
              />
            ))}
          </div>
        </a>
      </div>
      <div className="huntByLocation">
        <div className="huntHeadBox">
          <h2>
            <span>Hunt By</span> Location
          </h2>
          <div className="active-viewmore">
            <a href="/empfilter">View More</a>
          </div>
        </div>
        <div className="huntlocationBox">
          {locationCardData.map((item, index) => (
            <HuntLocationCard key={index} locationName={item.locationName} />
          ))}
        </div>
      </div>

      <div className="huntByLocation">
        <div className="huntHeadBox">
          <h2>
            <span>Hunt By</span> Technology Stack
          </h2>
          <div className="active-viewmore">
            <Link to="/empfilter">View More</Link>
          </div>
        </div>
        <div className="huntstackBox">
          {stackData.map((item, index) => (
            <StackCard
              key={index}
              stackImg={item.stackImg}
              stackName={item.stackName}
            />
          ))}
        </div>
      </div>

      <div className="huntByExperience">
        <div className="experienceHeadBox">
          <h2>
            <span>Hunt By</span> Experience
          </h2>
        </div>
        <div className="huntExperiemceBox">
          {experienceData.map((item, index) => (
            <HuntExperience
              key={index}
              heading={item.heading}
              subheading={item.subheading}
            />
          ))}
        </div>
      </div>

      <HomeAbout />
      {/* <BottomJoin /> */}
    </>
  );
};

export default Home;
