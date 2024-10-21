import { LocaleType } from "@/../locales";
import { EMPTY_STRING, emailSchema, passwordSchema } from "@/shared";
import { checkboxSchema, usernameSchema } from "@/shared/lib/utils/validators";
import { z } from "zod";

export const signUpSchema = (t: LocaleType) =>
  z
    .object({
      checkAccept: checkboxSchema().refine((val) => val, {
        message: t.validation.acceptTerms,
      }),
      email: emailSchema(t),
      password: passwordSchema(t),
      passwordConfirm: z.string().default(EMPTY_STRING),
      username: usernameSchema(t),
    })
    .refine(
      (data) =>
        data.password === data.passwordConfirm &&
        data.passwordConfirm.length > 0,
      {
        message: t.validation.passwordMismatch,
        path: ["passwordConfirm"],
      },
    );

export type SignUpFormValues = z.infer<ReturnType<typeof signUpSchema>>;
