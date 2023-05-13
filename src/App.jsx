import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Pages/Home.css";
// import "../src/App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";
import SignUp from "./Pages/SignUp";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
      <footer className="footer">
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
      </footer>
    </>
  );
}

export default App;
