import React, { useEffect, useState } from "react";
import { chunk } from "lodash";
import SearchFilter from "../SearchFilter/SearchFilter";

const FreelancerList = ({ freelancers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50); // Set the number of items per page
  const [searchTerm, setSearchTerm] = useState("");

  // search bar logic
  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  const filteredFreelancers = freelancers.filter((freelancer) => {
    const fullName = `${freelancer.firstName} ${freelancer.lastName}`;
    return (
      fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      freelancer.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredFreelancers.length / itemsPerPage);

  // Get the freelancers to display for the current page
  const paginatedFreelancers = chunk(filteredFreelancers, itemsPerPage)[currentPage - 1] || [];

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    // Reset current page when items per page changes
    setCurrentPage(1);
  }, [itemsPerPage]);

  return (
    <div>
      <h1>Freelancers</h1>
      <SearchFilter onSearchTermChange={handleSearchTermChange} />
      <ul>
        {paginatedFreelancers.map((freelancer) => (
          <li key={freelancer.id}>
            <div>
              <strong>Name:</strong> {freelancer.firstName} {freelancer.lastName}
            </div>
            <div>
              <strong>Email:</strong> {freelancer.email}
            </div>
          </li>
        ))}
      </ul>

      <div>
        {/* Render pagination controls */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FreelancerList;
