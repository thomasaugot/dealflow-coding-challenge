import React, { useEffect, useState } from "react";
import { chunk } from "lodash"; // Importing the lodash chunk function for pagination

const FreelancerList = ({ freelancers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Set the number of items per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(freelancers.length / itemsPerPage);

  // Get the freelancers to display for the current page
  const paginatedFreelancers = chunk(freelancers, itemsPerPage)[currentPage - 1] || [];

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Freelancers</h1>
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
