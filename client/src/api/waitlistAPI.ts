import axios from "axios";

const baseURL = "http://127.0.0.1:5000/api/waitlist";

export const addToWaitlist = async (email: string) => {
  const response = await axios.post(baseURL, { email });
  console.log(response.data);
  return response.data;
};
