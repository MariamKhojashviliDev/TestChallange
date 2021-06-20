import Form from "./Components/Form";
import { HistoryContextProvider } from "./Context/history";
import ChartDrawer from "./Components/Chart";
import InfoBox from "./Components/Info";

function App() {
  return (
    <HistoryContextProvider>
      <Form />
      <ChartDrawer />
      <InfoBox />
    </HistoryContextProvider>
  );
}

export default App;
