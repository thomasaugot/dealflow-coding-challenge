import React, { useEffect, useState } from "react";
import { fetchFreelancers } from "../services/api";

const FreelancerList = () => {
  const [freelancers, setFreelancers] = useState([]);

  useEffect(() => {
    const loadFreelancers = async () => {
      const data = await fetchFreelancers();
      setFreelancers(data);
    };

    loadFreelancers();
  }, []);

  return (
    <div>
      <h1>Freelancers</h1>
      <ul>
        {freelancers.map((freelancer) => (
          <li key={freelancer.id}>
            {freelancer.firstName} {freelancer.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FreelancerList;
