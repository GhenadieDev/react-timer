import "./App.css";

import { Timer } from "./components/Timer/Timer";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Timer />
        <div className = "btns-wrapper">
          <button className="start-btn">Start</button>
          <button className="pause-btn">Pause</button>
          <button className="reset-btn">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
