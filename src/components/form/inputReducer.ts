import { InputActionType, InputStateType } from "./types";
import { validate } from "./validators";

const inputReducer = (state: any, action: InputActionType) => {
  // const inputReducer = (state: InputStateType, action: InputActionType) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        inputValue: action.payload,
        inputIsValid: validate(action.payload || "", action.validators || []),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    case "RESET":
      return {
        inputvalue: "",
        isTouched: false,
        inputIsValid: false,
      };
    default:
      return state;
  }
};

export default inputReducer;
