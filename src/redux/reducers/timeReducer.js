import {
  INCREMENT_HOURS,
  DECREMENT_HOURS,
  INCREMENT_MINUTES,
  DECREMENT_MINUTES,
  RESET_MINUTES,
  INCREMENT_SECONDS,
  DECREMENT_SECONDS,
  RESET_SECONDS,
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER
} from "../action_types/types";

const initialState = {
  started: false,
  hours: {
    tens: 0,
    units: 0,
    limit: 99
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

//const prevState = store.dispatch(ActionCreators.jump(1));

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
          (state.hours.tens + state.hours.units) === state.hours.tens ? 9 : state.hours.units - 1
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
          (state.minutes.tens + state.minutes.units) === state.minutes.tens ? 9 : state.minutes.units - 1
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
          units: (state.seconds.tens + state.seconds.units) === state.seconds.tens ? 9 : state.seconds.units - 1
        },
      };
    case RESET_SECONDS:
      return {
        ...state,
        seconds: {
          ...state.seconds,
          tens: 5,
          unites: 9
        }
      }
    case RESET_MINUTES: 
      return {
        ...state,
        minutes: {
          ...state.minutes,
          tens: 5,
          units: 9
        }
      }
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
    case RESET_TIMER: 
      return {
        ...state,
        hours: {
          ...state.hours,
          tens: 0,
          units: 0
        },
        minutes: {
          ...state.minutes,
          tens: 0,
          units: 0
        },
        seconds: {
          ...state.seconds,
          tens: 0,
          units: 0
        }
      }
    default:
      return state;
  }
};
