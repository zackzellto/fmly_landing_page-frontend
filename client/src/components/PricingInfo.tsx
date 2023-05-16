import React from "react";

type Props = {
  pricingTier: string;
  price: string;
  features: string[];
};

const PricingInfo = (props: Props) => {
  return (
    <div className="justify-center items-center mt-8 min-h-screen">
      <h1 className="text-4xl text-center mb-8 font-black">Pricing</h1>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl text-center mb-8 font-black">
            {props.pricingTier}
          </h2>
          <h3 className="text-2xl text-center mb-8 font-black">
            ${props.price}
          </h3>

          <div className="flex flex-col justify-center items-center">
            {props.features.map((feature) => (
              <p className="text-xl text-center mb-8 font-black">{feature}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingInfo;
