import DashboardInfo from "./components/DashboardInfo";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="App p-8">
      <header className="App-header">
        <Greeting />
        <DashboardInfo />
      </header>
    </div>
  );
}

export default App;
