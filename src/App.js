import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Timer } from "./components/Timer/Timer";

import { startTimer } from './redux/actions/timer/startTimer';
import { stopTimer } from './redux/actions/timer/stopTimer';
import { resetTimer } from './redux/actions/timer/resetTimer';

import "./App.css";

function App() {

  const minutes = useSelector(state => state.time.minutes.tens.toString() + state.time.minutes.units.toString());
  const hours = useSelector(state => state.time.hours.tens.toString() + state.time.hours.units.toString());
  const seconds = useSelector(state => 
    state.time.seconds.tens.toString() + state.time.seconds.units.toString()
  );
  const started = useSelector(state => state.time.started);
  const dispatch = useDispatch();

  const start = () => {
    if(hours !== '00' || minutes !== '00' || seconds !== '00') {
      dispatch(startTimer());
    }
  }

  const stop = () => {
    if(started) {
      dispatch(stopTimer());
    }
  }

  const reset = () => {
      dispatch(resetTimer());
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Timer />
        <div className = "btns-wrapper">
          <button className="start-btn" onClick={start}>Start</button>
          <button className="pause-btn" onClick={stop}>Pause</button>
          <button className="reset-btn" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
