import React, { useState, useEffect } from "react";
import "../stylesheets/Footer.css";

const Footer = () => {
  const [users, setUsers] = useState([]);

  const handleStackClick = (stackName) => {
    const apiUrl =
      "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/api/userFilter";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          const filteredUsers = data.result.filter((user) =>
            user.skillName.includes(stackName)
          );
          console.log(`Users with ${stackName}:`, filteredUsers);
        } else {
          console.log(`No users found for ${stackName}`);
        }
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  const handleLocationClick = (city) => {
    const apiUrl = `https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/api/userFilter?location=${encodeURIComponent(
      city
    )}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          console.log(`Users in ${city}:`, data.result);
        } else {
          console.log(`No users found in ${city}`);
        }
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  useEffect(() => {
    fetch(
      "https://qi0vvbzcmg.execute-api.ap-south-1.amazonaws.com/api/userFilter"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setUsers(data.result);
        }
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  const filterByExperience = (min, max) => {
    const filteredUsers = users.filter((user) => {
      const exp = user.experienceInStack;
      return max ? exp >= min && exp < max : exp > min;
    });
    console.log(
      `Users with ${min}-${max ? max : "above"} years of experience:`,
      filteredUsers
    );
  };

  return (
    <>
      <div className="footer">
        <div className="footerBox">
          <footer>
            <div className="footer-container">
              <div className="footer-top-content">
                <div className="footer-col">
                  <h3>Company</h3>
                  <ul>
                    <li>
                      <a href="/aboutus">About Us</a>
                    </li>
                    <li>
                      <a href="/contactus">Contact Us</a>
                    </li>
                    <li>
                      <a href="/privacy&policy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/terms&condition">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h3>Hunt By Location</h3>
                  <ul>
                    <li>
                      <a href="">Mumbai</a>
                    </li>
                    <li>
                      <a href="">Pune</a>
                    </li>
                    <li>
                      <a href="">Noida</a>
                    </li>
                    <li>
                      <a href="">Delhi</a>
                    </li>
                    <li>
                      <a href="">Bengaluru</a>
                    </li>
                    <li>
                      <a href="">Hyderabad</a>
                    </li>
                    <li>
                      <a href="">Ahmedabad</a>
                    </li>
                    <li>
                      <a href="">Indore</a>
                    </li>
                    <li>
                      <a href="">Chennai</a>
                    </li>
                    <li>
                      <a href="">Surat</a>
                    </li>
                    <li>
                      <a href="">Mohali</a>
                    </li>
                    <li>
                      <a href="">Kochi</a>
                    </li>
                    <li>
                      <a href="">Jaipur</a>
                    </li>
                    <li>
                      <a href="">Kolkata</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-col">
                  <h3>Hunt By Technology Stack</h3>
                  <ul>
                    <li>
                      <a href="">ReactJs</a>
                    </li>
                    <li>
                      <a href="">Java</a>
                    </li>
                    <li>
                      <a href="">JavaScript</a>
                    </li>
                    <li>
                      <a href="">Angular</a>
                    </li>
                    <li>
                      <a href="">TypeScript</a>
                    </li>
                    <li>
                      <a href="">Python</a>
                    </li>
                    <li>
                      <a href="">MySQL</a>
                    </li>
                    <li>
                      <a href="">MongoDB</a>
                    </li>
                    <li>
                      <a href="">NodeJs</a>
                    </li>
                    <li>
                      <a href="">Flutter</a>
                    </li>
                  </ul>
                </div>
                {/* <div className="footer-col">
                  <h3>Hunt By Experience</h3>
                  <ul>
                    <li>
                      <a href="#">Fresher (1 year experience)</a>
                    </li>
                    <li>
                      <a href="#">Junior (2 year experience)</a>
                    </li>
                    <li>
                      <a href="#">Assosiate (2-5 year experience)</a>
                    </li>
                    <li>
                      <a href="#">Mid-Level (5-10 year experience)</a>
                    </li>
                    <li>
                      <a href="#">Senior (10+ year experience)</a>
                    </li>
                  </ul>
                </div> */}
                <div className="footer-col">
                  <h3>Hunt By Experience</h3>
                  <ul>
                    <li>
                      <a onClick={() => filterByExperience(1, 2)}>
                        Fresher (1 year experience)
                      </a>
                    </li>
                    <li>
                      <a onClick={() => filterByExperience(2, 5)}>
                        Junior (2 year experience)
                      </a>
                    </li>
                    <li>
                      <a onClick={() => filterByExperience(2, 5)}>
                        Associate (2-5 year experience)
                      </a>
                    </li>
                    <li>
                      <a onClick={() => filterByExperience(5, 10)}>
                        Mid-Level (5-10 year experience)
                      </a>
                    </li>
                    <li>
                      <a onClick={() => filterByExperience(10, null)}>
                        Senior (10+ year experience)
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="footer-col">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>
                      <a href="tel:+917738311925">+91 77383 11925</a>
                    </li>
                    <li>
                      <a href="tel:+919717569519">+91 9717569519</a>
                    </li>
                    <li>
                      <a href="#">
                        Shop No 2, <br />
                        Opposite Om Surya apartment, <br />
                        Sawarkar Nagar Thane, <br />
                        Maharashtra, 410206 India
                      </a>
                    </li>
                    <li>
                      <a href="#">Open hours: 8.00-18.00 Mon-Fri</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-bottom">
                <div className="fbottom-left">
                  <p>Copyright's &copy; 2025 IT Team</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
