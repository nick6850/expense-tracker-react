import Balance from "./components/Balance";
import History from "./components/History";
import NewTransaction from "./components/NewTransaction";
import { ContextProvider } from "./ContextProvider";

function App() {
  return (
    <main>
      <h3>Expense Tracker</h3>
      <ContextProvider>
        <Balance />
        <History />
        <NewTransaction />
      </ContextProvider>
    </main>
  );
}

export default App;
