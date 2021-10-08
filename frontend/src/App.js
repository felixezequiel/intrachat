import './index.css'
import { GlobalState } from './provider/globalState';
import { Routes } from "./routes";

function App() {
  return (
    <GlobalState>
      <Routes />
    </GlobalState>
  );
}

export default App;
