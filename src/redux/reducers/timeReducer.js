import {
  INCREMENT_HOURS,
  INCREMENT_MINUTES,
  INCREMENT_SECONDS,
  DECREMENT_HOURS,
  DECREMENT_MINUTES,
  DECREMENT_SECONDS,
  START_TIMER,
  STOP_TIMER
} from "../action_types/types";

const initialState = {
  started: false,
  hours: {
    tens: 0,
    units: 0,
  },
  minutes: {
    tens: 0,
    units: 0,
    limit: 59,
  },
  seconds: {
    tens: 0,
    units: 0,
    limit: 59,
  },
};

export const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_HOURS:
      return {
        ...state,
        hours: {
          ...state.hours,
          tens:
            state.hours.units === 9 ? state.hours.tens + 1 : state.hours.tens,
          units: state.hours.units !== 9 ? state.hours.units + 1 : 0,
        },
      };

    case DECREMENT_HOURS:
      return {
        ...state,
        hours: {
          ...state.hours,
          tens:
            state.hours.units === 0 && state.hours.tens !== 0
              ? state.hours.tens - 1
              : state.hours.tens,
          units:
            state.hours.tens > state.hours.units ? 9 : state.hours.units - 1,
        },
      };
    case INCREMENT_MINUTES:
      return {
        ...state,
        minutes: {
          ...state.minutes,
          tens:
            state.minutes.units === 9
              ? state.minutes.tens + 1
              : state.minutes.tens,
          units: state.minutes.units !== 9 ? state.minutes.units + 1 : 0,
        },
      };
    case DECREMENT_MINUTES:
      return {
        ...state,
        minutes: {
          ...state.minutes,
          tens:
            state.minutes.units === 0 && state.minutes.tens !== 0
              ? state.minutes.tens - 1
              : state.minutes.tens,
          units:
            state.minutes.tens > state.minutes.units
              ? 9
              : state.minutes.units - 1,
        },
      };
    case INCREMENT_SECONDS:
      return {
        ...state,
        seconds: {
          ...state.seconds,
          tens:
            state.seconds.units === 9
              ? state.seconds.tens + 1
              : state.seconds.tens,
          units: state.seconds.units !== 9 ? state.seconds.units + 1 : 0,
        },
      };
    case DECREMENT_SECONDS:
      return {
        ...state,
        seconds: {
          ...state.seconds,
          tens:
            state.seconds.units === 0 && state.seconds.tens !== 0
              ? state.seconds.tens - 1
              : state.seconds.tens,
          units:
            state.seconds.tens > state.seconds.units
              ? 9
              : state.seconds.units - 1,
        },
      };
    case START_TIMER:
      return {
        ...state,
        started: true
      }
    case STOP_TIMER:
      return {
        ...state,
        started: false
      }
    default:
      return state;
  }
};
