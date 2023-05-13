import React from "react";
// import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";
import { AiFillLinkedin } from "react-icons/ai";
import codingImage from "./Images/coding.jpg";
import techImage from "./Images/technology.webp";
import freelance from "./Images/freelance.png";
import my from "./Images/my.png";

import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1>
        <u>About Me</u>
      </h1>
      <div className="developer-container">
        <img
          style={{ height: "350px", width: "350px", borderRadius: "30px" }}
          src={my}
          alt="coding"
        />

        <div className="developer-info">
          <p style={{ fontSize: "20px", fontFamily: "revert-layer" }}>
            I'm Ali Raza, a web & mobile app developer based in [Hyd, Pakistan].
            I specialize in creating beautiful, responsive, and user-friendly
            websites and mobile applications that provide a great user
            experience.
          </p>
          <p style={{ fontSize: "20px", fontFamily: "revert-layer" }}>
            With [Two] years of experience in the field, I have gained expertise
            in [Web & Mobile App Development]. My passion for coding and
            creativity drives me to always learn and improve my skills.
          </p>
        </div>
      </div>
      <div className="hobbies-container">
        <h2>My Hobbies</h2>
        <div className="hobby">
          <img
            style={{ height: "200px", width: "250px", borderRadius: "15px" }}
            src={codingImage}
            alt="coding"
          />
          <p>[coding]</p>
        </div>
        <div className="hobby">
          <img
            style={{ height: "200px", width: "250px", borderRadius: "15px" }}
            src={freelance}
            alt="technology"
          />
          <p>[Freelance]</p>
        </div>
        <div className="hobby">
          <img
            style={{ height: "200px", width: "250px", borderRadius: "15px" }}
            src={techImage}
            alt="technology"
          />
          <p>[Technology]</p>
        </div>
      </div>
      <div className="contact-container">
        <h2 style={{ display: "flex", alignItems: "center" }}>
          <FaHandshake style={{ marginRight: "0.5rem" }} /> Get In Touch
        </h2>
        <div className="contact-info">
          <img
            style={{
              height: "350px",
              width: "350px",
              borderRadius: "30px",
              transition: "transform 0.2s",
            }}
            src={my}
            alt="coding"
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />

          <div>
            <p>Feel free to get in touch with me via:</p>
            <ul>
              <li>
                <MdEmail /> Email: [ar2059789@gmail.com]
              </li>
              <li>
                <FcPhoneAndroid /> Phone: [0318-2375632]
              </li>
              <li>
                <AiFillLinkedin /> LinkedIn: [Ali Raza Siddiqui]
              </li>
            </ul>
            <div className="social-media-icons">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              {/* <footer className="footer">
                <div className="left-icons">
                  <a href="https://www.linkedin.com/">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com/">
                    <FaTwitter />
                  </a>
                  <a href="https://www.instagram.com/">
                    <FaInstagram />
                  </a>
                </div>
                <div className="right-name">
                  <p>Ali Raza</p>
                </div>
                <div className="bottom-text">
                  <p>&copy; 2023 My Website. All Rights Reserved.</p>
                </div>
              </footer> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
