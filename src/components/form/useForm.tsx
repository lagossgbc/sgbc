import { useReducer } from "react";

const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };

    case "RESET_FORM":
      const resetInputs: any = {};
      for (const inputId in state.inputs) {
        resetInputs[inputId] = { value: "", isValid: false };
      }
      return {
        ...state,
        inputs: resetInputs,
        isValid: false,
      };
    default:
      return state;
  }
};

const useForm: any = (initialInputs: object, initialFormValidity: boolean) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity || false,
  });

  const inputHandler = (inputId: string, value: string, isValid: boolean) => {
    dispatch({ type: "INPUT_CHANGE", value, isValid, inputId });
  };

  const reset = () => {
    dispatch({ type: "RESET_FORM" });
  };
  return { formState, inputHandler, reset };
};

export default useForm;
