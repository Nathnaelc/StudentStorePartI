// Desc: This is the contact page for the student store
// imports necessary components and libraries
import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import happyGirl from "/../images/happy_person.svg";

// Contact component to render the contact page
export default function Contact() {
  return (
    <div id="contact" className="contact-card">
      <h2 className="contact-title">Contact Us</h2>
      <img src={happyGirl} alt="Happy girl" className="contact-image" />
      <div className="contact-info">
        <p>
          <strong>Email:</strong> code@path.org
        </p>
        <p>
          <strong>Phone:</strong> 1-800-CODEPATH
        </p>
        <p>
          <strong>Address:</strong> 123 Fake Street, San Francisco
        </p>
      </div>

      <div className="social-icons">
        <strong className="socials"> Socials: </strong>
        <a
          href="https://www.facebook.com/codepath.org/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          href="https://www.instagram.com/codepathorg/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/school/codepath-org/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://twitter.com/codepath/status/1463582434746900483/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}
