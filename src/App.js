import React from 'react';
import { useDispatch } from 'react-redux';

import { Timer } from "./components/Timer/Timer";

import { startTimer } from './redux/actions/startTimer';

import "./App.css";

function App() {

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="wrapper">
        <Timer />
        <div className = "btns-wrapper">
          <button className="start-btn" onClick={() => dispatch(startTimer())}>Start</button>
          <button className="pause-btn">Pause</button>
          <button className="reset-btn">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
