import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

import { Input } from "../styles/defaults/base-input";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<any>;
  error: boolean;
}

export function FormInput({ name, register, error, ...rest }: FormInputProps) {
  return (
    <Input
      css={{
        border: error ? "1px solid $error" : "1px solid $borderFocus",
        "&:focus": {
          border: error ? "1px solid $error" : "1px solid $borderFocus",
        },
        "::placeholder": {
          color: "white"
        }
      }}
      {...rest}
      {...register(name)}
    />
  );
}
