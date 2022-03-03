import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { incrementSeconds } from "../../redux/actions/incrementSeconds";
import { decrementSeconds } from "../../redux/actions/decrementSeconds";
import { stopTimer } from "../../redux/actions/stopTimer";

import "../styles/root-style.scss";

export const Seconds = () => {
  const seconds = useSelector((state) => state.seconds);
  const start = useSelector((state) => state.started);
  const dispatch = useDispatch();

  let intervalID = useRef();

  useEffect(() => { //if timer has started, start decrementing seconds
    if (start) {
      intervalID.current = setInterval(() => {
        dispatch(decrementSeconds());
      }, 1000);
    }
    else {
      clearInterval(intervalID.current);
    }
  }, [start, dispatch]);

  useEffect(() => { 
    if(seconds.tens === 0 && seconds.units === 0) {
      if(start !== false) {
        dispatch(stopTimer());
      }
    }
  }, [seconds.tens, seconds.units, dispatch, start])

  const increment = () => {
    if (
      seconds.tens.toString() + seconds.units.toString() ===
      seconds.limit.toString()
    ) {
      return;
    } else {
      dispatch(incrementSeconds());
    }
  };

  const decrement = () => {
    if (seconds.tens === 0 && seconds.units === 0) {
      return;
    } else {
      dispatch(decrementSeconds());
    }
  };

  return (
    <div className="seconds">
      <h6 className="s-title">Seconds</h6>
      <button className="s-up-arrow" onClick={increment}>
        <span>&#10094;</span>
      </button>
      <div className="s-count">
        {seconds.tens}
        {seconds.units}
      </div>
      <button className="s-down-arrow" onClick={decrement}>
        <span>&#10094;</span>
      </button>
    </div>
  );
};
