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
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    jobType: "",
    designation: "",
    location: "",
  });

  const baseUrl = "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com";

  const cardsPerPage = 18;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredProfiles.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${baseUrl}/api/userFilter`);
        if (response.data.status === 200) {
          setProfiles(response.data.result);
          setFilteredProfiles(response.data.result);
        } else {
          setError("Failed to fetch data");
        }
      } catch (err) {
        setError("Error fetching profile data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  useEffect(() => {
    let filtered = profiles;
    if (filters.jobType) {
      filtered = filtered.filter((profile) =>
        profile.jobType?.toLowerCase().includes(filters.jobType.toLowerCase())
      );
    }
    if (filters.designation) {
      filtered = filtered.filter((profile) => {
        console.log("Checking Profile:", profile.currentPosition);
        return profile.currentPosition
          ?.toLowerCase()
          .includes(filters.designation.toLowerCase());
      });
    }
    if (filters.location) {
      filtered = filtered.filter((profile) =>
        profile.location?.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    setFilteredProfiles(filtered);
  }, [filters, profiles]);



  return (
    <>
      <div className="emp-filterBox">
        <div className="filter-container">
          <div className="sidebar">
            <div className="sidebar-boxOne">
              <div className="sidbar-filter-head">
                <p className="sidebar-heading">Filter</p>
                <button>Reset</button>
              </div>
              <div className="employment-filter">
                <p className="sidebar-heading">Work mode</p>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Work from office</p>
                </div>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Remote</p>
                </div>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Hybrid</p>
                </div>
              </div>
              <div className="salary-range">
                <p className="sidebar-heading">Salary Range</p>
                <SalaryFilterCard />
              </div>
              <div className="employment-filter">
                <p className="sidebar-heading">Experience Level</p>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Fresher (1 year experience)</p>
                </div>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Junior (2 year experience)</p>
                </div>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Assosiate (2-5 year experience)</p>
                </div>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Mid Level (5-10 year experience)</p>
                </div>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Senior (10+ year experience)</p>
                </div>
              </div>
            </div>
            <div className="sidebar-boxTwo">
              <div className="employment-filter">
                <p className="sidebar-heading">Active Joiner</p>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Within 7 Days</p>
                </div>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>within 15 Days</p>
                </div>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Within 30 Days</p>
                </div>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Within 45 Days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Cards Section */}
          <div className="filter-cards">
            {/* <div className="filter-top">
              <div className="top-filters">
                <div className="input-with-icon">
                  <input type="text" placeholder="Job type" />
                </div>
                <div className="filter-topverti-icon">
                  <TbMinusVertical size={30} color="#ddd" />
                </div>
                <div className="input-with-icon">
                  <input type="text" placeholder="Keyword / Designation" />
                </div>
                <div className="filter-topverti-icon">
                  <TbMinusVertical size={30} color="#ddd" />
                </div>
                <div className="input-with-icon">
                  <input type="text" placeholder="Enter location" />
                </div>
              </div>
              <button className="filter-search-btn">Search</button>
            </div> */}
            <div className="filter-top">
              <div className="top-filters">
                <div className="input-with-icon">
                  <input
                    type="text"
                    name="jobType"
                    placeholder="Job type"
                    value={filters.jobType}
                    onChange={handleFilterChange}
                  />
                </div>
                <div className="filter-topverti-icon">
                  <TbMinusVertical size={30} color="#ddd" />
                </div>
                <div className="input-with-icon">
                  <input
                    type="text"
                    name="designation"
                    placeholder="Keyword / Designation"
                    value={filters.designation}
                    onChange={handleFilterChange}
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
                    value={filters.location}
                    onChange={handleFilterChange}
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
                    key={profile.id}
                    selectprof={
                      profile.image ||
                      "https://img.freepik.com/free-photo/asian-woman-posing-looking-camera_23-2148255359.jpg?ga=GA1.1.1365218698.1716962795&semt=ais_hybrid"
                    }
                    selProfname={profile.name || "Tony Stark"}
                    role={profile.currentPosition || "Software Engineer"}
                    companyName={profile.currentCompanyName || "Tech Corp"}
                    location={profile.location || "Mumbai"}
                    noticeday={profile.noticePeriod || 30}
                    skillOne={profile.skillName?.[0] || "JavaScript"}
                    skillTwo={profile.skillName?.[1] || "React"}
                    skillThree={profile.skillName?.[2] || "Node.js"}
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
              <GoArrowLeft size={22} color="#ea4232" className="nextIconBottom" /> Previous
            </button>

            <button className="currentpagefiltBtn">{currentPage}</button>

            <button className="nextfiltBtn" onClick={handleNextClick}>
              Next <GoArrowRight size={22} color="#ea4232" className="previewIconBottom" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpFilter;
