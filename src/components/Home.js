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
import experienceData from "./cards/experienceData";
import honelocationIcon from "../images/honelocationIcons.png";

const BASE_URL = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const Home = () => {
  const [activeJoiners, setActiveJoiners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [techStacks, setTechStacks] = useState([]);
  const [statesList, setStatesList] = useState([]);
  const [loadingStates, setLoadingStates] = useState(true);
  const [users, setUsers] = useState([]);
  const [allJoiners, setAllJoiners] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);

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

  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}/withOutLogin/get-state-list?countryCode=IN`)
  //     .then((res) => {
  //       console.log("State List API Response:", res.data);
  //       if (res.data && res.data.data) {
  //         setStatesList(res.data.data);
  //       } else {
  //         setStatesList([]);
  //       }
  //     })
  //     .catch((err) => console.error("Error fetching states list:", err))
  //     .finally(() => setLoadingStates(false));
  // }, []);

  // const handleLocationClick = async (city) => {
  //   const apiUrl = `${BASE_URL}/api/userFilter?location=${encodeURIComponent(
  //     city
  //   )}`;

  //   try {
  //     const response = await fetch(apiUrl);
  //     const data = await response.json();

  //     if (data.status === 200 && data.result.length > 0) {
  //       console.log(`Users in ${city}:`, data.result);
  //     } else {
  //       console.log(`No users found in ${city}`);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //   }
  // };

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

  useEffect(() => {
    fetch(
      "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/api/userFilter"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setUsers(data.result);
        }
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  const filterByExperience = (min, max) => {
    const filteredUsers = users.filter((user) => {
      const exp = user.experienceInStack;
      return max ? exp >= min && exp < max : exp > min;
    });
    console.log(
      `Users with ${min}-${max ? max : "above"} years of experience:`,
      filteredUsers
    );
  };

  const experienceData = [
    { heading: "Fresher", subheading: "1 year experience", min: 1, max: 2 },
    { heading: "Junior", subheading: "2 year experience", min: 2, max: 5 },
    { heading: "Associate", subheading: "2-5 year experience", min: 2, max: 5 },
    {
      heading: "Mid-Level",
      subheading: "5-10 year experience",
      min: 5,
      max: 10,
    },
    {
      heading: "Senior",
      subheading: "10+ year experience",
      min: 10,
      max: null,
    },
  ];

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
              isActive={selectedExperience === item.heading}
              onClick={() => handleExperienceFilter(item.heading)}
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
            <div
              key={index}
              onClick={() => filterByExperience(item.min, item.max)}
            >
              <HuntExperience
                heading={item.heading}
                subheading={item.subheading}
              />
            </div>
          ))}
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

      <HomeAbout />
    </>
  );
};

export default Home;

// import React from "react";
// import "../stylesheets/Home.css";
// import k5Img from "../images/Group 2.png";
// import amazon from "../images/Amazon.png";
// import paytm from "../images/Paytm.png";
// import uber from "../images/Uber.png";
// import adani from "../images/Adani.png";
// import airbnb from "../images/Airbnb.png";
// import spotify from "../images/Spotify.png";
// import ActiveJoinerCard from "./cards/ActiveJoinerCard";
// import activejoinerData from "../components/cards/activeJoinerData";
// import HuntLocationCard from "./cards/HuntLocationCard";
// import locationCardData from "../components/cards/locationCardData";
// import StackCard from "./cards/StackCard";
// import stackData from "./cards/stackData";
// import experienceData from "./cards/experienceData";
// import HuntExperience from "./cards/HuntExperience";
// import HomeAbout from "./cards/HomeAbout";
// import { IoIosSearch } from "react-icons/io";

// const Home = () => {
//   return (
//     <>
//       <div className="home-sec">
//         <div className="home-box">
//           <div className="main-section">
//             <h4>#1 Job Portal</h4>
//             <h1>Your Dream Career Starts here</h1>
//             <p>
//               <span>Job Hunting Made Easy:</span> Get Instant Alerts <br /> For
//               Jobs Matching Your Skills & Innovative Job Finder
//             </p>
//             <form className="home-search">
//               <div className="input-wrapper">
//                 <IoIosSearch className="search-icon" />
//                 <input type="text" placeholder="Job title keywords..." />
//               </div>
//               <button type="submit">Find Now</button>
//             </form>
//             <img src={k5Img} alt="" />
//           </div>
//           <div className="home-second-box">
//             <h5>
//               Brands you Admire and Dream of working with are <span>here!</span>
//             </h5>
//             <div className="main-sec-brands">
//               <img src={amazon} alt="amazon image" />
//               <img src={paytm} alt="paytm image" />
//               <img src={uber} alt="uber image" />
//               <img src={adani} alt="adani image" />
//               <img src={airbnb} alt="airbnb image" />
//               <img src={spotify} alt="spotifyimage" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="avtivejoinerBox">
//         <div className="active-joiners">
//           <div className="active-head">
//             <h2>
//               Active <span>Joiners</span>
//             </h2>
//             <p>(Can join withing 30days)</p>
//           </div>
//           <div className="active-viewmore">
//             <a href="/empfilter">View More</a>
//           </div>
//         </div>
//         <div className="activejoiner-cardbox">
//           {activejoinerData.map((item, index) => (
//             <ActiveJoinerCard
//               key={index}
//               image={item.image}
//               name={item.name}
//               currentPosition={item.currentPosition}
//               salary={item.salary}
//               expYear={item.expYear}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="huntByLocation">
//         <div className="huntHeadBox">
//           <h2>
//             <span>Hunt By</span> Location
//           </h2>
//           <div className="active-viewmore">
//             <a href="/empfilter">View More</a>
//           </div>
//         </div>
//         <div className="huntlocationBox">
//           {locationCardData.map((item, index) => (
//             <HuntLocationCard
//               key={index}
//               honelocationIcons={item.honelocationIcons}
//               locationName={item.locationName}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="huntByLocation">
//         <div className="huntHeadBox">
//           <h2>
//             <span>Hunt By</span> Technology Stack
//           </h2>
//           <div className="active-viewmore">
//             <a href="/empfilter">View More</a>
//           </div>
//         </div>
//         <div className="huntstackBox">
//           {stackData.map((item, index) => (
//             <StackCard
//               key={index}
//               stackImg={item.stackImg}
//               stackName={item.stackName}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="huntByExperience">
//         <div className="experienceHeadBox">
//           <h2>
//             <span>Hunt By</span> Experience
//           </h2>
//         </div>
//         <div className="huntExperiemceBox">
//           {experienceData.map((item, index) => (
//             <HuntExperience
//               key={index}
//               heading={item.heading}
//               subheading={item.subheading}
//             />
//           ))}
//         </div>
//       </div>

//       <HomeAbout />
//     </>
//   );
// };

// export default Home;
