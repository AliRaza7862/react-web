import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "./my-logo.png";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img
          style={{ heigh: "150px", width: "170px", marginLeft: "40px" }}
          src={logo}
          alt="logo"
        />
      </Link>
      <div className="menu-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
