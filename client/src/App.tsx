import DashboardInfo from "./components/DashboardInfo";
import Greeting from "./components/Greeting";
import PremiumFeatures from "./components/PremiumFeatures";

function App() {
  return (
    <div className="App p-8">
      <header className="App-header font-black">
        <Greeting />
      </header>
      <body className=" font-black">
        <DashboardInfo />
        <PremiumFeatures />
      </body>
    </div>
  );
}

export default App;
