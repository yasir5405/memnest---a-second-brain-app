import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email({ error: "Please provide a valid email." }),
  password: z
    .string({ error: "Please provide a password." })
    .min(8, { error: "Password should be at least 8 characters long." }),
});

export type SignUpInput = z.infer<typeof signUpSchema>;

export const singInSchema = z.object({
  email: z.email({ error: "Please provide a valid email." }),
  password: z
    .string({ error: "Please provide a password." })
    .min(8, { error: "Password should be at least 8 characters long." }),
});

export type SignInInput = z.infer<typeof singInSchema>;
