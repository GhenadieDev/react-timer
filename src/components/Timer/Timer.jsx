import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Hours } from "../Hours/Hours";
import { Minutes } from "../Minutes/Minutes";
import { Seconds } from "../Seconds/Seconds";

import { decrementSeconds } from "../../redux/actions/decrementSeconds";
import { decrementMinutes } from "../../redux/actions/decrementMinutes";
import { decrementHours } from "../../redux/actions/decrementHours";
import { stopTimer } from "../../redux/actions/stopTimer";

import "./Timer.scss";

export const Timer = () => {

  const timer = useSelector((state) => {
    const seconds = state.time.seconds;
    const minutes = state.time.minutes;
    const hours = state.time.hours;
    const started = state.time.started;

    return {
      seconds,
      minutes,
      hours,
      started
    }
  })
  const dispatch = useDispatch();
  let intervalID = useRef();

  useEffect(() => { //if timer has started, start decrementing seconds
    if (timer.started) {
      intervalID.current = setInterval(() => {
        dispatch(decrementSeconds());
      }, 1000);
    }
    else {
      clearInterval(intervalID.current);
    }
  }, [timer.started, dispatch]);

 useEffect(() => { 
    if(timer.seconds.tens === 0 && timer.seconds.units === 0) {
      if(timer.started !== false) {
        dispatch(stopTimer());
      }
    }
  }, [timer.seconds.tens, timer.seconds.units, dispatch, timer.started])

  return (
    <div className="timer">
        <Hours />
        <Minutes />
        <Seconds />
    </div>
  );
};
