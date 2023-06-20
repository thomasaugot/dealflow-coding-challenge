import React from "react";
import { render, screen } from "@testing-library/react";
import FreelancerList from "./FreelancerList";

// Mock the freelancers data
const mockFreelancers = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
  },
];

describe("FreelancerList", () => {
  it("renders the list of freelancers", () => {
    render(<FreelancerList freelancers={mockFreelancers} />);

    // Assert that the freelancer names are rendered
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  it("displays the correct number of pages", () => {
    render(<FreelancerList freelancers={mockFreelancers} />);

    // Assert that there is only one page since there are only two freelancers
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.queryByText("2")).not.toBeInTheDocument();
  });
});
