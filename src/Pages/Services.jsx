import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // handle sending message logic here
    console.log("Sending message:", message);
  };

  return (
    <div className="services-page">
      <div className="services-section">
        <h1>Our Services</h1>
        <div className="services-container">
          <div className="service-card">
            <h2>Web Development</h2>
            <p>
              "Looking for professional web development services? Look no
              further than Ali Raza! With expertise in a range of programming
              languages and a focus on creating custom solutions tailored to
              your specific needs, Ali Raza can help bring your website vision
              to life. Contact us today to learn more."
            </p>
          </div>
          <div className="service-card">
            <h2>Mobile App Development</h2>
            <p>
              "Looking for professional Mobile App Development services? Look no
              further than Ali Raza! With expertise in a range of programming
              languages and a focus on creating custom solutions tailored to
              your specific needs, Ali Raza can help bring your website vision
              to life. Contact us today to learn more."
            </p>
          </div>
        </div>
      </div>
      <div className="contact-section">
        <h1>Contact Us</h1>
        <div className="contact-form">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
