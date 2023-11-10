import Balance from "./components/Balance";
import History from "./components/History";
import NewTransaction from "./components/NewTransaction";
import { ContextProvider } from "./ContextProvider";

function App() {
  return (
    <main>
      <h1>Expense Tracker</h1>
      <ContextProvider>
        <Balance />
        <History />
        <NewTransaction />
      </ContextProvider>
    </main>
  );
}

export default App;
