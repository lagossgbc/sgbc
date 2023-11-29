"use client";

import { contactForm, initialContactInputState } from "./contactFormData";
import Input from "@/components/form/Input";
import useForm from "@/components/form/useForm";
import Form from "@/components/form/Form";
import Button from "@/components/form/Button";

const ContactForm = () => {
  const { formState, inputHandler, reset } = useForm(
    initialContactInputState,
    false
  );

  const handleSubmit = () => {
    if (!formState.isValid) return console.log("Invalid form");

    const { name, email, phone, message } = formState.inputs;
    console.log({
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    });
    reset();
  };

  return (
    <Form className="md w-full max-w-xl md:w-3/5" handleSubmit={handleSubmit}>
      {contactForm.map((data: any) => (
        <Input
          key={data.id}
          id={data.id}
          type={data.type}
          errorText={data.errorText}
          placeholder={data.placeholder}
          label={data.label}
          element={data.element}
          onInput={inputHandler}
          validators={data.validators}
          value={data.value}
        />
      ))}
      <Button className="flex justify-end">Send</Button>
    </Form>
  );
};

export default ContactForm;
