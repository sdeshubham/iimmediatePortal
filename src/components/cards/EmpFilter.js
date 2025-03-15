// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../../stylesheets/EmpFilter.css";
// import SalaryFilterCard from "./SalaryFilterCard";
// import SelectedProfCard from "../profileCards/SelectedProfCard";
// import { TbMinusVertical } from "react-icons/tb";
// import { FaAngleDown } from "react-icons/fa6";
// import { GoArrowLeft, GoArrowRight } from "react-icons/go";

// const EmpFilter = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [profiles, setProfiles] = useState([]);
//   const [filteredProfiles, setFilteredProfiles] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filters, setFilters] = useState({
//     jobType: "",
//     designation: "",
//     location: "",
//   });

//   const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

//   const cardsPerPage = 12;
//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//   const currentCards = filteredProfiles.slice(
//     indexOfFirstCard,
//     indexOfLastCard
//   );

//   const handleNextClick = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePreviousClick = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   useEffect(() => {
//     const fetchProfiles = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(`${baseUrl}/api/userFilter`);
//         if (response.data.status === 200) {
//           setProfiles(response.data.result);
//           setFilteredProfiles(response.data.result);
//         } else {
//           setError("Failed to fetch data");
//         }
//       } catch (err) {
//         setError("Error fetching profile data");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProfiles();
//   }, []);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
//   };

//   useEffect(() => {
//     let filtered = profiles;
//     if (filters.jobType) {
//       filtered = filtered.filter((profile) =>
//         profile.jobType?.toLowerCase().includes(filters.jobType.toLowerCase())
//       );
//     }
//     if (filters.designation) {
//       filtered = filtered.filter((profile) => {
//         console.log("Checking Profile:", profile.currentPosition);
//         return profile.currentPosition
//           ?.toLowerCase()
//           .includes(filters.designation.toLowerCase());
//       });
//     }
//     if (filters.location) {
//       filtered = filtered.filter((profile) =>
//         profile.location?.toLowerCase().includes(filters.location.toLowerCase())
//       );
//     }
//     setFilteredProfiles(filtered);
//   }, [filters, profiles]);

//   return (
//     <>
//       <div className="emp-filterBox">
//         <div className="filter-container">
//           <div className="sidebar">
//             <div className="sidebar-boxOne">
//               <div className="sidbar-filter-head">
//                 <p className="sidebar-heading">Filter</p>
//                 <button>Reset</button>
//               </div>
//               <div className="employment-filter">
//                 <p className="sidebar-heading">Work mode</p>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Work from office</p>
//                 </div>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Remote</p>
//                 </div>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Hybrid</p>
//                 </div>
//               </div>
//               <div className="salary-range">
//                 <p className="sidebar-heading">Salary Range</p>
//                 <SalaryFilterCard />
//               </div>
//               <div className="employment-filter">
//                 <p className="sidebar-heading">Experience Level</p>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Fresher (1 year experience)</p>
//                 </div>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Junior (2 year experience)</p>
//                 </div>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Assosiate (2-5 year experience)</p>
//                 </div>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Mid Level (5-10 year experience)</p>
//                 </div>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Senior (10+ year experience)</p>
//                 </div>
//               </div>
//             </div>
//             <div className="sidebar-boxTwo">
//               <div className="employment-filter">
//                 <p className="sidebar-heading">Active Joiner</p>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Within 7 Days</p>
//                 </div>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>within 15 Days</p>
//                 </div>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Within 30 Days</p>
//                 </div>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Within 45 Days</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="filter-cards">
//             <div className="filter-top">
//               <div className="top-filters">
//                 <div className="input-with-icon">
//                   <input
//                     type="text"
//                     name="jobType"
//                     placeholder="Job type"
//                     value={filters.jobType}
//                     onChange={handleFilterChange}
//                   />
//                 </div>
//                 <div className="filter-topverti-icon">
//                   <TbMinusVertical size={30} color="#ddd" />
//                 </div>
//                 <div className="input-with-icon">
//                   <input
//                     type="text"
//                     name="designation"
//                     placeholder="Keyword / Designation"
//                     value={filters.designation}
//                     onChange={handleFilterChange}
//                   />
//                 </div>
//                 <div className="filter-topverti-icon">
//                   <TbMinusVertical size={30} color="#ddd" />
//                 </div>
//                 <div className="input-with-icon">
//                   <input
//                     type="text"
//                     name="location"
//                     placeholder="Enter location"
//                     value={filters.location}
//                     onChange={handleFilterChange}
//                   />
//                 </div>
//               </div>
//               <button className="filter-search-btn">Search</button>
//             </div>

