import React from "react";
import "./About.css";
import codepath_icon from "/../images/codepath_icon.svg";

export default function About() {
  return (
    <div id="about" className="about">
      <div className="content">
        <h3>About</h3>
        <div className="summary">
          <div className="text">
            <p>
              The codepath student store offers great products at great <br />
              prices from a great team and for a great cause.
              <br />
              <br />
              We've searched far and wide for items that perk the
              <br /> interests of even the most eccentric students and decided
              <br /> to offer them all here in one place. <br /> <br /> All
              proceeds go towards bringing high quality CS education <br /> to
              college students around the country.
            </p>
          </div>
          <div className="media">
            <img src={codepath_icon} alt="codepath icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
