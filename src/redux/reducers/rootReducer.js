import { combineReducers } from "redux";

import { timeReducer } from "./timeReducer";

export const rootReducer = combineReducers({
    time: timeReducer
})