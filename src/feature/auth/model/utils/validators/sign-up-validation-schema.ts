import { LocaleType } from '@/../locales'
import { EMPTY_STRING } from '@/shared/constants'
import { USERNAME_PATTERN } from '@/shared/constants/regexs'
import { emailSchema, passwordSchema } from '@/shared/lib/utils'
import { z } from 'zod'

export const signUpSchema = (t: LocaleType) =>
  z
    .object({
      accept: z
        .boolean()
        // пользовательская проверка refine
        .refine(value => value, {
          message: t.validation.required,
        })
        .optional(),
      email: emailSchema(t),
      password: passwordSchema(t),
      passwordConfirm: z.string().default(EMPTY_STRING),
      username: z
        .string()
        .trim()
        .regex(USERNAME_PATTERN, { message: t.validation.userNameVerification })
        .min(6, t.validation.minLength(6))
        .max(30, t.validation.maxLength(30))
        .default(EMPTY_STRING),
    })
    .refine(data => data.password === data.passwordConfirm && data.passwordConfirm.length > 0, {
      message: t.validation.passwordMismatch,
      path: ['passwordConfirm'],
    })

export type SignUpFormValues = z.infer<ReturnType<typeof signUpSchema>>
