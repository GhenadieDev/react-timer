import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { incrementMinutes } from "../../redux/actions/incrementMinutes";
import { decrementMinutes } from "../../redux/actions/decrementMinutes";

import "../styles/root-style.scss";
import { useEffect } from "react";

export const Minutes = () => {
  const minutes = useSelector((state) => state.time.minutes);
  const dispatch = useDispatch();

  const decrement = () => {
    if(minutes.tens === 0 && minutes.units === 0) {
      return;
    }
    else {
      dispatch(decrementMinutes());
    }
  }

  const increment = () => {
    if((minutes.tens.toString() + minutes.units.toString()) === minutes.limit.toString()) {
      return
    }
    else {
      dispatch(incrementMinutes());
    }
  }

  return (
    <div className="minutes">
      <h6 className="m-title">Minutes</h6>
      <button className="m-up-arrow" onClick={increment}>
        <span>&#10094;</span>
      </button>
      <div className="m-count">{minutes.tens}{minutes.units}</div>
      <button className="m-down-arrow" onClick={decrement}>
        <span>&#10094;</span>
      </button>
    </div>
  );
};
