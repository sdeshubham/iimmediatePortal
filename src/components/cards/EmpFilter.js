import React from "react";
import "../../stylesheets/EmpFilter.css";
import SalaryFilterCard from "./SalaryFilterCard";
import SelectedProfCard from "../profileCards/SelectedProfCard";
import EmpAllCardData from "./EmpAllCardData";
import { IoIosSearch } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const EmpFilter = () => {
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
              {/* <div className="salary-range">
                <p className="sidebar-heading">Salary Range</p>
                <SalaryFilterCard />
              </div> */}
              <div className="employment-filter stact-hunt">
                <p className="sidebar-heading">Stack</p>
                <input type="text" placeholder="Type Stack" />
              </div>
              <div className="employment-filter stact-hunt">
                <p className="sidebar-heading">Location</p>
                <input type="text" placeholder="Type Location" />
              </div>
              <div className="employment-filter">
                <p className="sidebar-heading">Experience Level</p>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Fresher Level</p>
                </div>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Mid Level</p>
                </div>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Senior Level</p>
                </div>
                <div className="empTypeOne">
                  <input type="checkbox" />
                  <p>Director</p>
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
            <div className="filter-top">
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
            </div>

            <div className="all-cards">
              {EmpAllCardData.map((profile) => (
                <SelectedProfCard key={profile.id} {...profile} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpFilter;
