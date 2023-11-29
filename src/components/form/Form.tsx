import { useState } from "react";
import { FormType } from "./types";

const Form: React.FC<FormType> = ({
  children,
  className = "",
  style = {},
  handleSubmit,
}) => {
  const [FormReset, setFormReset] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
    // This ensures that the form re-renders
    setFormReset((prev) => !prev);
  };

  return (
    <form
      className={className}
      style={style}
      onSubmit={submit}
      key={FormReset ? "reset" : "normal"}
    >
      {children}
    </form>
  );
};

export default Form;
