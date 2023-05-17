import axios from "axios";

const baseURL = "https://fmly-landing-page-backend.herokuapp.com/api/waitlist";

export const addToWaitlist = async (email: string) => {
  const response = await axios.post(baseURL, { email });
  console.log(response.data);
  return response.data;
};
