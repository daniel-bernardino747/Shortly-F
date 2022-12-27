import { useForm } from "react-hook-form";

import { isEmail } from "validator";

interface IMessageError {
  type: string;
  message: string;
}

export interface ILabels {
  title: string;
  type: string;
  rules: {
    required: boolean;
    validate(): boolean;
  };
  messages: IMessageError[];
}

export default [
  {
    title: "Name",
    type: "text",
    rules: {
      required: true,
    },
    messages: [{ type: "required", message: "Name is required." }],
  },
  {
    title: "Email",
    type: "text",
    rules: {
      required: true,
      validate: (value: string) => isEmail(value),
    },
    messages: [
      { type: "required", message: "Email is required." },
      { type: "validate", message: "Email is invalid." },
    ],
  },
  {
    title: "Password",
    type: "password",
    rules: {
      required: true,
    },
    messages: [{ type: "required", message: "Password is required." }],
  },
  {
    title: "Re-enter Password",
    type: "password",
    rules: {
      required: true,
      validate: (value: string) => value === useForm().watch("Password"),
    },
    messages: [
      { type: "required", message: "Password is required." },
      { type: "validate", message: "Passwords does not match." },
    ],
  },
] as ILabels[];
