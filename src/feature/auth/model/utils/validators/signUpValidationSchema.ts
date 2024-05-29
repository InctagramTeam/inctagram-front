import { LocaleType } from '@/../locales'
import { z } from 'zod'
import { PASSWORD_PATTERN, USERNAME_PATTERN } from '@/shared/constants/regexs'

export const signUpSchema = (t: LocaleType) =>
  z
    .object({
      username: z
        .string()
        .trim()
        .regex(USERNAME_PATTERN, { message: t.validation.userNameVerification })
        .min(6, t.validation.minLength(6))
        .max(30, t.validation.maxLength(30))
        .default(''),
      email: z.string().email({ message: t.validation.emailVerification }).default(''),
      password: z
        .string()
        .trim()
        .min(6, t.validation.minLength(6))
        .max(20, t.validation.maxLength(20))
        .regex(PASSWORD_PATTERN, t.validation.passwordVerification)
        .default(''),
      passwordConfirm: z.string().default(''),
      accept: z
        .boolean()
        .optional()
        // пользовательская проверка refine
        .refine(value => value, {
          message: t.validation.required,
        }),
    })
    .refine(data => data.password === data.passwordConfirm && data.passwordConfirm.length > 0, {
      message: t.validation.passwordMismatch,
      path: ['passwordConfirm'],
    })

export type SignUpFormValues = z.infer<ReturnType<typeof signUpSchema>>
