// Desc: This is the navbar component for the student store
// impots necessary components and libraries
import * as React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";
import codepath_logo from "/../images/codepath_logo.png";

// Navbar component to render the navbar
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-social-icons">
        <a href="/">
          <img
            className="codepath-logo"
            src={codepath_logo}
            alt="CodePath logo"
          />
        </a>
        <div className="social-icons">
          <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} />
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} />
          <FontAwesomeIcon
            icon={faFacebookSquare}
            style={{ color: "#ffffff" }}
          />
        </div>
      </div>
      <div className="nav-bar-items">
        <div className="main-options">
          <Link smooth to="#">
            Home
          </Link>
          <Link smooth to="#about">
            About Us
          </Link>
          <Link smooth to="#contact">
            Contact Us
          </Link>
          <Link smooth to="#products">
            Buy Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
