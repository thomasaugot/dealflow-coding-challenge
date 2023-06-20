import React, { useEffect, useState } from "react";
import FreelancerList from "./components/FreelancerList/FreelancerList";
import { fakerEN as faker } from "@faker-js/faker";
import "./App.css";

const fetchFreelancers = async () => {
  try {
    // Generate fake data (1000 data points)
    const data = Array.from({ length: 1000 }).map((_, index) => ({
      id: index + 1,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    }));

    return data;
  } catch (error) {
    console.error("Error fetching freelancers:", error);
    return [];
  }
};

// if the API was exisiting, I would have used:

// const fetchFreelancers = async () => {
//   try {
//     const response = await axios.get("/freelancers");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching freelancers:", error);
//     return [];
//   }
// };

const App = () => {
  const [freelancers, setFreelancers] = useState([]);

  useEffect(() => {
    const getFreelancers = async () => {
      const fetchedFreelancers = await fetchFreelancers();
      setFreelancers(fetchedFreelancers);
    };

    getFreelancers();
  }, []);

  return (
    <div className="app">
      <img
        src="https://cdn.dorik.com/6004891a44afdb0011b84555/610faa2684b952001f122dee/images/Dealflow-name_m27ohleh.png"
        alt="dealflow-logo"
        className="logo"
      />
      <FreelancerList freelancers={freelancers} />
    </div>
  );
};

export default App;