//             <div className="topfilt-details">
//               <p>{profiles.length} Frontend Developer Candidates</p>
//               <a href="#">Send me jobs like these</a>
//               <p>
//                 <span>Sort by:</span> Recommended <FaAngleDown />
//               </p>
//             </div>
//             <div className="all-cards">
//               {isLoading ? (
//                 <p>Loading...</p>
//               ) : error ? (
//                 <p>{error}</p>
//               ) : (
//                 currentCards.map((profile) => (
//                   <SelectedProfCard
//                     key={profile._id}
//                     id={profile._id}
//                     selectprof={
//                       profile.image ||
//                       "https://img.freepik.com/free-photo/asian-woman-posing-looking-camera_23-2148255359.jpg?ga=GA1.1.1365218698.1716962795&semt=ais_hybrid"
//                     }
//                     selProfname={profile.name || "Tony Stark"}
//                     role={profile.currentPosition || "Software Engineer"}
//                     companyName={profile.currentCompanyName || "Tech Corp"}
//                     location={profile.location || "Mumbai"}
//                     noticeday={profile.noticePeriod || 30}
//                     skillOne={profile.skillName?.[0] || "JavaScript"}
//                     skillTwo={profile.skillName?.[1] || "React"}
//                     skillThree={profile.skillName?.[2] || "Node.js"}
//                   />
//                 ))
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="nextpage-btns">
//           <div className="filtPageBtns">
//             <button
//               className="previousfiltBtn"
//               onClick={handlePreviousClick}
//               disabled={currentPage === 1}
//             >
//               <GoArrowLeft
//                 size={22}
//                 color="#ea4232"
//                 className="nextIconBottom"
//               />{" "}
//               Previous
//             </button>

//             <button className="currentpagefiltBtn">{currentPage}</button>

//             <button className="nextfiltBtn" onClick={handleNextClick}>
//               Next{" "}
//               <GoArrowRight
//                 size={22}
//                 color="#ea4232"
//                 className="previewIconBottom"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default EmpFilter;
// _______________-----_________----_______-----________-----______-----______-----_____-----______-----

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../../stylesheets/EmpFilter.css";
// import SalaryFilterCard from "./SalaryFilterCard";
// import SelectedProfCard from "../profileCards/SelectedProfCard";
// import { TbMinusVertical } from "react-icons/tb";
// import { FaAngleDown } from "react-icons/fa6";
// import { GoArrowLeft, GoArrowRight } from "react-icons/go";

// const EmpFilter = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [profiles, setProfiles] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

//   const cardsPerPage = 12;
//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//   const currentCards = profiles.slice(indexOfFirstCard, indexOfLastCard);

//   const handleNextClick = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePreviousClick = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   useEffect(() => {
//     const fetchProfiles = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(`${baseUrl}/api/userFilter`);
//         if (response.data.status === 200) {
//           setProfiles(response.data.result);
//         } else {
//           setError("Failed to fetch data");
//         }
//       } catch (err) {
//         setError("Error fetching profile data");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProfiles();
//   }, []);

