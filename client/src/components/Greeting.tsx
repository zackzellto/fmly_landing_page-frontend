import React from "react";
import Waitlist from "./Waitlist";
import { addToWaitlist } from "../api/waitlistAPI";
import WoodenHand from "../assets/wooden-hand.png";
import PlayStore from "../assets/play_store.png";
import AppStore from "../assets/app_store.png";

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
      <div className="font-black lg:left-[40px] lg:max-w-3xl lg:mt-[50px] text-center relative text-[55px] md:text-[96px] ">
        Get organized with{" "}
        <span className="text-white  drop-shadow-lg" id="paytone-one">
          fmly
        </span>
      </div>
      <img
        src={WoodenHand}
        alt="Wooden Hand"
        className="mx-auto z-0 h-[270px] md:h-[480px] mt-8 relative animate-bounce-slow lg:h-[700px] lg:left-[550px] xl:left-[400px] "
      />
      <div className="">
        <p className=" flex text-center text-[18px] md:text-[20px] lg:bottom-[650px] lg:max-w-3xl  lg:left-8 relative py-6">
          Our app makes family management much more efficient. Communicate,
          manage tasks, and always have peace of mind with location sharing, all
          in one platform.
        </p>

        {/* <div className="bg-[#48ddc9] rounded-lg lg:h-8 w-[20%] m-auto z-10 relative top-[-310px] "></div> */}
        <p className="text-[14px] text-center font-semibold lg:max-w-xl lg:left-[140px] relative lg:bottom-[600px] px-8 ">
          Interested in trying out fmly? Then join the waitlist and be one of
          the first to use fmly once it is released!
          <Waitlist onSubmit={handleSubmit} />
        </p>
        <p className="flex items-center text-center text-[14px] font-semibold lg:max-w-xl lg:left-[140px] relative lg:bottom-[600px] px-8 py-8 justify-between ">
          <img src={PlayStore} alt="Play Store" className="h-12" />
          <img src={AppStore} alt="App Store" className="h-12" />
        </p>
        <div className="bg-white rounded-lg h-2 w-[80%]  m-auto relative"></div>
      </div>
    </div>
  );
};

export default Greeting;
