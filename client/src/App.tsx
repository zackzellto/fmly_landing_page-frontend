import Waitlist from "./components/Waitlist";
import { addToWaitlist } from "./api/waitlistAPI";

function App() {
  const handleSubmit = async (email: string) => {
    try {
      await addToWaitlist(email);
      console.log("Email successfully added to waitlist");
    } catch (error) {
      console.error("Error adding email to waitlist", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Waitlist onSubmit={handleSubmit} />
      </header>
    </div>
  );
}

export default App;
