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
import axios from "axios";
import "../stylesheets/Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);
  const [techStacks, setTechStacks] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get(
          "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/withOutLogin/get-state-list",
          {
            params: { countryCode: "IN" },
          }
        );

        if (response.data && response.data.data) {
          setLocations(response.data.data.slice(0, 14));
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  useEffect(() => {
    const fetchTechStacks = async () => {
      try {
        const response = await axios.get(
          "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/withOutLogin/tech-stack-list"
        );

        if (response.data && response.data.result) {
          setTechStacks(response.data.result.slice(0, 14)); // Extract only the first 14 tech stacks
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching tech stacks:", error);
      }
    };

    fetchTechStacks();
  }, []);

  const handleFilterClick = (type, value) => {
    navigate(`/Empfilter?${type}=${encodeURIComponent(value)}`);
  };

  const handleLocationClick = (location) => {
    navigate(`/empfilter?location=${encodeURIComponent(location)}`);
    window.scrollTo(0, 0);
  };

  const handleTechStackClick = (techStack) => {
    navigate(`/empfilter?expertTecStack=${encodeURIComponent(techStack)}`);
  };
  const handleExpTechClick = (experienceInStack) => {
    navigate(`/empfilter?experienceInStack=${encodeURIComponent(experienceInStack)}`);
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
                  {locations.length > 0 ? (
                    locations.map((location) => (
                      <li key={location._id}>
                        <a onClick={() => handleLocationClick(location.name)}>
                          {location.name}
                        </a>
                      </li>
                    ))
                  ) : (
                    <li>Loading locations...</li>
                  )}
                </ul>
              </div>

              <div className="footer-col">
                <h3>Hunt By Technology Stack</h3>
                <ul>
                  {techStacks.length > 0 ? (
                    techStacks.map((stack) => (
                      <li key={stack._id}>
                        <a onClick={() => handleTechStackClick(stack.tecStackName)}>
                          {/* <img 
                            src={stack.techStacklogo} 
                            alt={stack.tecStackName} 
                            style={{ width: "20px", height: "20px", marginRight: "8px" }} 
                          /> */}
                          {stack.tecStackName}
                        </a>
                      </li>
                    ))
                  ) : (
                    <li>Loading tech stacks...</li>
                  )}
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
                      <Link onClick={() => handleExpTechClick("experience", `${min}-${max ? max : "above"}`)}>{label}</Link>
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
