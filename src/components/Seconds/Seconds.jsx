import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { incrementSeconds } from "../../redux/actions/seconds/incrementSeconds";
import { decrementSeconds } from "../../redux/actions/seconds/decrementSeconds";

import "../styles/root-style.scss";

export const Seconds = () => {
  const seconds = useSelector((state) => state.time.seconds);
  const dispatch = useDispatch();

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
