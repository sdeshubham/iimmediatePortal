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
//             <a href="/candidate">
//               <ActiveJoinerCard
//                 key={index}
//                 image={item.image}
//                 name={item.name}
//                 currentPosition={item.currentPosition}
//                 salary={item.salary}
//                 expYear={item.expYear}
//               />
//             </a>
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

const BASE_URL = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

const Home = () => {
  const [activeJoiners, setActiveJoiners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [techStacks, setTechStacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/withOutLogin/active-limited-joiner`)
      .then((res) => {
        console.log("API Response:", res.data);
        if (res.data && res.data.userData) {
          setActiveJoiners(res.data.userData); // API response ko sahi se parse kiya
        } else {
          setActiveJoiners([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching active joiners:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}/withOutLogin/tech-stack-list`)
  //     .then((res) => {
  //       console.log("Tech Stack API Response:", res.data);

  //       if (res.data && res.data.result) {
  //         setTechStacks(res.data.result);
  //       } else {
  //         setTechStacks([]);
  //       }
  //     })
  //     .catch((err) => console.error("Error fetching tech stacks:", err))
  //     .finally(() => setLoading(false)); // Stop loading
  // }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/withOutLogin/tech-stack-list`)
      .then((res) => {
        console.log("Tech Stack API Response:", res.data.result); // Check API Response

        if (res.data && res.data.result) {
          setTechStacks(res.data.result);
        } else {
          setTechStacks([]);
        }
      })
      .catch((err) => console.error("Error fetching tech stacks:", err));
  }, []);

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

      {/* Active Joiners Section */}
      <div className="avtivejoinerBox">
        <div className="active-joiners">
          <div className="active-head">
            <h2>
              Active <span>Joiners</span>
            </h2>
            <p>(Can join within 30 days)</p>
          </div>
          <div className="active-viewmore">
            <a href="/empfilter">View More</a>
          </div>
        </div>

        <div className="activejoiner-cardbox">
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
        </div>
      </div>

      {/* Hunt By Location Section */}
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
            <HuntLocationCard
              key={index}
              honelocationIcons={item.honelocationIcons}
              locationName={item.locationName}
            />
          ))}
        </div>
      </div>

      {/* Hunt By Technology Stack */}
      <div className="huntByLocation">
        <div className="huntHeadBox">
          <h2>
            <span>Hunt By</span> Technology Stack
          </h2>
          <div className="active-viewmore">
            <a href="/empfilter">View More</a>
          </div>
        </div>
        {/* <div className="huntstackBox">
          {loading ? (
            <p>Loading tech stacks...</p>
          ) : techStacks.length > 0 ? (
            <div className="huntstackBox">
              {techStacks.map((item, index) => (
                <StackCard
                  key={index}
                  techStacklogo={item.techStacklogo}
                  tecStackName={item.tecStackName}
                />
              ))}
            </div>
          ) : (
            <p>No tech stacks found</p>
          )}
        </div> */}
        <div className="huntstackBox">
          {loading ? (
            <p>Loading tech stacks...</p>
          ) : techStacks.length > 0 ? (
            techStacks
              .slice(0, 12)
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

      {/* Hunt By Experience Section */}
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
//             <a href="/candidate">
//               <ActiveJoinerCard
//                 key={index}
//                 image={item.image}
//                 name={item.name}
//                 currentPosition={item.currentPosition}
//                 salary={item.salary}
//                 expYear={item.expYear}
//               />
//             </a>
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

// ________------------________------__________-------__________-------_______
