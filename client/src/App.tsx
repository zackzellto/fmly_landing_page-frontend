import DashboardInfo from "./components/DashboardInfo";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="App p-8">
      <header className="App-header">
        <Greeting />
      </header>
      <body>
        <DashboardInfo />
      </body>
    </div>
  );
}

export default App;
