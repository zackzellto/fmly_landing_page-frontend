import React from "react";
import Waitlist from "./Waitlist";
import { addToWaitlist } from "../api/waitlistAPI";
import WoodenHand from "../assets/wooden-hand.svg";

const handleSubmit = async (email: string) => {
  try {
    await addToWaitlist(email);
    console.log("Email successfully added to waitlist");
  } catch (error) {
    console.error("Error adding email to waitlist", error);
  }
};

const Greeting = () => {
  return (
    <div className="container justify-center items-center m-auto ">
      <div className="font-extrabold text-center relative px-8 text-[45px] md:text-[96px] ">
        Get organized with{" "}
        <span className="text-white font-['Paytone One'] drop-shadow-lg ">
          fmly
        </span>
      </div>
      <div>
        <p className=" flex text-center text-[16px] relative px-4 py-2">
          Our app makes family management much more efficient. Communicate,
          manage tasks, and always have peace of mind with location sharing, all
          in one platform.
        </p>
        <img
          src={WoodenHand}
          alt="Wooden Hand"
          className="mx-auto h-[270px] relative"
        />
        <p className="text-[14px] text-center font-semibold relative px-8">
          Interested in trying out fmly? Then join the waitlist and be one of
          the first to use fmly once it is released!
          <Waitlist onSubmit={handleSubmit} />
        </p>
      </div>
    </div>
  );
};

export default Greeting;
