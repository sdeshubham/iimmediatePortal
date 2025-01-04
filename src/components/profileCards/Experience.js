import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Experience = ({ onClose }) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [location, setLocation] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [selectedOption, setSelectedOption] = useState();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = [];
  for (let year = 2000; year <= 2024; year++) {
    years.push(year);
  }

  const handleMonthChange = (e) => setSelectedMonth(e.target.value);
  const handleYearChange = (e) => setSelectedYear(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleJobTitleChange = (e) => setJobTitle(e.target.value);
  const handleCompanyNameChange = (e) => setCompanyName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Title:", jobTitle);
    console.log("Company Name:", companyName);
    console.log("Location:", location);
    console.log("Month:", selectedMonth);
    console.log("Year:", selectedYear);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <div className="exp-inp-box">
          <button className="close-btn" onClick={onClose}>
            <IoMdClose size={24} />
          </button>
          <form onSubmit={handleSubmit}>
            <div className="experience-box">
              <div className="exp-fields">
                <div className="exp-inphead">
                  <h3>Employment</h3>
                  <p>
                    Details like job title, company name, etc, help employers
                    understand your work
                  </p>
                </div>
                <div className="inp-fieldbox">
                  <label htmlFor="">Is this your current employment ?</label>
                  <div className="exp-radio-inp">
                    <label>
                      <input
                        type="radio"
                        value="option1"
                        checked={selectedOption === "option1"}
                        onChange={handleChange}
                      />{" "}
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="option2"
                        checked={selectedOption === "option2"}
                        onChange={handleChange}
                      />{" "}
                      No
                    </label>
                  </div>
                </div>
                <div className="inp-fieldbox">
                  <label htmlFor="">Current job title</label>
                  <input
                    className="exp-inp-fileds"
                    type="text"
                    placeholder="Job Title"
                    value={jobTitle}
                    onChange={handleJobTitleChange}
                  />
                </div>
                <div className="inp-fieldbox">
                  <label htmlFor="">Company name</label>
                  <input
                    className="exp-inp-fileds"
                    type="text"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={handleCompanyNameChange}
                  />
                </div>
                <div className="inp-fieldbox">
                  <label htmlFor="">Work location</label>
                  <input
                    className="exp-inp-fileds"
                    type="text"
                    placeholder="Location (e.g., Mumbai, Maharashtra, India)"
                    value={location}
                    onChange={handleLocationChange}
                  />
                </div>
                <div className="exp-durationBox">
                  <div className="expjoin-date">
                    <label htmlFor="Totalexperience">Total experience</label>
                    <div className="year-month-inp">
                      <select
                        id="year"
                        value={selectedYear}
                        onChange={handleYearChange}
                      >
                        <option value="">--Select Year--</option>
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                      <select
                        id="month"
                        value={selectedMonth}
                        onChange={handleMonthChange}
                      >
                        <option value="">--Select Month--</option>
                        {months.map((month, index) => (
                          <option key={index} value={month}>
                            {month}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="inp-fieldbox-desc">
                  <div className="exp-desc-inp">
                    <label htmlFor="">Description</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="expInp-btns">
                <div>
                  <button className="exp-deleteBtn" type="delete">Delete</button>
                  <button className="exp-submitBtn" type="submit">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Experience;
