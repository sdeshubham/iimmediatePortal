import React, { useEffect, useState } from "react";
import axios from "axios";
import "../stylesheets/Home.css";
import k5Img from "../images/Group 2.png";
import amazon from "../images/Amazon.png";
import paytm from "../images/Paytm.png";
import uber from "../images/Uber.png";
import adani from "../images/Adani.png";
import airbnb from "../images/Airbnb.png";
import spotify from "../images/Spotify.png";
import ActiveJoinerCard from "./cards/ActiveJoinerCard";
import HuntLocationCard from "./cards/HuntLocationCard";
import StackCard from "./cards/StackCard";
import HuntExperience from "./cards/HuntExperience";
import HomeAbout from "./cards/HomeAbout";
import { IoIosSearch } from "react-icons/io";
import locationCardData from "../components/cards/locationCardData";
import stackData from "./cards/stackData";
import experienceData from "./cards/experienceData";
import honelocationIcon from "../images/honelocationIcons.png";

const BASE_URL = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const Home = () => {
  const [activeJoiners, setActiveJoiners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [techStacks, setTechStacks] = useState([]);
  const [statesList, setStatesList] = useState([]);
  const [loadingStates, setLoadingStates] = useState(true);

  const [allJoiners, setAllJoiners] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/withOutLogin/active-limited-joiner`)
      .then((res) => {
        console.log("API Response:", res.data);
        if (res.data && res.data.userData) {
          setActiveJoiners(res.data.userData);
        } else {
          setActiveJoiners([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching active joiners:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/withOutLogin/tech-stack-list`)
      .then((res) => {
        console.log("Tech Stack API Response:", res.data.result);

        if (res.data && res.data.result) {
          setTechStacks(res.data.result);
        } else {
          setTechStacks([]);
        }
      })
      .catch((err) => console.error("Error fetching tech stacks:", err));
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/withOutLogin/get-state-list?countryCode=IN`)
      .then((res) => {
        console.log("State List API Response:", res.data);
        if (res.data && res.data.data) {
          setStatesList(res.data.data);
        } else {
          setStatesList([]);
        }
      })
      .catch((err) => console.error("Error fetching states list:", err))
      .finally(() => setLoadingStates(false));
  }, []);

  const handleViewMore = () => {
    setLoadingMore(true);
    axios
      .get(`${BASE_URL}/withOutLogin/all-active-joiners`)
      .then((res) => {
        console.log("All Joiners API Response:", res.data);
        if (res.data && res.data.userData) {
          setAllJoiners(res.data.userData);
        } else {
          setAllJoiners([]);
        }
      })
      .catch((err) => console.error("Error fetching joiners:", err))
      .finally(() => setLoadingMore(false));
  };

  const handleExperienceFilter = (expCategory) => {
    setSelectedExperience(expCategory);
  
    axios
      .get(`${BASE_URL}/api/userFilter`)
      .then((res) => {
        console.log("API Response:", res.data);
        if (res.data && res.data.result) {
          console.log("Full Users Data:", res.data.result);
          
          const filteredData = res.data.result.filter((user) => {
            console.log("User Experience:", user.experienceInStack);
            const experience = user.experienceInStack || 0;
            switch (expCategory) {
              case "Fresher":
                return experience < 1;
              case "Junior":
                return experience < 2;
              case "Associate":
                return experience >= 2 && experience <= 5;
              case "Mid-Level":
                return experience > 5 && experience <= 10;
              case "Senior":
                return experience >= 10;
              default:
                return true;
            }
          });
  
          console.log("Filtered Data:", filteredData);
          setActiveJoiners(filteredData);
        }
      })
      .catch((err) => console.error("Error fetching filtered joiners:", err));
  };
  
  return (
    <>
      <div className="home-sec">
        <div className="home-box">
          <div className="main-section">
            <h4>#1 Job Portal</h4>
            <h1>Your Dream Career Starts Here</h1>
            <p>
              <span>Job Hunting Made Easy:</span> Get Instant Alerts <br /> For
              Jobs Matching Your Skills & Innovative Job Finder
            </p>
            <form className="home-search">
              <div className="input-wrapper">
                <IoIosSearch className="search-icon" />
                <input type="text" placeholder="Job title keywords..." />
              </div>
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
              <img src={spotify} alt="spotify image" />
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
            <p>(Can join within 30 days)</p>
          </div>
          {/* <div className="active-viewmore">
            <a href="/empfilter">View More</a>
          </div> */}
          <div className="active-viewmore">
            <a
              href="/empfilter"
              onClick={handleViewMore}
              disabled={loadingMore}
            >
              {loadingMore ? "Loading..." : "View More"}
            </a>
          </div>
        </div>

        {/* <div className="activejoiner-cardbox">
          {activeJoiners && activeJoiners.length > 0 ? (
            activeJoiners.map((item) => (
              <a href="/candidate" key={item._id}>
                <ActiveJoinerCard
                  image={item.image ? item.image : "profile.png"}
                  name={item.name ? item.name : "Name NA"}
                  currentPosition={
                    item.currentPosition
                      ? item.currentPosition
                      : "Not Specified"
                  }
                  salary={item.salary}
                  expYear={item.expYear}
                />
              </a>
            ))
          ) : (
            <p>No active joiners available</p>
          )}
        </div> */}

        <div className="activejoiner-cardbox">
          {activeJoiners && activeJoiners.length > 0 ? (
            [...activeJoiners, ...allJoiners].map((item) => (
              <a href="/candidate" key={item._id}>
                <ActiveJoinerCard
                  image={item.image ? item.image : "profile.png"}
                  name={item.name ? item.name : "Name NA"}
                  currentPosition={
                    item.currentPosition
                      ? item.currentPosition
                      : "Not Specified"
                  }
                  salary={item.salary}
                  expYear={item.expYear}
                />
              </a>
            ))
          ) : (
            <p>No active joiners available</p>
          )}
        </div>
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
          {loadingStates ? (
            <p>Loading locations...</p>
          ) : statesList.length > 0 ? (
            statesList
              .slice(0, 12)
              .map((item, index) => (
                <HuntLocationCard
                  key={index}
                  honelocationIcons={honelocationIcon}
                  name={item.name}
                />
              ))
          ) : (
            <p>No locations found</p>
          )}
        </div>
      </div>

      <div className="huntByLocation">
        <div className="huntHeadBox">
          <h2>
            <span>Hunt By</span> Technology Stack
          </h2>
          <div className="active-viewmore">
            <a href="/empfilter">View More</a>
          </div>
        </div>
        <div className="huntstackBox">
          {loading ? (
            <p>Loading tech stacks...</p>
          ) : techStacks.length > 0 ? (
            techStacks
              .slice(0, 10)
              .map((item, index) => (
                <StackCard
                  key={index}
                  techStacklogo={item.techStacklogo}
                  tecStackName={item.tecStackName}
                />
              ))
          ) : (
            <p>No tech stacks found</p>
          )}
        </div>
      </div>

      {/* <div className="huntByExperience">
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
      </div> */}
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
              isActive={selectedExperience === item.heading} // Active State Check
              onClick={() => handleExperienceFilter(item.heading)} // Click Par Filter Apply
            />
          ))}
        </div>
      </div>

      <HomeAbout />
    </>
  );
};

export default Home;