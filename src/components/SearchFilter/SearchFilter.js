import React from "react";

const SearchFilter = ({ onSearchTermChange }) => {
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    onSearchTermChange(searchTerm);
  };

  return <input type="text" placeholder="Search" onChange={handleInputChange} />;
};

export default SearchFilter;
