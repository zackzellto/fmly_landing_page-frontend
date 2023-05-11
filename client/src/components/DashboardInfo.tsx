import React from "react";
import DashboardMockup from "../assets/DashboardMockup.png";
import CollapsibleCard from "./FeatureDropdown";

type Props = {};

const DashboardInfo = (props: Props) => {
  return (
    <div className=" items-center justify-center">
      <h1 className="text-2xl underline text-center p-8">Dashboard Info</h1>

      <div className="container bg-purple-400 rounded-lg m-auto min-h-screen">
        <div className="row">
          <div className="col-12">
            <img
              className="m-auto drop-shadow-2xl py-8"
              src={DashboardMockup}
              alt="Dashboard Mockup"
            />
            <CollapsibleCard
              title="Bounty Board"
              content="Bounty Board is a feature that rewards children with points for completing tasks assigned by their parents. These points can be redeemed for rewards that the family puts in place, motivating kids to take on household responsibilities."
              backgroundColor="[#FB9B9B]"
            />
            <CollapsibleCard
              title="Dinnertime"
              content="The Calendar feature allows families to keep track of each other’s schedules. This way, parents can easily see when their kids have extracurriculars, and kids can see when their parents are busy with work."
              backgroundColor="pink-400"
            />
            <CollapsibleCard
              title="chat"
              content="The Chat feature allows families to communicate with each other in a safe and secure environment. Parents can send messages to their kids, and kids can send messages to their parents. This way, families can stay connected throughout the day."
              backgroundColor="purple-400"
            />
            <CollapsibleCard
              title="Groceries"
              content="The Grocery List feature allows families to keep track of what groceries they need to buy. Parents can add items to the list, and kids can mark items as purchased. This way, families can stay organized and avoid buying duplicate items."
              backgroundColor="blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardInfo;
