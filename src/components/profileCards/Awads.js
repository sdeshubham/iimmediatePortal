import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Awads = ({ onClose }) => {
  const [awardName, setAwardName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [selectedOption, setSelectedOption] = useState("option1");

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
  const handleEndMonthChange = (e) => setEndMonth(e.target.value);
  const handleEndYearChange = (e) => setEndYear(e.target.value);

  const handleAwardNameChange = (e) => {
    setAwardName(e.target.value);
  };

  const handleOrganizationNameChange = (e) => {
    setOrganizationName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Award Name:", awardName);
    console.log("Organization Name:", organizationName);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <div className="awards-box">
          <button className="close-btn" onClick={onClose}>
            <IoMdClose size={24} />
          </button>
          <form onSubmit={handleSubmit}>
            <div className="award-inphead">
              <h3>Honors & Awards</h3>
              <p>
                Share your achievements and recognition that highlight your
                dedication, excellence, and the impact you've made
              </p>
            </div>
            <div className="project-box">
              <div className="inp-fieldbox">
                <label htmlFor="Award name">Award name</label>
                <input
                  className="exp-inp-fileds"
                  type="text"
                  placeholder="Award Name"
                  value={awardName}
                  onChange={handleAwardNameChange}
                />
              </div>
              <div className="inp-fieldbox">
                <label htmlFor="Issued by">Issued by</label>
                <input
                  className="exp-inp-fileds"
                  type="text"
                  placeholder="Organization Name"
                  value={organizationName}
                  onChange={handleOrganizationNameChange}
                />
              </div>
              <div className="exp-durationBox">
                <div className="course-duration">
                  <label htmlFor="Totalexperience">Issued date</label>
                  <div className="year-month-inp">
                    <select
                      id="year"
                      value={selectedYear}
                      onChange={handleYearChange}
                    >
                      <option value="">Select Year</option>
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
                      <option value="">Select Month</option>
                      {months.map((month, index) => (
                        <option key={index} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {selectedOption === "option2" && (
                  <div className="exptotal-date">
                    <label htmlFor="Totalexperience">Worked till</label>
                    <div className="year-month-inp">
                      <select
                        id="year"
                        value={endYear}
                        onChange={handleEndYearChange}
                      >
                        <option value="">Select Year</option>
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                      <select
                        id="month"
                        value={endMonth}
                        onChange={handleEndMonthChange}
                      >
                        <option value="">Select Month</option>
                        {months.map((month, index) => (
                          <option key={index} value={month}>
                            {month}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>

              <div className="inp-fieldbox">
                <label htmlFor="Assosiated with">Assosiated with</label>
                <input
                  className="exp-inp-fileds"
                  type="text"
                  placeholder="Assosiated with"
                  value={organizationName}
                  onChange={handleOrganizationNameChange}
                />
              </div>
            </div>
          </form>
          <div className="expInp-btns award-btns">
            <div>
              <button className="exp-deleteBtn" type="button">
                Delete
              </button>
              <button className="exp-submitBtn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awads;
