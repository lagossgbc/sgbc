import { InputProps } from "@/components/form/types";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_PHONE,
} from "@/components/form/validators";

export const contactForm = [
  {
    id: "name",
    label: "Name ",
    placeholder: "Name ",
    errorText: "2 - 60 characters required.",
    validators: [VALIDATOR_MINLENGTH(2), VALIDATOR_MAXLENGTH(60)],
    value: "",
  },
  {
    id: "email",
    label: "e-mail address ",
    placeholder: "e-mail address ",
    errorText: "Invalid email.",
    value: "",
    // @ts-ignore
    validators: [VALIDATOR_EMAIL()],
  },
  {
    id: "phone",
    label: "Phone number ",
    placeholder: "Phone number ",
    errorText: "Invalid mobile phone.",
    value: "",
    // @ts-ignore
    validators: [VALIDATOR_PHONE()],
  },
  {
    id: "message",
    label: "Message ",
    placeholder: "Message ",
    errorText: "20 - 2000 messages required.",
    element: "textarea",
    value: "",
    validators: [VALIDATOR_MINLENGTH(20), VALIDATOR_MAXLENGTH(2000)],
  },
];

export const initialContactInputState = {
  name: {
    value: "",
    isValid: false,
  },
  email: {
    value: "",
    isValid: false,
  },
  phone: {
    value: "",
    isValid: false,
  },
  message: {
    value: "",
    isValid: false,
  },
};
