import {z} from "zod";

export const usernameValidation = z
    .string()
    .min(8,"Username must be atleast 8 characters")
    .max(14,"Username must be no more than 14 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain any special charcters")

export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().min(6,{message:"Password must be atleast 6 characters"})
})