// import React, { useState, useEffect } from "react";
// import "../stylesheets/Footer.css";

// const Footer = () => {
//   const [users, setUsers] = useState([]);

//   return (
//     <>
//       <div className="footer">
//         <div className="footerBox">
//           <footer>
//             <div className="footer-container">
//               <div className="footer-top-content">
//                 <div className="footer-col">
//                   <h3>Company</h3>
//                   <ul>
//                     <li>
//                       <a href="/aboutus">About Us</a>
//                     </li>
//                     <li>
//                       <a href="/contactus">Contact Us</a>
//                     </li>
//                     <li>
//                       <a href="/privacy&policy">Privacy Policy</a>
//                     </li>
//                     <li>
//                       <a href="/terms&condition">Terms & Conditions</a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="footer-col">
//                   <h3>Hunt By Location</h3>
//                   <ul>
//                     <li>
//                       <a href="">Mumbai</a>
//                     </li>
//                     <li>
//                       <a href="">Pune</a>
//                     </li>
//                     <li>
//                       <a href="">Noida</a>
//                     </li>
//                     <li>
//                       <a href="">Delhi</a>
//                     </li>
//                     <li>
//                       <a href="">Bengaluru</a>
//                     </li>
//                     <li>
//                       <a href="">Hyderabad</a>
//                     </li>
//                     <li>
//                       <a href="">Ahmedabad</a>
//                     </li>
//                     <li>
//                       <a href="">Indore</a>
//                     </li>
//                     <li>
//                       <a href="">Chennai</a>
//                     </li>
//                     <li>
//                       <a href="">Surat</a>
//                     </li>
//                     <li>
//                       <a href="">Mohali</a>
//                     </li>
//                     <li>
//                       <a href="">Kochi</a>
//                     </li>
//                     <li>
//                       <a href="">Jaipur</a>
//                     </li>
//                     <li>
//                       <a href="">Kolkata</a>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="footer-col">
//                   <h3>Hunt By Technology Stack</h3>
//                   <ul>
//                     <li>
//                       <a href="">ReactJs</a>
//                     </li>
//                     <li>
//                       <a href="">Java</a>
//                     </li>
//                     <li>
//                       <a href="">JavaScript</a>
//                     </li>
//                     <li>
//                       <a href="">Angular</a>
//                     </li>
//                     <li>
//                       <a href="">TypeScript</a>
//                     </li>
//                     <li>
//                       <a href="">Python</a>
//                     </li>
//                     <li>
//                       <a href="">MySQL</a>
//                     </li>
//                     <li>
//                       <a href="">MongoDB</a>
//                     </li>
//                     <li>
//                       <a href="">NodeJs</a>
//                     </li>
//                     <li>
//                       <a href="">Flutter</a>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="footer-col">
//                   <h3>Contact Us</h3>
//                   <ul>
//                     <li>
//                       <a href="tel:+917738311925">+91 77383 11925</a>
//                     </li>
//                     <li>
//                       <a href="tel:+919717569519">+91 9717569519</a>
//                     </li>
//                     <li>
//                       <a href="#">
//                         Shop No 2, <br />
//                         Opposite Om Surya apartment, <br />
//                         Sawarkar Nagar Thane, <br />
//                         Maharashtra, 410206 India
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#">Open hours: 8.00-18.00 Mon-Fri</a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="footer-bottom">
//                 <div className="fbottom-left">
//                   <p>Copyright's &copy; 2025 IT Team</p>
//                 </div>
//               </div>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../stylesheets/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleFilterClick = (type, value) => {
    navigate(`/Empfilter?${type}=${encodeURIComponent(value)}`);
  };

  return (
    <div className="footer">
      <div className="footerBox">
        <footer>
          <div className="footer-container">
            <div className="footer-top-content">
              <div className="footer-col">
                <h3>Company</h3>
                <ul>
                  <li><a href="/aboutus">About Us</a></li>
                  <li><a href="/contactus">Contact Us</a></li>
                  <li><a href="/privacy&policy">Privacy Policy</a></li>
                  <li><a href="/terms&condition">Terms & Conditions</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h3>Hunt By Location</h3>
                <ul>
                  {["Mumbai", "Pune", "Noida", "Delhi", "Bengaluru", "Hyderabad", "Ahmedabad", "Indore", "Chennai", "Surat", "Mohali", "Kochi", "Jaipur", "Kolkata"].map((city) => (
                    <li key={city}>
                      <Link onClick={() => handleFilterClick("location", city)}>{city}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-col">
                <h3>Hunt By Technology Stack</h3>
                <ul>
                  {["ReactJs", "Java", "JavaScript", "Angular", "TypeScript", "Python", "MySQL", "MongoDB", "NodeJs", "Flutter"].map((stack) => (
                    <li key={stack}>
                      <Link onClick={() => handleFilterClick("stack", stack)}>{stack}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-col">
                <h3>Hunt By Experience</h3>
                <ul>
                  {[
                    { label: "Fresher (1 year experience)", min: 1, max: 2 },
                    { label: "Junior (2 year experience)", min: 2, max: 5 },
                    { label: "Associate (2-5 years experience)", min: 2, max: 5 },
                    { label: "Mid-Level (5-10 years experience)", min: 5, max: 10 },
                    { label: "Senior (10+ years experience)", min: 10, max: null },
                  ].map(({ label, min, max }) => (
                    <li key={label}>
                      <Link onClick={() => handleFilterClick("experience", `${min}-${max ? max : "above"}`)}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-col">
                <h3>Contact Us</h3>
                <ul>
                  <li><a href="tel:+917738311925">+91 77383 11925</a></li>
                  <li><a href="tel:+919717569519">+91 9717569519</a></li>
                  <li>
                    <p>
                      Shop No 2, Opposite Om Surya Apartment,<br />
                      Sawarkar Nagar Thane, Maharashtra, 410206 India
                    </p>
                  </li>
                  <li>Open hours: 8.00-18.00 Mon-Fri</li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="fbottom-left">
                <p>Copyright &copy; 2025 IT Team</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;



// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// const Empfilter = () => {
//   const location = useLocation();
//   const [filteredData, setFilteredData] = useState([]);

//   const allEmployees = [
//     { id: 1, name: "Amit", location: "Mumbai", stack: "ReactJs", experience: 3 },
//     { id: 2, name: "Priya", location: "Pune", stack: "Java", experience: 5 },
//     { id: 3, name: "Ravi", location: "Noida", stack: "Angular", experience: 2 },
//     { id: 4, name: "Neha", location: "Delhi", stack: "Python", experience: 1 },
//     { id: 5, name: "Vikram", location: "Mumbai", stack: "NodeJs", experience: 7 },
//   ];

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
    
//     let filtered = allEmployees;

//     if (searchParams.has("location")) {
//       const locationFilter = searchParams.get("location");
//       filtered = filtered.filter(emp => emp.location === locationFilter);
//     }

//     if (searchParams.has("stack")) {
//       const stackFilter = searchParams.get("stack");
//       filtered = filtered.filter(emp => emp.stack === stackFilter);
//     }

//     if (searchParams.has("experience")) {
//       const expFilter = searchParams.get("experience").split("-");
//       const minExp = parseInt(expFilter[0], 10);
//       const maxExp = expFilter[1] === "above" ? Infinity : parseInt(expFilter[1], 10);

//       filtered = filtered.filter(emp => emp.experience >= minExp && emp.experience <= maxExp);
//     }

//     setFilteredData(filtered);
//   }, [location.search]);

//   return (
//     <div>
//       <h2>Filtered Employees</h2>
//       <ul>
//         {filteredData.length > 0 ? (
//           filteredData.map(emp => (
//             <li key={emp.id}>{emp.name} - {emp.location} - {emp.stack} - {emp.experience} years</li>
//           ))
//         ) : (
//           <p>No results found</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Empfilter;
