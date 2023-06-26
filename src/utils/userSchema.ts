import * as z from "zod";

export const userSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email nao pode ficar vazio." })
    .email({ message: "Email tem que ser valido." }),
  password: z.string().min(1, { message: "Senha nao pode ficar vazia." }),
});

export type UserSchema = z.infer<typeof userSchema>;
