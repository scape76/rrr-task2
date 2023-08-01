import Dashboard from "./Dashboard";
import { Header } from "./Header";

function App() {
  return (
    <div className="container max-w-5xl">
      <Header title="Notes" description="Manage your notes" className="my-4"/>
      <Dashboard />
    </div>
  );
}

export default App;
