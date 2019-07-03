import React from "react";
import "./search-box.style.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search-box"
      onChange={handleChange}
      type="search"
      placeholder={placeholder}
    />
  );
};
