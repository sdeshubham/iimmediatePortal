import React from "react";
import "../stylesheets/AboutUs.css";
import aboutOfferImg from "../images/aboutOfferImg.png";
import OurTeam from "./cards/OurTeam";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs">
        <div className="aboutus-top">
          <div className="aboutBox">
            <h1>About Us</h1>
            <div className="aboutTop">
              <Link to="/home">Home</Link> {" / "}
              <Link to="/aboutus">About us</Link>
            </div>
          </div>
        </div>
        <div className="aboutContent">
          <div className="aboutContentOne">
            <h2>About Our Company</h2>
            <p>
              We provide inventive technology solutions for your most
              challenging project management and supply chain problems. And we
              do it with an intimate knowledge of the Oracle enterprise products
              that we helped pioneer along with considerable expertise in all
              the industries we serve.Back in 2007, a group of thought leaders
              who architected Oracle’s Supply Chain and Primavera products
              founded Gaea. Since then, we have helped client after client
              successfully deploy enterprise applications all over the world.
              We’ve implemented solutions for more than 100 clients worldwide,
              and our clients manage more than $10-billion in capital projects
              using our solutions. Simply put, we want to build and implement
              the best software solutions possible, and deliver the best ROI
              possible.
            </p>
          </div>
          <div className="aboutContentTwo">
            <div className="contentTwoBox">
              <div className="contentTwoBox-left">
                <img src={aboutOfferImg} alt="aboutOfferImg" />
              </div>
              <div className="contentTwoBox-right">
                <h2>What We Offer?</h2>
                <p>
                  Aenean sollicituin, lorem quis bibendum auctor nisi elit
                  consequat ipsum sagittis sem nibh id elit. Duis sed odio sit
                  amet nibh vulputate cursus a sit amet maurisorbi accumsan
                  ipsum velit. Nam nec tellus a odio tincidunt auctora ornare
                  odio. Aenean sollicituin, lorem quis bibendum auctor nisi elit
                  consequat ipsum sagittis sem nibh id elit. Duis sed odio sit
                  amet nibh vulputate cursus a sit amet maurisorbi accumsan
                  ipsum velit. Nam nec tellus a odio tincidunt auctora ornare
                  odio.
                </p>
              </div>
            </div>
          </div>
          <div className="aboutContentThree">
            <h2>Meet Our Team</h2>
            <p>
              Our team is dedicated to connecting job seekers with employers,
              offering seamless experiences, innovative solutions, and
              exceptional support for both candidates and businesses.
            </p>
          </div>
        </div>
        <OurTeam />
      </div>
    </>
  );
};

export default AboutUs;
