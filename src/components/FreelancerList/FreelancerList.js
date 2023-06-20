import React, { useEffect, useState } from "react";
import { chunk } from "lodash";
import SearchFilter from "../SearchFilter/SearchFilter";
import "./FreelancerList.css";

const FreelancerList = ({ freelancers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20); // Set the number of items per page
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

  const handleGetInTouch = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxDisplayedPages = 5;

    if (totalPages <= maxDisplayedPages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const isNearStart = currentPage <= Math.ceil(maxDisplayedPages / 2);
      const isNearEnd = currentPage >= totalPages - Math.floor(maxDisplayedPages / 2);

      if (isNearStart) {
        for (let i = 1; i <= maxDisplayedPages - 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (isNearEnd) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - (maxDisplayedPages - 2); i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");

        const startPage = currentPage - Math.floor(maxDisplayedPages / 2);
        const endPage = currentPage + Math.ceil(maxDisplayedPages / 2) - 1;

        for (let i = startPage; i <= endPage; i++) {
          pageNumbers.push(i);
        }

        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div>
      <h1 className="subtitle">Browse Dealflow's Freelancers</h1>
      <SearchFilter onSearchTermChange={handleSearchTermChange} />
      <div className="list-container">
        {paginatedFreelancers.map((freelancer) => (
          <div key={freelancer.id} className="list-item">
            <div className="freelancer-name">
              {freelancer.firstName} {freelancer.lastName}
            </div>
            <div>
              <a
                href={`mailto:${freelancer.email}`}
                onClick={() => handleGetInTouch(freelancer.email)}
                className="contact-button"
                onMouseOver={(e) => (e.target.style.transform = "scale(0.9)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              >
                Get in touch
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-container">
        {/* Render pagination controls */}
        <button onClick={goToPreviousPage} disabled={currentPage === 1} className="page-control">
          {"<"}
        </button>
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            disabled={currentPage === page}
            className="page-number"
          >
            {page}
          </button>
        ))}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="page-control"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default FreelancerList;
