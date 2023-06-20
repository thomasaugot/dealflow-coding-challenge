import React from "react";
import "./SearchFilter.css";

const SearchFilter = ({ onSearchTermChange }) => {
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    onSearchTermChange(searchTerm);
  };

  return (
    <input
      type="text"
      placeholder="Find a Freelancer"
      onChange={handleInputChange}
      className="search-input"
    />
  );
};

export default SearchFilter;
