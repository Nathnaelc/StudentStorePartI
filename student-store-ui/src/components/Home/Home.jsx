// imports necessary modules and styling for the Home component
import * as React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// Home component to render the sidebar and the tabs
export default function Home({ activeTab, setActiveTab }) {
  const [sidebar, setSidebar] = useState(false);

  // This function toggles the sidebar
  const toggleMenu = () => {
    setSidebar(!sidebar); // toggles the sidebar
  };

  return (
    // The sidebar is hidden by default, but when the menu-container is clicked, the sidebar is shown
    <div id="home" className="home">
      <div className="menu">
        <div className="menu-container" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`tabs ${!sidebar ? "show" : ""}`}>
          {/* The tabs are rendered based on the activeTab state */}
          <div
            className={`tab ${activeTab === "all categories" ? "active" : ""}`}
            onClick={() => setActiveTab("all categories")}
          >
            All Categories
          </div>
          <div
            className={`tab ${activeTab === "clothing" ? "active" : ""}`}
            onClick={() => setActiveTab("clothing")}
          >
            Clothing
          </div>
          <div
            className={`tab ${activeTab === "food" ? "active" : ""}`}
            onClick={() => setActiveTab("food")}
          >
            Food
          </div>
          <div
            className={`tab ${activeTab === "accessories" ? "active" : ""}`}
            onClick={() => setActiveTab("accessories")}
          >
            Accessories
          </div>
          <div
            className={`tab ${activeTab === "tech" ? "active" : ""}`}
            onClick={() => setActiveTab("tech")}
          >
            Tech
          </div>
        </div>
      </div>
    </div>
  );
}
