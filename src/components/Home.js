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
//           {/* {activejoinerData.map((item, index) => (
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
//           ))} */}
//           <a href="/candidate">
//             <ActiveJoinerCard />
//           </a>
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
import { IoIosSearch } from "react-icons/io";

const Home = () => {
  return (
    <>
      <div className="home-sec">
        <div className="home-box">
          <div className="main-section">
            <h4>#1 Job Portal</h4>
            <h1>Your Dream Career Starts here</h1>
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
        <div className="activejoiner-cardbox">
          {activejoinerData.map((item, index) => (
            <a href="/candidate">
              <ActiveJoinerCard
                key={index}
                image={item.image}
                name={item.name}
                currentPosition={item.currentPosition}
                salary={item.salary}
                expYear={item.expYear}
              />
            </a>  
          ))}
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
          {locationCardData.map((item, index) => (
            <HuntLocationCard
              key={index}
              honelocationIcons={item.honelocationIcons}
              locationName={item.locationName}
            />
          ))}
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
    </>
  );
};

export default Home;









// import React, { useEffect, useState } from "react";
// import "../stylesheets/Home.css";
// import k5Img from "../images/Group 2.png";
// import amazon from "../images/Amazon.png";
// import paytm from "../images/Paytm.png";
// import uber from "../images/Uber.png";
// import adani from "../images/Adani.png";
// import airbnb from "../images/Airbnb.png";
// import spotify from "../images/Spotify.png";
// import ActiveJoinerCard from "./cards/ActiveJoinerCard";
// import { fetchActiveJoiners } from "../services/apiService";
// import HuntLocationCard from "./cards/HuntLocationCard";
// import locationCardData from "../components/cards/locationCardData";
// import StackCard from "./cards/StackCard";
// import stackData from "./cards/stackData";
// import HomeAbout from "./cards/HomeAbout";
// import { IoIosSearch } from "react-icons/io";

// const Home = () => {
//   const [activeJoiners, setActiveJoiners] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getActiveJoiners = async () => {
//       try {
//         setLoading(true);
//         const data = await fetchActiveJoiners();
//         setActiveJoiners(data);
//       } catch (err) {
//         setError(err.toString());
//       } finally {
//         setLoading(false);
//       }
//     };

//     getActiveJoiners();
//   }, []);

//   return (
//     <>
//       <div className="home-sec">
//         <div className="home-box">
//           <div className="main-section">
//             <h4>#1 Job Portal</h4>
//             <h1>Your Dream Career Starts Here</h1>
//             <p>
//               <span>Job Hunting Made Easy:</span> Get Instant Alerts <br /> For Jobs Matching Your Skills & Innovative Job Finder
//             </p>
//             <form className="home-search">
//               <div className="input-wrapper">
//                 <IoIosSearch className="search-icon" />
//                 <input type="text" placeholder="Job title keywords..." />
//               </div>
//               <button type="submit">Find Now</button>
//             </form>
//             <img src={k5Img} alt="Banner" />
//           </div>
//           <div className="home-second-box">
//             <h5>
//               Brands you Admire and Dream of working with are <span>here!</span>
//             </h5>
//             <div className="main-sec-brands">
//               <img src={amazon} alt="Amazon" />
//               <img src={paytm} alt="Paytm" />
//               <img src={uber} alt="Uber" />
//               <img src={adani} alt="Adani" />
//               <img src={airbnb} alt="Airbnb" />
//               <img src={spotify} alt="Spotify" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="activejoinerBox">
//         <div className="active-joiners">
//           <div className="active-head">
//             <h2>
//               Active <span>Joiners</span>
//             </h2>
//             <p>(Can join within 30 days)</p>
//           </div>
//           <div className="active-viewmore">
//             <a href="/empfilter">View More</a>
//           </div>
//         </div>
//         <div className="activejoiner-cardbox">
//           {loading && <p>Loading active joiners...</p>}
//           {error && <p style={{ color: "red" }}>Error: {error}</p>}
//           {!loading && !error && activeJoiners.length > 0 ? (
//             activeJoiners.map((item, index) => (
//               <a href="/candidate" key={index}>
//                 <ActiveJoinerCard
//                   image={item.image || "defaultImage.jpg"}
//                   name={item.name || "Unknown"}
//                   currentPosition={item.currentPosition || "N/A"}
//                   salary={item.salary ? `$${item.salary}` : "Not Disclosed"}
//                   expYear={`${item.expYear || 0} years`}
//                 />
//               </a>
//             ))
//           ) : (
//             <p>No active joiners found</p>
//           )}
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
//             <HuntLocationCard key={index} honelocationIcons={item.honelocationIcons} locationName={item.locationName} />
//           ))}
//         </div>
//       </div>

//       <div className="huntByTechnology">
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
//             <StackCard key={index} stackImg={item.stackImg} stackName={item.stackName} />
//           ))}
//         </div>
//       </div>

//       <HomeAbout />
//     </>
//   );
// };

// export default Home;
