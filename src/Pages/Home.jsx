import React, { useState } from "react";
import slider from "./Images/slider1.jpg";
import slider3 from "./Images/Slider3.jpg";
import card from "./Images/coding1.jpg";
import card2 from "./Images/card2.jpg";
import card3 from "./Images/card3.jpg";
import slider2 from "./Images/developer.jpg";
// import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Home.css";

function Home() {
  const [sliderIndex, setSliderIndex] = useState(0);

  const sliders = [
    {
      image: slider2,
    },
    {
      image: slider3,
    },
    {
      image: slider,
    },
  ];

  const handleSliderChange = (index) => {
    setSliderIndex(index);
  };

  return (
    <div className="Home">
      <header>
        <h1>
          Welcome to <span>My Website</span>
        </h1>
      </header>
      <div className="slider-container">
        {sliders.map((slider, index) => (
          <div
            key={index}
            className={`slider-card ${sliderIndex === index ? "active" : ""}`}
          >
            <img src={slider.image} alt={slider.title} />
            <div className="slider-card-content">
              <h2>{slider.title}</h2>
              <p>{slider.description}</p>
            </div>
          </div>
        ))}
        <div className="slider-dots">
          {sliders.map((slider, index) => (
            <span
              key={index}
              className={`slider-dot ${sliderIndex === index ? "active" : ""}`}
              onClick={() => handleSliderChange(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={card} alt="animals" />

          <div className="card-content">
            <h2>Coding</h2>
            <p>
              Coding is the art of turning complex ideas into simple, efficient,
              and elegant solutions.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={card2} alt="food" />
          <div className="card-content">
            <h2>Developer</h2>
            <p>
              Developers are the architects of the digital world, responsible
              for creating the software that powers our lives.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={card3} alt="people" />
          <div className="card-content">
            <h2>Programming</h2>
            <p>
              Programming is the ultimate problem-solving tool, empowering
              individuals to create innovative solutions to a wide range of
              challenges.
            </p>
          </div>
        </div>
      </div>
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
  );
}

export default Home;
