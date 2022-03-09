import { DECREMENT_MINUTES } from "../../action_types/types";

export const decrementMinutes = () => {
    return {
        type: DECREMENT_MINUTES
    }
}