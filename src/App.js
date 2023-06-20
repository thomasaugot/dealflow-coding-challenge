import React, { useEffect, useState } from "react";
import FreelancerList from "./components/FreelancerList/FreelancerList";
import { fakerEN as faker } from "@faker-js/faker";
import "./App.css";

const fetchFreelancers = async () => {
  try {
    // Generate fake data (1000 data points)
    const data = Array.from({ length: 1000 }).map((_, index) => ({
      id: index + 1,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      jobTitle: faker.person.jobTitle(),
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
      <div className="thumbnails">
        <img
          src="https://cdn.dorik.com/6004891a44afdb0011b84555/610faa2684b952001f122dee/images/Screenshot-2021-11-17-at-17.08.56_yynrpmcx.png"
          alt="Thumbnail 1"
        />
        <img
          src="https://cdn.dorik.com/6004891a44afdb0011b84555/610faa2684b952001f122dee/images/Screenshot-2021-11-17-at-17.06.01_d0i7pf6k.png"
          alt="Thumbnail 2"
          style={{ marginRight: 30 }}
        />
        <img
          src="https://cdn.dorik.com/6004891a44afdb0011b84555/610faa2684b952001f122dee/images/Screenshot-2021-11-17-at-16.56.37_kcw41f2l.png"
          alt="Thumbnail 3"
        />
      </div>
    </div>
  );
};

export default App;
