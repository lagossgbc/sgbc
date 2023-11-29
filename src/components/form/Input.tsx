"use client";
import { useReducer, useEffect } from "react";
import { InputProps } from "./types";
import inputReducer from "./inputReducer";

import classes from "./Input.module.scss";

const Input: React.FC<InputProps> = ({
  id,
  element,
  label,
  placeholder,
  type = "text",
  errorText,
  onInput,
  validators,
  value,
  isValid,
  className = "",
  style = {},
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    inputIsValid: isValid || false,
    isTouched: false,
    inputValue: value || "",
  });

  let elementToReturn: React.ReactNode;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({ type: "CHANGE", payload: e.target.value, validators });
  };

  const handleBlur = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({ type: "TOUCH", payload: "" });
  };

  const reset = () => {
    dispatch({ type: "RESET", payload: "" });
  };

  const { inputValue, inputIsValid } = inputState;
  const showErrorClass = !inputState.inputIsValid && inputState.isTouched;

  useEffect(() => {
    onInput(id, inputValue, inputIsValid);
  }, [id, inputValue, inputIsValid, onInput]);

  if (element === "textarea") {
    elementToReturn = (
      <textarea
        rows={5}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={inputValue}
      />
    );
  } else {
    elementToReturn = (
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={handleChange}
        onBlur={handleBlur}
        value={inputValue}
        autoComplete="off"
      />
    );
  }

  return (
    <div
      className={`${classes.Container} ${className || ""} ${
        showErrorClass ? classes.Error : ""
      }`}
      style={style || {}}
    >
      {elementToReturn}
      <label
        htmlFor={id}
        className={`${classes.Label} ${showErrorClass ? classes.Error : ""}`}
      >
        {label}
      </label>
      <small
        className={`${classes.ErrorText} ${
          showErrorClass ? classes.Error : ""
        }`}
      >
        {errorText}
      </small>
    </div>
  );
};

export default Input;
