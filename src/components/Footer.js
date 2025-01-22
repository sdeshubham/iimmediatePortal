import React from "react";
import "../stylesheets/Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import WebsiteLogo from "../images/mainLogo.svg";
import { Link } from "react-router-dom";
import ITTeamLogoOne from "../images/ITTeamLogoOne.png"
import ITTeamLogoTwo from "../images/ITTeamLogoTwo.png"  

const Footer = () => {
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
                    <li>
                      <a href="/contactus">Help Center</a>
                    </li>
                    <li>
                      <a href="#">FAQ's</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h3>Hunt By Location</h3>
                  <ul>
                    <li>
                      <a href="#">Mumbai</a>
                    </li>
                    <li>
                      <a href="#">Pune</a>
                    </li>
                    <li>
                      <a href="#">Noida</a>
                    </li>
                    <li>
                      <a href="#">Delhi</a>
                    </li>
                    <li>
                      <a href="#">Banglore</a>
                    </li>
                    <li>
                      <a href="#">Hydrabad</a>
                    </li>
                    <li>
                      <a href="#">Ahmdabad</a>
                    </li>
                    <li>
                      <a href="#">Indore</a>
                    </li>
                    <li>
                      <a href="#">Chennai</a>
                    </li>
                    <li>
                      <a href="#">Surat</a>
                    </li>
                    <li>
                      <a href="#">Mohali</a>
                    </li>
                    <li>
                      <a href="#">Kochi</a>
                    </li>
                    <li>
                      <a href="#">Jaipur</a>
                    </li>
                    <li>
                      <a href="#">Kolkata</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h3>Hunt By Technology Stack</h3>
                  <ul>
                    <li>
                      <a href="#">ReactJs</a>
                    </li>
                    <li>
                      <a href="#">Java</a>
                    </li>
                    <li>
                      <a href="#">JavaScript</a>
                    </li>
                    <li>
                      <a href="#">Angular</a>
                    </li>
                    <li>
                      <a href="#">TypeScript</a>
                    </li>
                    <li>
                      <a href="#">Python</a>
                    </li>
                    <li>
                      <a href="#">MySQL</a>
                    </li>
                    <li>
                      <a href="#">MongoDB</a>
                    </li>
                    <li>
                      <a href="#">NodeJs</a>
                    </li>
                    <li>
                      <a href="#">Flutter</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-col">
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
                </div>
                <div className="footer-col">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>
                      <a href="#">+91 77383 11925</a>
                    </li>
                    <li>
                      <a href="#">+91 9717569519</a>
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

              {/* <div className="footer-social-icon">
                <ul>
                  <li>
                    <a href="#">
                      <FaFacebookSquare />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaSquareInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaSquareXTwitter />
                    </a>
                  </li>
                </ul>
              </div> */}
              <div className="footer-bottom">
                <div className="fbottom-left">
                  <a href="/home">
                    {/* <img src={ITTeamLogoTwo} alt="Logo" /> */}
                  </a>
                  <p>Copyright's &copy; 2025 IT Team</p>
                </div>
                {/* <div className="fbottom-right flex">
                  <ul>
                    <li>
                      <a href="/home">Home</a>
                    </li>
                    <li>
                      <a href="/aboutus">About Us</a>
                    </li>
                    <li>
                      <a href="/contactus">Contact Us</a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
