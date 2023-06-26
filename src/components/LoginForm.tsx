import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "../hooks/useAuth";

import { FormInput } from "./FormInput";

import { userSchema, UserSchema } from "../utils/userSchema";
import { RedirectProps } from "../utils/types";

import { Button } from "../styles/defaults/base-button";
import { Form } from "../styles/defaults/base-form";

export function LoginForm({ redirectToTodosPage }: RedirectProps) {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });
  const { login } = useAuth();

  function handleLogin(data: UserSchema) {
    login(data.email, data.password);
    redirectToTodosPage();
  }

  return (
    <Form
      onSubmit={handleSubmit(handleLogin)}
      css={{
        height: "45%",
      }}
    >
      <FormInput
        error={!!errors.email}
        placeholder="Email"
        name="email"
        register={register}
      />
      {errors.email ? <span>{errors.email.message}</span> : null}
      <FormInput
        error={!!errors.password}
        placeholder="Senha"
        type="password"
        name="password"
        register={register}
      />
      {errors.password ? <span>{errors.password.message}</span> : null}
      <Button buttonType="button" type="submit">
        Logar
      </Button>
    </Form>
  );
}
