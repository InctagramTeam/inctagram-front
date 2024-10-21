import { emailSchema, passwordSchema } from "@/shared/lib/utils";
import { LocaleType } from "locales";
import { z } from "zod";

export const signInSchema = (t: LocaleType) =>
  z.object({
    email: emailSchema(t),
    password: passwordSchema(t),
  });

export type SignInFormValues = z.infer<ReturnType<typeof signInSchema>>;
