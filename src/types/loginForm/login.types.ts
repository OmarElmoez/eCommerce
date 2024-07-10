import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters" }),
});

type TLogin = z.infer<typeof loginSchema>;

export default TLogin;
