import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { incrementHours } from "../../redux/actions/incrementHours";
import { decrementHours } from "../../redux/actions/decrementHours";

import "../styles/root-style.scss";

export const Hours = () => {

  const hours = useSelector(state => state.hours);
  const dispatch = useDispatch();

  const decrement = () => {
    if(hours.tens === 0 && hours.units === 0) {
      return;
    }
    else {
      dispatch(decrementHours());
    }
  }

  return (
    <div className="hours">
      <h6 className="h-title">Hours</h6>
      <button className="h-up-arrow" onClick={() => dispatch(incrementHours())}>
        <span>&#10094;</span>
      </button>
      <div className="h-count">
        {hours.tens}{hours.units}
      </div>
      <button className="h-down-arrow" onClick={decrement}>
        <span>&#10094;</span>
      </button>
    </div>
  );
};