//   return (
//     <>
//       <div className="emp-filterBox">
//         <div className="filter-container">
//           <div className="sidebar">
//             <div className="sidebar-boxOne">
//               <div className="sidbar-filter-head">
//                 <p className="sidebar-heading">Filter</p>
//                 <button>Reset</button>
//               </div>
//               <div className="employment-filter">
//                 <p className="sidebar-heading">Work mode</p>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Work from office</p>
//                 </div>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Remote</p>
//                 </div>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Hybrid</p>
//                 </div>
//               </div>
//               <div className="salary-range">
//                 <p className="sidebar-heading">Salary Range</p>
//                 <SalaryFilterCard />
//               </div>
//               <div className="employment-filter">
//                 <p className="sidebar-heading">Experience Level</p>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Fresher (1 year experience)</p>
//                 </div>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Junior (2 year experience)</p>
//                 </div>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Assosiate (2-5 year experience)</p>
//                 </div>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Mid Level (5-10 year experience)</p>
//                 </div>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Senior (10+ year experience)</p>
//                 </div>
//               </div>
//             </div>
//             <div className="sidebar-boxTwo">
//               <div className="employment-filter">
//                 <p className="sidebar-heading">Active Joiner</p>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Within 7 Days</p>
//                 </div>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>within 15 Days</p>
//                 </div>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Within 30 Days</p>
//                 </div>
//                 <div className="empTypeOne">
//                   <input type="checkbox" />
//                   <p>Within 45 Days</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="filter-cards">
//             <div className="filter-top">
//               <div className="top-filters">
//                 <div className="input-with-icon">
//                   <input type="text" name="jobType" placeholder="Job type" />
//                 </div>
//                 <div className="filter-topverti-icon">
//                   <TbMinusVertical size={30} color="#ddd" />
//                 </div>
//                 <div className="input-with-icon">
//                   <input
//                     type="text"
//                     name="designation"
//                     placeholder="Keyword / Designation"
//                   />
//                 </div>
//                 <div className="filter-topverti-icon">
//                   <TbMinusVertical size={30} color="#ddd" />
//                 </div>
//                 <div className="input-with-icon">
//                   <input
//                     type="text"
//                     name="location"
//                     placeholder="Enter location"
//                   />
//                 </div>
//               </div>
//               <button className="filter-search-btn">Search</button>
//             </div>

//             <div className="topfilt-details">
//               <p>{profiles.length} Frontend Developer Candidates</p>
//               <a href="#">Send me jobs like these</a>
//               <p>
//                 <span>Sort by:</span> Recommended <FaAngleDown />
//               </p>
//             </div>
//             <div className="all-cards">
//               {isLoading ? (
//                 <p>Loading...</p>
//               ) : error ? (
//                 <p>{error}</p>
//               ) : (
//                 currentCards.map((profile) => (
//                   <SelectedProfCard
//                     key={profile._id}
//                     id={profile._id}
//                     selectprof={
//                       profile.image ||
//                       "https://img.freepik.com/free-photo/asian-woman-posing-looking-camera_23-2148255359.jpg?ga=GA1.1.1365218698.1716962795&semt=ais_hybrid"
//                     }
//                     selProfname={profile.name || "Tony Stark"}
//                     role={profile.currentPosition || "Software Engineer"}
//                     companyName={profile.currentCompanyName || "Tech Corp"}
//                     location={profile.location || "Mumbai"}
//                     noticeday={profile.noticePeriod || 30}
//                     skillOne={profile.skillName?.[0] || "JavaScript"}
//                     skillTwo={profile.skillName?.[1] || "React"}
//                     skillThree={profile.skillName?.[2] || "Node.js"}
//                   />
//                 ))
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="nextpage-btns">
//           <div className="filtPageBtns">
//             <button
//               className="previousfiltBtn"
//               onClick={handlePreviousClick}
//               disabled={currentPage === 1}
//             >
//               <GoArrowLeft
//                 size={22}
//                 color="#ea4232"
//                 className="nextIconBottom"
//               />{" "}
//               Previous
//             </button>

//             <button className="currentpagefiltBtn">{currentPage}</button>

//             <button className="nextfiltBtn" onClick={handleNextClick}>
//               Next{" "}
//               <GoArrowRight
//                 size={22}
//                 color="#ea4232"
//                 className="previewIconBottom"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EmpFilter;

// _______________-----_________----_______-----________-----______-----______-----_____-----______-----



