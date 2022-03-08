import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Hours } from "../Hours/Hours";
import { Minutes } from "../Minutes/Minutes";
import { Seconds } from "../Seconds/Seconds";

import { decrementSeconds } from "../../redux/actions/seconds/decrementSeconds";
import { resetSeconds } from "../../redux/actions/seconds/resetSeconds";
import { decrementMinutes } from "../../redux/actions/minutes/decrementMinutes";
import { resetMinutes } from "../../redux/actions/minutes/resetMinutes";
import { decrementHours } from "../../redux/actions/hours/decrementHours";
import { stopTimer } from "../../redux/actions/timer/stopTimer";

import "./Timer.scss";

export const Timer = () => {
  const seconds = useSelector(
    (state) =>
      state.time.seconds.tens.toString() + state.time.seconds.units.toString()
  );
  const minutes = useSelector(
    (state) =>
      state.time.minutes.tens.toString() + state.time.minutes.units.toString()
  );
  const hours = useSelector(
    (state) =>
      state.time.hours.tens.toString() + state.time.hours.units.toString()
  );

  const started = useSelector((state) => state.time.started);
  const dispatch = useDispatch();
  let intervalID = useRef();

  useEffect(() => {
    //if timer has started, start decrementing seconds
    if (started) {
      intervalID.current = setInterval(() => {
        dispatch(decrementSeconds());
      }, 1000);
    } else {
      clearInterval(intervalID.current);
    }
  }, [started, dispatch]);

  useEffect(() => {
    if (started) {
      if(seconds === '00') {
        if(minutes !== '00') {
          setTimeout(() => {
            dispatch(decrementMinutes());
          }, 1000)
          setTimeout(() => {
            dispatch(resetSeconds());
          }, 1000) 
        }
      }
      if(seconds === '00' && minutes === '00' && hours !== '00') {
        setTimeout(() => {
          dispatch(decrementHours());
        }, 1000)
        setTimeout(() => {
          dispatch(resetMinutes());
          dispatch(resetSeconds());
        }, 1000)
      }

      if (seconds === "00" && minutes === "00" && hours === "00") {
        dispatch(stopTimer());
      }
    }
  }, [seconds, hours, minutes, dispatch, started]);

  return (
    <div className="timer">
      <Hours />
      <Minutes />
      <Seconds />
    </div>
  );
};
