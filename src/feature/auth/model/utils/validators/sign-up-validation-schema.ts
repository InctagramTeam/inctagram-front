import { LocaleType } from '@/../locales'
import { USERNAME_PATTERN } from '@/shared/constants/regexs'
import { z } from 'zod'
import { emailSchema, passwordSchema } from '@/shared/lib/utils'

export const signUpSchema = (t: LocaleType) =>
  z
    .object({
      email: emailSchema(t),
      password: passwordSchema(t),
      accept: z
        .boolean()
        .optional()
        // пользовательская проверка refine
        .refine(value => value, {
          message: t.validation.required,
        }),
      passwordConfirm: z.string().default(''),
      username: z
        .string()
        .trim()
        .regex(USERNAME_PATTERN, { message: t.validation.userNameVerification })
        .min(6, t.validation.minLength(6))
        .max(30, t.validation.maxLength(30))
        .default(''),
    })
    .refine(data => data.password === data.passwordConfirm && data.passwordConfirm.length > 0, {
      message: t.validation.passwordMismatch,
      path: ['passwordConfirm'],
    })

export type SignUpFormValues = z.infer<ReturnType<typeof signUpSchema>>
