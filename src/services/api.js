import axios from "axios";

const fetchFreelancers = async () => {
  try {
    const response = await axios.get("https://api.example.com/freelancers");
    return response.data;
  } catch (error) {
    console.error("Error fetching freelancers:", error);
    return [];
  }
};

export { fetchFreelancers };
