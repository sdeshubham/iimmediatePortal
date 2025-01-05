import React from "react";
import "../stylesheets/Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import WebsiteLogo from "../images/WebsiteLogo.png";
import { Link } from "react-router-dom";

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
                      <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contactus">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/privacy&policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/terms&condition">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="/contactus">Help Center</Link>
                    </li>
                    <li>
                      <Link to="#">FAQ's</Link>
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
                      <a href="#">jaipur</a>
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
                      <a href="#">Fresher</a>
                    </li>
                    <li>
                      <a href="#">Junior</a>
                    </li>
                    <li>
                      <a href="#">Assosiate</a>
                    </li>
                    <li>
                      <a href="#">Mid-Level</a>
                    </li>
                    <li>
                      <a href="#">senior</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>
                      <a href="#">+91 8879881***</a>
                    </li>
                    <li>
                      <a href="#">+91 7738311***</a>
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

              <div className="footer-social-icon">
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
              </div>
              <div className="footer-bottom">
                <div className="fbottom-left">
                  <a href="/home">
                    <img src={WebsiteLogo} alt="Logo" />
                  </a>
                  <p>Copyright's &copy; 2024 SOV Technologies</p>
                </div>
                <div className="fbottom-right flex">
                  <ul>
                    <li>
                      <a href="/home">Home</a>
                    </li>
                    <li>
                      <a href="/aboutus">About Us</a>
                    </li>
                    {/* <li>
                    <a href="/pricing">Pricing</a>
                  </li> */}
                    <li>
                      <a href="/contactus">Contact Us</a>
                    </li>
                  </ul>
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
