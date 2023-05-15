import FmfMap from "../assets/gmap-png 1.png";
import BountyBoard from "../assets/bountydash.png";

const PremiumFeatures = () => {
  return (
    <div className=" min-h-screen justify-center items-center">
      <div className="font-black underline text-2xl text-center py-8">
        Premium Features
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center lg:mr-8">
          <div className=" bg-[#F3D08D] relative drop-shadow-xl lg:left-[-220px] h-[450px] w-[450px] rounded-full">
            <img
              src={FmfMap}
              alt="Find My fmly Map"
              className="h-96 w-96 relative top-8 p-8 px-6 m-auto"
            />
            <div className="relative lg:left-[500px] lg:top-[-350px] flex text-4xl p-16 drop-shadow-md py-24 ">
              Find My <br /> <div className="ml-1 text-white">fmly</div>{" "}
            </div>
            <span className="text-center tracking-wide relative lg:top-[-400px] lg:left-[500px] top-[-80px] text-[18px] font-semibold">
              A premium feature that allows all of your fmly members to be found
              via GPS tracking*, providing peace of mind and comfort...Or to
              pick something up on their way home... :)
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center lg:mr-8 mt-80">
          <div className=" bg-[#5676cf] drop-shadow-xl lg:h-[500px] relative lg:left-[670px] lg:top-[-250px] rotate-12 h-80 w-80 rounded-md">
            <img
              src={BountyBoard}
              alt="Bounty Board"
              className=" h-full rotate-1 relative p-8 px-6 m-auto"
            />
          </div>
        </div>
        <div className=" flex text-4xl relative lg:top-[-220px] lg:right-52  text-rose-400 drop-shadow-md md: py-16">
          bountyboard
        </div>
        <span className="text-center  lg:top-[-80px] tracking-wide w-[400px] lg:w-[500px] relative lg:right-[596px] top-[-50px] text-[18px] font-semibold">
          The bountyboard®, the new way to turn boring household chores into an
          exciting and rewarding game! With bountyboard®, you and your family
          can earn points and rewards for completing a variety of household
          tasks, making cleaning and organizing your home a fun and engaging
          activity, while also adding a bit of friendly competition!
        </span>
      </div>
      <div className="bg-white rounded-lg h-2 w-[80%]  m-auto relative"></div>
    </div>
  );
};

export default PremiumFeatures;
