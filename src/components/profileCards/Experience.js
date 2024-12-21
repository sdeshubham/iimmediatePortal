// import React, { useState } from "react";

// const Experience = () => {
//   const [selectedMonth, setSelectedMonth] = useState("");
//   const [selectedYear, setSelectedYear] = useState("");
//   const [location, setLocation] = useState("");

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

//   const handleMonthChange = (e) => {
//     setSelectedMonth(e.target.value);
//   };

//   const handleYearChange = (e) => {
//     setSelectedYear(e.target.value);
//   };

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   return (
//     <>
//       <div className="experience-box">
//         <div className="exp-fileds">
//           <div className="fields-top">
//             <div className="fields-left">
//               <h4>
//                 <input type="text" placeholder="Job Title" />
//               </h4>
//               <h5>
//                 <input type="text" placeholder="Company Name" />
//               </h5>
//               <h6>
//                 <input
//                   type="text"
//                   placeholder="Location (e.g., Mumbai, Maharashtra, India)"
//                   value={location}
//                   onChange={handleLocationChange}
//                 />
//               </h6>
//             </div>
//             <div className="field-right">
//               <div>
//                 <label htmlFor="month">Select Month:</label>
//                 <select
//                   id="month"
//                   value={selectedMonth}
//                   onChange={handleMonthChange}
//                 >
//                   <option value="">--Select Month--</option>
//                   {months.map((month, index) => (
//                     <option key={index} value={month}>
//                       {month}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label htmlFor="year">Select Year:</label>
//                 <select
//                   id="year"
//                   value={selectedYear}
//                   onChange={handleYearChange}
//                 >
//                   <option value="">--Select Year--</option>
//                   {years.map((year) => (
//                     <option key={year} value={year}>
//                       {year}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
//             ratione? Dolore, porro voluptate deleniti soluta consequuntur
//             dolores itaque eius odio eligendi, maiores commodi hic distinctio
//             rem eum numquam similique ipsum!
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Experience;


// import React, { useState } from "react";
// import { IoMdClose } from "react-icons/io";

// const Experience = ({ onClose }) => {
//   const [selectedMonth, setSelectedMonth] = useState("");
//   const [selectedYear, setSelectedYear] = useState("");
//   const [location, setLocation] = useState("");

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

//   const handleMonthChange = (e) => {
//     setSelectedMonth(e.target.value);
//   };

//   const handleYearChange = (e) => {
//     setSelectedYear(e.target.value);
//   };

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-form">
//         <button className="close-btn" onClick={onClose}>
//           <IoMdClose size={24} />
//         </button>
//         <div className="experience-box">
//           <div className="exp-fields">
//             <div className="fields-top">
//               <div className="fields-left">
//                 <h4>
//                   <input type="text" placeholder="Job Title" />
//                 </h4>
//                 <h5>
//                   <input type="text" placeholder="Company Name" />
//                 </h5>
//                 <h6>
//                   <input
//                     type="text"
//                     placeholder="Location (e.g., Mumbai, Maharashtra, India)"
//                     value={location}
//                     onChange={handleLocationChange}
//                   />
//                 </h6>
//               </div>
//               <div className="field-right">
//                 <div>
//                   <label htmlFor="month">Select Month:</label>
//                   <select
//                     id="month"
//                     value={selectedMonth}
//                     onChange={handleMonthChange}
//                   >
//                     <option value="">--Select Month--</option>
//                     {months.map((month, index) => (
//                       <option key={index} value={month}>
//                         {month}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label htmlFor="year">Select Year:</label>
//                   <select
//                     id="year"
//                     value={selectedYear}
//                     onChange={handleYearChange}
//                   >
//                     <option value="">--Select Year--</option>
//                     {years.map((year) => (
//                       <option key={year} value={year}>
//                         {year}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Nesciunt, ratione? Dolore, porro voluptate deleniti soluta
//               consequuntur dolores itaque eius odio eligendi, maiores commodi
//               hic distinctio rem eum numquam similique ipsum!
//             </p>
//           </div>
//         </div>
//         <button type="submit">Submit</button>
//       </div>
//     </div>
//   );
// };

// export default Experience;



import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Experience = ({ onClose }) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [location, setLocation] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");

  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
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
        <button className="close-btn" onClick={onClose}>
          <IoMdClose size={24} />
        </button>
        <form onSubmit={handleSubmit}>
          <div className="experience-box">
            <div className="exp-fields">
              <div className="fields-top">
                <div className="fields-left">
                  <h4>
                    <input
                      type="text"
                      placeholder="Job Title"
                      value={jobTitle}
                      onChange={handleJobTitleChange}
                    />
                  </h4>
                  <h5>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={companyName}
                      onChange={handleCompanyNameChange}
                    />
                  </h5>
                  <h6>
                    <input
                      type="text"
                      placeholder="Location (e.g., Mumbai, Maharashtra, India)"
                      value={location}
                      onChange={handleLocationChange}
                    />
                  </h6>
                </div>
                <div className="field-right">
                  <div>
                    <label htmlFor="month">Select Month:</label>
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

                  <div>
                    <label htmlFor="year">Select Year:</label>
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
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, ratione? Dolore, porro voluptate deleniti soluta
                consequuntur dolores itaque eius odio eligendi, maiores commodi
                hic distinctio rem eum numquam similique ipsum!
              </p>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Experience;
