import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchFilter from "../components/SearchFilter/SearchFilter";
import "@testing-library/jest-dom/extend-expect";

describe("SearchFilter", () => {
  it("calls the onSearchTermChange callback with the entered search term", () => {
    const mockOnSearchTermChange = jest.fn();
    render(<SearchFilter onSearchTermChange={mockOnSearchTermChange} />);

    const searchInput = screen.getByPlaceholderText("Search");

    // Simulate user typing in the search input
    fireEvent.change(searchInput, { target: { value: "John" } });

    // Assert that the callback is called with the entered search term
    expect(mockOnSearchTermChange).toHaveBeenCalledWith("John");
  });
});
