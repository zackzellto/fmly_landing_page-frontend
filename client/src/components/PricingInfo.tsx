type Props = {
  pricingTier: string;
  price: string;
  features: string[];
  backgroundColor: string;
};

const PricingInfo = (props: Props) => {
  const backgroundColor = props.backgroundColor;

  return (
    <>
      <div className="justify-center  items-center  drop-shadow-xl mt-8">
        <div className="flex justify-center items-center ">
          <div className="bg-white relative -bottom-10 h-[700px] w-[340px] lg:w-[350px] lg:h-[700px] grid-cols-2 rounded-xl">
            <div
              className={`${backgroundColor} relative  drop-shadow-2xl h-[160px] w-[340px] lg:w-[350px] lg:h-[200px] rounded-xl`}
            >
              <h2 className="text-4xl py-4 text-white underline text-center mb-8 font-semibold">
                {props.pricingTier}
              </h2>{" "}
              <h3 className="text-7xl relative bottom-10 text-white text-center mb-8 font-bold">
                ${props.price}
              </h3>
            </div>

            <div className="flex flex-col justify-center items-center mt-8">
              <div className="text-lg underline mb-8">Included Features:</div>
              {props.features.map((feature) => (
                <p className="text-2xl text-center mb-4 font-black">
                  {feature}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingInfo;
