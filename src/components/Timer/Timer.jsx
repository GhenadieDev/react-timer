import React from "react";

import { Hours } from "../Hours/Hours";
import { Minutes } from "../Minutes/Minutes";
import { Seconds } from "../Seconds/Seconds";

import "./Timer.scss";

export const Timer = () => {
  return (
    <div className="timer">
        <Hours />
        <Minutes />
        <Seconds />
    </div>
  );
};
