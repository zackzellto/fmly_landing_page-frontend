const baseURL = "https://fmly-landing-page-backend.herokuapp.com/api/waitlist";

export const addToWaitlist = async (email: string) => {
  try {
    const response = await fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Failed to add email to waitlist");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error adding email to waitlist", error);
    throw error;
  }
};
