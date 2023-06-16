import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcAmex,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h4>Categories</h4>
          <ul>
            <li>All Categories</li>
            <li>Clothing</li>
            <li>Food</li>
            <li>Accessories</li>
            <li>Tech</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Find a Store</li>
            <li>Terms</li>
            <li>Sitemap</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>Money Refund</li>
            <li>Order Status</li>
            <li>Shipping Info</li>
            <li>Open Dispute</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Account</h4>
          <ul>
            <li>Login</li>
            <li>Register</li>
            <li>Account Setting</li>
            <li>My Orders</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Socials</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Our App</h4>
          <ul>
            <li>
              <FontAwesomeIcon icon={faApple} /> App Store
            </li>
            <li>
              <FontAwesomeIcon icon={faGooglePlay} /> Google Play
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="payment-icons">
        <FontAwesomeIcon icon={faCcAmex} />
        <FontAwesomeIcon icon={faCcMastercard} />
        <FontAwesomeIcon icon={faCcPaypal} />
        <FontAwesomeIcon icon={faCcVisa} />
      </div>
    </footer>
  );
}
