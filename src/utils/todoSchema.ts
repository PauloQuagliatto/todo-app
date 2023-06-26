import * as z from "zod";

export const todoSchema = z.object({
  todo: z.string().min(1, { message: "Tarefa nao pode estar vazia." }),
});

export type TodoSchema = z.infer<typeof todoSchema>;
