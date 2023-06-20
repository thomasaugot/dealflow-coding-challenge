import React from "react";
import FreelancerList from "./components/FreelancerList";
import SearchFilter from "./components/SearchFilter";

const App = () => {
  return (
    <div>
      <h1>Dealflow Freelancers</h1>
      <SearchFilter />
      <FreelancerList />
    </div>
  );
};

export default App;
