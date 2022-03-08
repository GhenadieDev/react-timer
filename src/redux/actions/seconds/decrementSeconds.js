import { DECREMENT_SECONDS } from "../../action_types/types";

export const decrementSeconds = () => {
  return {
    type: DECREMENT_SECONDS
  };
};
