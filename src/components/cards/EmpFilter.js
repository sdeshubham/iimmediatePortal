import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../stylesheets/EmpFilter.css";
import SalaryFilterCard from "./SalaryFilterCard";
import SelectedProfCard from "../profileCards/SelectedProfCard";
import { TbMinusVertical } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useSearchParams } from "react-router-dom";

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
    location: [],
    expertTecStack: [],
    skillName: [],
    currentPosition: [],
    noticePeriod: [],
  });

  const [searchParams] = useSearchParams();

  const handleCheckboxChange = (category, value) => {
    setFilters((prevFilters) => {
      let updatedValues = [...prevFilters[category]];
      if (updatedValues.includes(value)) {
        updatedValues = updatedValues.filter((v) => v !== value);
      } else {
        updatedValues.push(value);
      }

      // Handle experienceInStack category
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
            default:
              return [];
          }
        });
        return {
          ...prevFilters,
          experienceInStack: updatedExperienceFilters.flat(),
        };
      }

      // Handle activeJoiners and noticePeriod categories
      if (category === "activeJoiners") {
        let noticePeriodValues = [];
        if (updatedValues.includes("Within 7 Days")) {
          noticePeriodValues.push("0-7");
        }
        if (updatedValues.includes("Within 15 Days")) {
          noticePeriodValues.push("8-15");
        }
        if (updatedValues.includes("Within 30 Days")) {
          noticePeriodValues.push("16-30");
        }
        if (updatedValues.includes("Within 45 Days")) {
          noticePeriodValues.push("31-45");
        }
        return {
          ...prevFilters,
          activeJoiners: updatedValues,
          noticePeriod: noticePeriodValues, // Add the corresponding noticePeriod filter
        };
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

  const handleStackChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      expertTecStack: event.target.value,
      currentPosition: event.target.value,
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      workMode: [],
      experienceInStack: [],
      activeJoiners: [],
      location: [],
      expertTecStack: [],
      skillName: [],
      currentPosition: [],
      noticePeriod: [],
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

  useEffect(() => {
    if (searchParams.get("location")) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        location: searchParams.get("location"),
      }));
    }
    if (searchParams.get("expertTecStack")) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        expertTecStack: searchParams.get("expertTecStack"),
      }));
    }
    if (searchParams.get("experienceInStack")) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        experienceInStack: searchParams.get("experienceInStack"),
      }));
    }
    if (searchParams.get("activeJoiners")) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        activeJoiners: searchParams.get("activeJoiners"),
      }));
    }
  }, []);

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
        if (filters.currentPosition) {
          validFilters.currentPosition = filters.currentPosition;
        }
        if (filters.expertTecStack) {
          validFilters.expertTecStack = filters.expertTecStack;
        }
        if (filters.skillName.length) {
          validFilters.skillName = filters.skillName.join(",");
        }
        if (filters.noticePeriod.length) {
          validFilters.noticePeriod = filters.noticePeriod.join(",");
        }

        console.log("Filters:", filters);
        console.log("API Request Params:", validFilters);

        let response;

        if (Object.keys(validFilters).length) {
          response = await axios.get(`${baseUrl}/api/userFilter`, {
            params: validFilters,
          });

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

    const timeoutId = setTimeout(() => {
      fetchProfiles();
    }, 500);

    return () => clearTimeout(timeoutId);
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
                  <input
                    type="text"
                    name="jobType"
                    placeholder="Tech Stack/Skill"
                    value={filters.expertTecStack}
                    onChange={handleStackChange}
                  />
                </div>
                <div className="filter-topverti-icon">
                  <TbMinusVertical size={30} color="#ddd" />
                </div>
                <div className="input-with-icon">
                  <input
                    type="text"
                    name="designation"
                    value={filters.designation}
                    placeholder="Role/Designation"
                    onChange={handleStackChange}
                    onKeyDown={handleStackChange}
                  />
                </div>

                <div className="filter-topverti-icon">
                  <TbMinusVertical size={30} color="#ddd" />
                </div>
                <div className="input-with-icon">
                  <input
                    type="text"
                    name="location"
                    value={filters.location}
                    placeholder="Enter location"
                    onChange={handleLocationChange}
                    onKeyDown={handleLocationChange}
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
                    skills={profile.skillName}
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
