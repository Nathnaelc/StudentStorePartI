// Desc: Searchbar component for the student store
// imports necessary components and libraries
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faQuestionCircle,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./Searchbar.css";

// Searchbar component to render the searchbar
export default function SearchBar({ setSearchbox }) {
  // This function handles the searchbar input
  const handleSearch = (event) => {
    setSearchbox(event.target.value);
  };

  return (
    <div className="search-bar">
      <div className="search-box">
        {/* The searchbar is rendered based on the searchbox state */}
        <input type="text" placeholder="Search" onChange={handleSearch} />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <FontAwesomeIcon icon={faQuestionCircle} className="help-icon" />
      <span className="help-text">Help</span>
      <button className="cart-button">
        My Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
}
