import React from "react";
import "../stylesheets/Home.css";
import k5Img from "../images/Group 2.png";
import amazon from "../images/Amazon.png";
import paytm from "../images/Paytm.png";
import uber from "../images/Uber.png";
import adani from "../images/Adani.png";
import airbnb from "../images/Airbnb.png";
import spotify from "../images/Spotify.png";

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
      <div className="active-joiners">
        <div className="active-head">
          <h2>
            <span>Active</span> Joiners
          </h2>
          <p>(Can join withing 30days)</p>
        </div>
        <div className="active-viewmore">
          <a href="/">View More</a>
        </div>
      </div>
    </>
  );
};

export default Home;
