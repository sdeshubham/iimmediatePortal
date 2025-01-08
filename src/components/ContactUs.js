import React from "react";
import "../stylesheets/ContactUs.css";
import { IoMdHome } from "react-icons/io";
import { TbPhoneCall } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <div className="contactBox">
        <div className="contactContainer">
          <div className="contact-head">
            <h1>Contact Us</h1>
            <div className="contactTop">
              <Link to="/home">Home</Link> {"/"}
              <Link to="/contactus">Contact us</Link>
            </div>
          </div>
        </div>
        <div className="contact-content">
          <div className="contact-left">
            <h2>Get In Touch With Us</h2>
            <p className="ContactleftContent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nisi
              laboriosam soluta, velit quam, cum, excepturi dignissimos ipsam
              numquam exercitationem accusantium voluptas atque fugiat
              voluptatum ratione!
            </p>
            <div className="contact-details">
              <span>
                <IoMdHome />
              </span>
              <div className="contact-detail">
                <h3>Our Location</h3>
                <p>Shop No 2, Veer Sawarkar Nagar Thane west, 400606</p>
              </div>
            </div>
            <div className="contact-details">
              <span>
                <TbPhoneCall />
              </span>
              <div className="contact-detail">
                <h3>Contact Number</h3>
                <p>+91 77383 11925</p>
                <p>+91 9717569519</p>
              </div>
            </div>
            <div className="contact-details">
              <span>
                <IoIosMail />
              </span>
              <div className="contact-detail">
                <h3>Email Address</h3>
                <p>info@sovtechnologies.com</p>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-form">
              <form className="contactForm-input">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <input type="number" placeholder="Your Phone" />
                <input type="text" placeholder="Your Message" />
                <button>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
