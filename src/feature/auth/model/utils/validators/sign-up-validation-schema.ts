import { LocaleType } from '@/../locales'
import { EMPTY_STRING, USERNAME_PATTERN, emailSchema, passwordSchema } from '@/shared'
import { checkboxSchema } from '@/shared/lib/utils/validators'
import { z } from 'zod'

export const signUpSchema = (t: LocaleType) =>
  z
    .object({
      checkAccept: checkboxSchema({ trueValue: '' }).refine(val => val, {
        message: t.validation.acceptTerms,
      }),
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
