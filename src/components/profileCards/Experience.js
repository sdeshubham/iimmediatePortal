// import React, { useState } from "react";
// import "../../stylesheets/InputFields.css";
// import { IoMdClose } from "react-icons/io";

// const Experience = ({ onClose }) => {
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
//         <div className="exp-inp-box">
//           <button className="close-btn" onClick={onClose}>
//             <IoMdClose size={24} />
//           </button>
//           <form onSubmit={handleSubmit}>
//             <div className="experience-box">
//               <div className="exp-fields">
//                 <div className="exp-inphead">
//                   <h3>Employment</h3>
//                   <p>
//                     Details like job title, company name, etc, help employers
//                     understand your work
//                   </p>
//                 </div>
//                 <div className="inp-fieldbox">
//                   <label htmlFor="">Is this your current employment ?</label>
//                   <div className="exp-radio-inp">
//                     <label>
//                       <input
//                         type="radio"
//                         value="option1"
//                         checked={selectedOption === "option1"}
//                         onChange={handleChange}
//                       />{" "}
//                       Yes
//                     </label>
//                     <label>
//                       <input
//                         type="radio"
//                         value="option2"
//                         checked={selectedOption === "option2"}
//                         onChange={handleChange}
//                       />{" "}
//                       No
//                     </label>
//                   </div>
//                 </div>
//                 <div className="inp-fieldbox">
//                   <label htmlFor="">Current job title</label>
//                   <input
//                     className="exp-inp-fileds"
//                     type="text"
//                     placeholder="Job Title"
//                     value={jobTitle}
//                     onChange={handleJobTitleChange}
//                   />
//                 </div>
//                 <div className="inp-fieldbox">
//                   <label htmlFor="">Company name</label>
//                   <input
//                     className="exp-inp-fileds"
//                     type="text"
//                     placeholder="Company Name"
//                     value={companyName}
//                     onChange={handleCompanyNameChange}
//                   />
//                 </div>
//                 <div className="inp-fieldbox">
//                   <label htmlFor="">Work location</label>
//                   <input
//                     className="exp-inp-fileds"
//                     type="text"
//                     placeholder="Location (e.g., Mumbai, Maharashtra, India)"
//                     value={location}
//                     onChange={handleLocationChange}
//                   />
//                 </div>
//                 <div className="exp-durationBox">
//                   <div className="expjoining-date">
//                     <label htmlFor="Totalexperience">Joining date</label>
//                     <div className="year-month-inp">
//                       <select
//                         id="year"
//                         value={selectedYear}
//                         onChange={handleYearChange}
//                       >
//                         <option value="">Select Year</option>
//                         {years.map((year) => (
//                           <option key={year} value={year}>
//                             {year}
//                           </option>
//                         ))}
//                       </select>
//                       <select
//                         id="month"
//                         value={selectedMonth}
//                         onChange={handleMonthChange}
//                       >
//                         <option value="">Select Month</option>
//                         {months.map((month, index) => (
//                           <option key={index} value={month}>
//                             {month}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
//                   {selectedOption === "option2" && (
//                     <div className="exptotal-date">
//                       <label htmlFor="Totalexperience">Worked till</label>
//                       <div className="year-month-inp">
//                         <select
//                           id="year"
//                           value={endYear}
//                           onChange={handleEndYearChange}
//                         >
//                           <option value="">Select Year</option>
//                           {years.map((year) => (
//                             <option key={year} value={year}>
//                               {year}
//                             </option>
//                           ))}
//                         </select>
//                         <select
//                           id="month"
//                           value={endMonth}
//                           onChange={handleEndMonthChange}
//                         >
//                           <option value="">Select Month</option>
//                           {months.map((month, index) => (
//                             <option key={index} value={month}>
//                               {month}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 <div className="inp-fieldbox-desc">
//                   <div className="exp-desc-inp">
//                     <label htmlFor="">Description</label>
//                     {/* <input type="text" /> */}
//                     <textarea
//                       id="message"
//                       name="message"
//                       rows="4"
//                       cols="50"
//                     ></textarea>
//                   </div>
//                 </div>
//               </div>
//               <div className="expInp-btns">
//                 <div>
//                   <button className="exp-deleteBtn" type="button">
//                     Delete
//                   </button>
//                   <button className="exp-submitBtn" type="submit">
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;



import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext";
import "../../stylesheets/InputFields.css";
import { IoMdClose } from "react-icons/io";

const baseURL = 'https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/api'

const Experience = ({ onClose, setExpArray }) => {
  const  { user } = useAuth();

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [location, setLocation] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [workDescription, setWorkDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState(1); // 1 corresponds to Yes, 0 corresponds to No

  const handleChange = (event) => {
    setSelectedOption(Number(event.target.value));
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
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleJobTitleChange = (e) => setJobTitle(e.target.value);
  const handleCompanyNameChange = (e) => setCompanyName(e.target.value);
  const handleDescriptionChange = (e) => setWorkDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Title:", jobTitle);
    console.log("Company Name:", companyName);
    console.log("Work Description:", workDescription)
    console.log("Location:", location);
    console.log("Start Month:", selectedMonth);
    console.log("Start Year:", selectedYear);
    if (selectedOption === 0) {
      console.log("End Month:", endMonth);
      console.log("End Year:", endYear);
    }

    let JoiningDateFormatted = `${selectedYear}-${(months.indexOf(selectedMonth))+1}-1`

    if (user) {
      axios.post(`${baseURL}/addExperience`,
        {
          "isCurrentEmployment": Boolean(selectedOption),
          "title": jobTitle,
          "company_Name": companyName,
          "location": location,
          "description": workDescription,
          "JoiningDate": JoiningDateFormatted,
        },
        {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json", // Optional but recommended
        },
      }).then((response) => {
        setExpArray((prev) => [...prev, response.data.result] )
      }).catch((error) => {
        console.log(error, "error adding experience")
      })

    }
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
                        name="Yes"
                        type="radio"
                        value="1"
                        checked={Boolean(selectedOption)}
                        onChange={handleChange}
                      />{" "}
                      Yes
                    </label>
                    <label>
                      <input
                        name="No"
                        type="radio"
                        value="0"
                        checked={Boolean(!selectedOption)}
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
                  <div className="expjoining-date">
                    <label htmlFor="Totalexperience">Joining date</label>
                    <div className="year-month-inp" id="date-line">
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
                  {selectedOption === 0 && (
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
                <div className="inp-fieldbox-desc">
                  <div className="exp-desc-inp">
                    <label htmlFor="message">Description</label>
                    {/* <input type="text" /> */}
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      cols="50"
                      onChange={handleDescriptionChange}
                    ></textarea>
                  </div>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Experience;