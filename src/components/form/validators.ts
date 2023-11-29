import { ValidatorType } from "./types";

const VALIDATOR_TYPE_MINLENGTH = "MINLENGTH";
const VALIDATOR_TYPE_MAXLENGTH = "MAXLENGTH";
const VALIDATOR_TYPE_MIN = "MIN";
const VALIDATOR_TYPE_MAX = "MAX";
const VALIDATOR_TYPE_EMAIL = "EMAIL";
const VALIDATOR_TYPE_PHONE = "PHONE";

export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });
export const VALIDATOR_PHONE = () => ({ type: VALIDATOR_TYPE_PHONE });
export const VALIDATOR_MINLENGTH = (val: number) => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val,
});

export const VALIDATOR_MAXLENGTH = (val: number) => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val,
});
export const VALIDATOR_MIN = (val: number) => ({
  type: VALIDATOR_TYPE_MIN,
  val,
});
export const VALIDATOR_MAX = (val: number) => ({
  type: VALIDATOR_TYPE_MAX,
  val,
});

export const validate = (value: string, validators: ValidatorType[]) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_MINLENGTH && validator.val) {
      isValid = isValid && value.trim().length >= validator.val;
    }

    if (validator.type === VALIDATOR_TYPE_MAXLENGTH && validator.val) {
      isValid = isValid && value.trim().length <= validator.val;
    }

    if (validator.type === VALIDATOR_TYPE_MIN && validator.val) {
      isValid = isValid && +value >= validator.val;
    }

    if (validator.type === VALIDATOR_TYPE_MAX && validator.val) {
      isValid = isValid && +value <= validator.val;
    }

    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value.trim());
    }

    if (validator.type === VALIDATOR_TYPE_PHONE) {
      isValid = isValid && /^[0-9+]{9,14}$/.test(value.trim());
    }
  }
  return isValid;
};
