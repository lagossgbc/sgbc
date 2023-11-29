export interface InputProps {
  id: string;
  element?: "textarea" | "input";
  type?: "text" | "password" | "tel";
  placeholder: string;
  value: string;
  isValid?: boolean;
  label: string;
  errorText: string;
  className?: string;
  style?: object;
  validators?: ValidatorType[];
  onInput: (id: string, value: string, isValid: boolean) => void;
}

export interface InputStateType {
  inputIsValid: boolean;
  isTouched: boolean;
  inputValue: string;
}

export interface InputActionType {
  type: string;
  payload: string;
  validators?: ValidatorType[];
}

export interface ValidatorType {
  type: string;
  val?: number;
}

export interface FormType {
  className?: string;
  style?: object;
  children: React.ReactNode;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface ButtonType {
  children: React.ReactNode;
  className?: string;
  style?: object;
  href?: string;
  type?: "submit" | "button";
  icon?: React.ReactSVGElement;
  target?: "_self" | "_blank";
}
