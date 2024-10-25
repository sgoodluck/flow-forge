import { Chart } from "./components/Chart";
import { ReactFlowProvider } from "reactflow";

function App() {
  return (
    <ReactFlowProvider>
      <Chart />
    </ReactFlowProvider>
  );
}

export default App;
