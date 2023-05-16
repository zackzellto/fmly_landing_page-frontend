import DashboardInfo from "./components/DashboardInfo";
import Greeting from "./components/Greeting";
import PremiumFeatures from "./components/PremiumFeatures";
import PricingInfo from "./components/PricingInfo";

function App() {
  return (
    <div className="App p-8">
      <header className="App-header font-black">
        <Greeting />
      </header>
      <body className=" font-black">
        <DashboardInfo />
        <PremiumFeatures />
        <PricingInfo
          pricingTier="Free"
          price="0.00"
          features={["Cash Quest!", "Dinnertime", "Groceries", "fmlyChat"]}
        />
      </body>
    </div>
  );
}

export default App;
