// import React, { useState } from "react";
// import "../../stylesheets/InputFields.css";
// import { RxCross2 } from "react-icons/rx";

// const Projects = ({ onClose }) => {
//   const [projectName, setProjectName] = useState("");
//   const [organizationName, setOrganizationName] = useState("");
//   const [selectedMonth, setSelectedMonth] = useState("");
//   const [selectedYear, setSelectedYear] = useState("");
//   const [endMonth, setEndMonth] = useState("");
//   const [endYear, setEndYear] = useState("");
//   const [location, setLocation] = useState("");
//   const [jobTitle, setJobTitle] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const [selectedOption, setSelectedOption] = useState("option1");

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const years = [];
//   for (let year = 2000; year <= 2024; year++) {
//     years.push(year);
//   }

//   const handleMonthChange = (e) => setSelectedMonth(e.target.value);
//   const handleYearChange = (e) => setSelectedYear(e.target.value);
//   const handleEndMonthChange = (e) => setEndMonth(e.target.value);
//   const handleEndYearChange = (e) => setEndYear(e.target.value);
//   const handleLocationChange = (e) => setLocation(e.target.value);
//   const handleJobTitleChange = (e) => setJobTitle(e.target.value);
//   const handleCompanyNameChange = (e) => setCompanyName(e.target.value);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Job Title:", jobTitle);
//     console.log("Company Name:", companyName);
//     console.log("Location:", location);
//     console.log("Start Month:", selectedMonth);
//     console.log("Start Year:", selectedYear);
//     if (selectedOption === "option2") {
//       console.log("End Month:", endMonth);
//       console.log("End Year:", endYear);
//     }
//     onClose();
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-form">
//         <button className="close-btn" onClick={onClose}>
//           <RxCross2 />
//         </button>

//         <div className="proj-inp-box">
//           <div className="proj-inphead">
//             <h3>Project</h3>
//             <p>
//               Stand out for employers by adding details about projects you have
//               done in college, internships, or at work
//             </p>
//           </div>
//           <div className="inp-fieldbox">
//             <label htmlFor="">Project name</label>
//             <input
//               className="exp-inp-fileds"
//               type="text"
//               placeholder="Job Title"
//             />
//           </div>

//           <div className="expjoining-date">
//             <label htmlFor="Totalexperience">Joining date</label>
//             <div className="year-month-inp">
//               <select
//                 id="year"
//                 value={selectedYear}
//                 onChange={handleYearChange}
//               >
//                 <option value="">Select Year</option>
//                 {years.map((year) => (
//                   <option key={year} value={year}>
//                     {year}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 id="month"
//                 value={selectedMonth}
//                 onChange={handleMonthChange}
//               >
//                 <option value="">Select Month</option>
//                 {months.map((month, index) => (
//                   <option key={index} value={month}>
//                     {month}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import "../../stylesheets/InputFields.css";
import { RxCross2 } from "react-icons/rx";

const Projects = ({ onClose }) => {
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

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button className="close-btn" onClick={onClose}>
          <RxCross2 />
        </button>

        <div className="proj-inp-box">
          <div className="proj-inphead">
            <h3>Project</h3>
            <p>
              Stand out for employers by adding details about projects you have
              done in college, internships, or at work
            </p>
          </div>
          <div className="inp-fieldbox">
            <label htmlFor="">Project name</label>
            <input
              className="exp-inp-fileds"
              type="text"
              placeholder="Project Name"
            />
          </div>

          <div className="projwork-date">
            <label htmlFor="Totalexperience">Worked from</label>
            <div className="year-month-inp">
              <select id="year">
                <option value="">Select Year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <select id="month">
                <option value="">Select Month</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="inp-fieldbox">
            <label htmlFor="">This project with employment or education</label>
            <input
              className="exp-inp-fileds"
              type="text"
              placeholder="Select employment/education"
            />
          </div>
          <div className="inp-fieldbox-desc">
            <div className="exp-desc-inp">
              <label htmlFor="">Description</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
              ></textarea>
            </div>
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
      </div>
    </div>
  );
};

export default Projects;
