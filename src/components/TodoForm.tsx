import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "phosphor-react";

import { TodoSchema, todoSchema } from "../utils/todoSchema";
import { useTodos } from "../hooks/useTodos";
import { Form } from "../styles/defaults/base-form";
import { FormInput } from "./FormInput";
import { Button } from "../styles/defaults/base-button";

export function TodoForm() {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<TodoSchema>({
    resolver: zodResolver(todoSchema),
  });
  const { addTodo } = useTodos();

  function createTodo({ todo }: TodoSchema) {
    addTodo(todo);
    reset();
  }

  return (
    <Form
      onSubmit={handleSubmit(createTodo)}
      css={{
        width: "450px",
        padding: 0,
        flexDirection: "row",
        background: "none"
      }}
    >
      <div style={{ width: "100%" }}>
        <FormInput
          error={!!errors.todo}
          placeholder="Tarefa"
          register={register}
          name="todo"
        />
        {errors.todo ? <span>{errors.todo.message}</span> : null}
      </div>
      <Button
        css={{
          width: "auto",
        }}
        buttonType="button"
        type="submit"
      >
        <Plus size={16} />
      </Button>
    </Form>
  );
}
