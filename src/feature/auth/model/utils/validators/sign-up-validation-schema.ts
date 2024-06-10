import { LocaleType } from '@/../locales'
import { EMPTY_STRING } from '@/shared/constants'
import { USERNAME_PATTERN } from '@/shared/constants/regexs'
import { emailSchema, passwordSchema } from '@/shared/lib/utils'
import { z } from 'zod'
import { passwordConfirmationCheck } from '@/shared/lib/utils/validators'

export const signUpSchema = (t: LocaleType) => {
  return passwordConfirmationCheck(
    'password',
    'passwordConfirm',
    t.validation.passwordMismatch
  )(
    z.object({
      accept: z
        .boolean()
        .optional()
        .refine(value => value, {
          message: t.validation.required,
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
  )
}

export type SignUpFormValues = z.infer<ReturnType<typeof signUpSchema>>
