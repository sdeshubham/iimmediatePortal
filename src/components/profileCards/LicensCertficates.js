import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "../../stylesheets/InputFields.css";

const LicensCertficates = ({ onClose }) => {
  const [education, setEducation] = useState("");
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

  const handleEducationChange = (e) => {
    setEducation(e.target.value);
  };

  const handleOrganizationNameChange = (e) => {
    setOrganizationName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Education:", education);
    console.log("Organization Name:", organizationName);
    console.log("Start Month:", selectedMonth);
    console.log("Start Year:", selectedYear);
    if (selectedOption === "option2") {
      console.log("End Month:", endMonth);
      console.log("End Year:", endYear);
    }
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button className="close-btn" onClick={onClose}>
          <IoMdClose size={24} />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="project-box">
            <div className="skill-inphead">
              <h3>Licens & Certficates</h3>
              <p>Add details of Certifications you have achieved/completed</p>
            </div>
            <div className="inp-fieldbox">
              <label htmlFor="">Certification name</label>
              <input
                className="exp-inp-fileds"
                type="text"
                placeholder="Certification name"
                // value={jobTitle}
                // onChange={handleJobTitleChange}
              />
            </div>
            <div className="inp-fieldbox">
              <label htmlFor="">University or organization</label>
              <input
                className="exp-inp-fileds"
                type="text"
                placeholder="University or organization"
                // value={jobTitle}
                // onChange={handleJobTitleChange}
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
              <label htmlFor="">Grade</label>
              <input
                className="pdf-inp-fileds"
                type="file"
                id="file-upload"
                accept=".pdf, .doc, .docx"
                placeholder="Grade"
                // value={jobTitle}
                // onChange={handleJobTitleChange}
              />
            </div>
            <div className="expInp-btns">
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
        </form>
      </div>
    </div>
  );
};

export default LicensCertficates;
