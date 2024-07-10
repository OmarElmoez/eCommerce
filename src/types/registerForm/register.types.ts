import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string().trim().min(1, { message: "First name is required" }),
  lastName: z.string().trim().min(1, { message: "Last name is required" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/, { message: "Password must contain at least one special character" }),
  confirmPassword: z.string().trim().min(1, { message: "Confirm password is required" }),
}).refine(field => field.password === field.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type TSignUp = z.infer<typeof registerSchema>;

export default TSignUp;
