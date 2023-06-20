import React, { useEffect, useState } from "react";
import FreelancerList from "./components/FreelancerList/FreelancerList";
import { fakerEN as faker } from "@faker-js/faker";

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
      <FreelancerList freelancers={freelancers} />
    </div>
  );
};

export default App;