// Api se filter wala component hai _________

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../stylesheets/EmpFilter.css";
import SalaryFilterCard from "./SalaryFilterCard";
import SelectedProfCard from "../profileCards/SelectedProfCard";
import { TbMinusVertical } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const EmpFilter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";
  const cardsPerPage = 12;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = profiles.slice(indexOfFirstCard, indexOfLastCard);

  const [filters, setFilters] = useState({
    workMode: [],
    experienceInStack: [],
    activeJoiners: [],
    location: "",
  });

  const handleCheckboxChange = (category, value) => {
    setFilters((prevFilters) => {
      let updatedValues = [...prevFilters[category]];
      if (updatedValues.includes(value)) {
        updatedValues = updatedValues.filter((v) => v !== value);
      } else {
        updatedValues.push(value);
      }
  
      if (category === "experienceInStack") {
        const updatedExperienceFilters = updatedValues.map((exp) => {
          switch (exp) {
            case 1:
              return [1];
            case 2:
              return [1, 2];
            case "2-5":
              return [3, 4, 5];
            case "5-10":
              return [6, 7, 8, 9, 10];
            case "10+":
              return [11, 12, 13];
            // default:
            //   return [];
          }
        });
  
        return { ...prevFilters, experienceInStack: updatedExperienceFilters.flat() };
      }
  
      return { ...prevFilters, [category]: updatedValues };
    });
  };
  

  const handleLocationChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      location: event.target.value,
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      workMode: [],
      experienceInStack: [],
      activeJoiners: [],
      location: "",
    });
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // useEffect(() => {
  //   const fetchProfiles = async () => {
  //     try {
  //       setIsLoading(true);

  //       let validFilters = {};

  //       if (filters.workMode.length) {
  //         validFilters.workMode = filters.workMode.join(",");
  //       }
  //       if (filters.experienceInStack.length) {
  //         validFilters.experienceInStack = filters.experienceInStack.join(",");
  //       }
  //       if (filters.activeJoiners.length) {
  //         validFilters.activeJoiners = filters.activeJoiners.join(",");
  //       }
  //       if (filters.location) {
  //         validFilters.location = filters.location;
  //       }

  //       console.log("Filters:", filters);
  //       console.log("API Request Params:", validFilters);

  //       const response = Object.keys(validFilters).length
  //         ? await axios.get(`${baseUrl}/api/userFilter`, {
  //             params: validFilters,
  //           })
  //         : await axios.get(`${baseUrl}/api/userFilter`);

  //       if (response.data.status === 200) {
  //         setProfiles(response.data.result);
  //       } else {
  //         setError("Failed to fetch data");
  //       }
  //     } catch (err) {
  //       setError("Error fetching profile data");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchProfiles();
  // }, [filters]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        setIsLoading(true);
        setError(null);
  
        let validFilters = {};
  
        if (filters.workMode.length) {
          validFilters.workMode = filters.workMode.join(",");
        }
        if (filters.experienceInStack.length) {
          validFilters.experienceInStack = filters.experienceInStack.join(",");
        }
        if (filters.activeJoiners.length) {
          validFilters.activeJoiners = filters.activeJoiners.join(",");
        }
        if (filters.location) {
          validFilters.location = filters.location;
        }
  
        console.log("Filters:", filters);
        console.log("API Request Params:", validFilters);
  
        let response;
  
        if (Object.keys(validFilters).length) {
          response = await axios.get(`${baseUrl}/api/userFilter`, { params: validFilters });
  
          if (response.data.status === 404) {
            console.warn("No data found, refetching without filters...");
            response = await axios.get(`${baseUrl}/api/userFilter`); // Fallback call
          }
        } else {
          response = await axios.get(`${baseUrl}/api/userFilter`);
        }
  
        if (response.data.status === 200) {
          setProfiles(response.data.result);
        } else {
          setError("No profiles found");
        }
      } catch (err) {
        setError("Error fetching profile data");
      } finally {
        setIsLoading(false);
      }
    };
  
    // API Call debounce
    const timeoutId = setTimeout(() => {
      fetchProfiles();
    }, 500);
  
    return () => clearTimeout(timeoutId); // Cleanup on dependency change
  
  }, [filters]);
  

  return (
    <>
      <div className="emp-filterBox">
        <div className="filter-container">
          <div className="sidebar">
            <div className="sidebar-boxOne">
              <div className="sidbar-filter-head">
                <p className="sidebar-heading">Filter</p>
                <button onClick={handleResetFilters}>Reset</button>
              </div>

              <div className="employment-filter">
                <p className="sidebar-heading">Work mode</p>
                {["Work from office", "Remote", "Hybrid"].map((mode) => (
                  <div className="empTypeOne" key={mode}>
                    <input
                      type="checkbox"
                      checked={filters.workMode.includes(mode)}
                      onChange={() => handleCheckboxChange("workMode", mode)}
                    />
                    <p>{mode}</p>
                  </div>
                ))}
              </div>

              <div className="salary-range">
                <p className="sidebar-heading">Salary Range</p>
                <SalaryFilterCard />
              </div>

              <div className="employment-filter">
                <p className="sidebar-heading">Experience Level</p>
                {[
                  { label: "Fresher (1 year experience)", value: 1 },
                  { label: "Junior (2 year experience)", value: 2 },
                  { label: "Associate (2-5 year experience)", value: "2-5" },
                  { label: "Mid Level (5-10 year experience)", value: "5-10" },
                  { label: "Senior (10+ year experience)", value: "10+" },
                ].map((exp) => (
                  <div className="empTypeOne" key={exp.value}>
                    <input
                      type="checkbox"
                      checked={filters.experienceInStack.includes(exp.value)}
                      onChange={() =>
                        handleCheckboxChange("experienceInStack", exp.value)
                      }
                    />
                    <p>{exp.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-boxTwo">
              <div className="employment-filter">
                <p className="sidebar-heading">Active Joiner</p>
                {[
                  "Within 7 Days",
                  "Within 15 Days",
                  "Within 30 Days",
                  "Within 45 Days",
                ].map((time) => (
                  <div className="empTypeOne" key={time}>
                    <input
                      type="checkbox"
                      checked={filters.activeJoiners.includes(time)}
                      onChange={() =>
                        handleCheckboxChange("activeJoiners", time)
                      }
                    />
                    <p>{time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="filter-cards">
            <div className="filter-top">
              <div className="top-filters">
                <div className="input-with-icon">
                  <input type="text" name="jobType" placeholder="Job type" />
                </div>
                <div className="filter-topverti-icon">
                  <TbMinusVertical size={30} color="#ddd" />
                </div>
                <div className="input-with-icon">
                  <input
                    type="text"
                    name="designation"
                    placeholder="Keyword / Designation"
                  />
                </div>
                <div className="filter-topverti-icon">
                  <TbMinusVertical size={30} color="#ddd" />
                </div>
                <div className="input-with-icon">
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter location"
                    onChange={handleLocationChange}
                  />
                </div>
              </div>
              <button className="filter-search-btn">Search</button>
            </div>

            <div className="topfilt-details">
              <p>{profiles.length} Frontend Developer Candidates</p>
              <a href="#">Send me jobs like these</a>
              <p>
                <span>Sort by:</span> Recommended <FaAngleDown />
              </p>
            </div>

            <div className="all-cards">
              {isLoading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                currentCards.map((profile) => (
                  <SelectedProfCard
                    key={profile._id}
                    id={profile._id}
                    selectprof={
                      profile.image ||
                      "https://img.freepik.com/free-photo/asian-woman-posing-looking-camera_23-2148255359.jpg"
                    }
                    selProfname={profile.name}
                    role={profile.currentPosition}
                    companyName={profile.currentCompanyName}
                    location={profile.location}
                    noticePeriod={profile.noticePeriod}
                    gender={profile.gender}
                    about={profile.about}
                    skillOne={profile.skillName?.[0]}
                    skillTwo={profile.skillName?.[1]}
                    skillThree={profile.skillName?.[2]}
                  />
                ))
              )}
            </div>
          </div>
        </div>
        <div className="nextpage-btns">
          <div className="filtPageBtns">
            <button
              className="previousfiltBtn"
              onClick={handlePreviousClick}
              disabled={currentPage === 1}
            >
              <GoArrowLeft
                size={22}
                color="#ea4232"
                className="nextIconBottom"
              />{" "}
              Previous
            </button>

            <button className="currentpagefiltBtn">{currentPage}</button>

            <button className="nextfiltBtn" onClick={handleNextClick}>
              Next{" "}
              <GoArrowRight
                size={22}
                color="#ea4232"
                className="previewIconBottom"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpFilter;
