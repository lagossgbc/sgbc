"use client";

import Button from "@/components/form/Button";
import Input from "@/components/form/Input";
import useForm from "@/components/form/useForm";
import Form from "@/components/form/Form";
import { VALIDATOR_EMAIL } from "@/components/form/validators";

import classes from "./BookMinistryForm.module.scss";

const initialEmailInputState = {
  email: {
    isValid: false,
    value: "",
  },
};

const EmailForm = [
  {
    id: "email",
    label: "Enter your e-mail address",
    placeholder: "Enter your e-mail address",
    errorText: "Invalid e-mail",
    validators: [VALIDATOR_EMAIL()],
    value: "",
  },
];
const BookMinistryForm = () => {
  const { formState, inputHandler, reset } = useForm(
    initialEmailInputState,
    false
  );

  const handleSubmit = () => {
    if (!formState.isValid) return console.log("Invalid form");

    const { email } = formState.inputs;
    console.log({
      email: email.value,
    });
    reset();
  };

  return (
    <Form
      className="flex flex-col justify-center items-center mt-10 z-50"
      handleSubmit={handleSubmit}
    >
      {EmailForm.map((data) => (
        <Input
          key={data.id}
          id={data.id}
          placeholder={data.placeholder}
          label={data.label}
          onInput={inputHandler}
          errorText={data.errorText}
          value={data.value}
          className={classes.Input}
          validators={data.validators}
        />
      ))}

      <Button>Submit</Button>
    </Form>
  );
};

export default BookMinistryForm;
