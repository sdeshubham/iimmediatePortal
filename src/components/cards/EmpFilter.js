import React, { useState } from "react";
import "../../stylesheets/EmpFilter.css";
import SalaryFilterCard from "./SalaryFilterCard";
import SelectedProfCard from "../profileCards/SelectedProfCard";
import EmpAllCardData from "./EmpAllCardData";
// import { IoIosSearch } from "react-icons/io";
// import { IoLocationSharp } from "react-icons/io5";
import { TbMinusVertical } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const EmpFilter = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

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
              {/* <div className="employment-filter">
                <p className="sidebar-heading">Type Of Employment</p>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Full Time</p>
                </div>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Part Time</p>
                </div>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Remote</p>
                </div>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Internship</p>
                </div>
              </div> */}
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
              {/* <div className="employment-filter stact-hunt">
                <p className="sidebar-heading">Stack</p>
                <input type="text" placeholder="Type Stack" />
              </div> */}
              {/* <div className="employment-filter stact-hunt">
                <p className="sidebar-heading">Location</p>
                <input type="text" placeholder="Type Location" />
              </div> */}
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
              <div className="input-with-icon">
                <IoIosSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Job title, stack or company..."
                />
              </div>
              <div className="input-with-icon">
                <IoLocationSharp className="search-icon" />
                <input type="text" placeholder="Location" />
              </div>
              <button>Find Employee</button>
            </div> */}

            <div className="filter-top">
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
              <button className="filter-search-btn">
                Search
              </button>
            </div>
            <div className="topfilt-details">
              <p>1- 18 of 689 Frontend Developer Candidates</p>
              <a href="#">Send me jobs like these</a>
              <p>
                <span>Sort by:</span> Recommended <FaAngleDown />
              </p>
            </div>

            <div className="all-cards">
              {EmpAllCardData.map((profile) => (
                <SelectedProfCard key={profile.id} {...profile} />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="nextpage-btns">
          <div className="filtPageBtns">
            <button className="previousfiltBtn"><GoArrowLeft size={25} color="#ea4232" />{" "} Previous</button>
            <button className="currentpagefiltBtn">1</button>
            <button className="nextfiltBtn">Next {" "} <GoArrowRight size={30} color="#ea4232" /></button>
          </div>
        </div> */}
        <div className="nextpage-btns">
          <div className="filtPageBtns">
            <button
              className="previousfiltBtn"
              onClick={handlePreviousClick}
              disabled={currentPage === 1}
            >
              <GoArrowLeft size={25} color="#ea4232" />{" "} Previous
            </button>

            <button className="currentpagefiltBtn">{currentPage}</button>

            <button className="nextfiltBtn" onClick={handleNextClick}>
              Next {" "} <GoArrowRight size={25} color="#ea4232" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpFilter;
