import { z } from 'zod'
import { LocaleType } from 'locales'
import { PASSWORD_PATTERN } from '@/shared/constants/regexs'

export const signInSchema = (t: LocaleType) =>
  z.object({
    email: z.string().email({ message: t.validation.emailVerification }).default(''),
    password: z
      .string()
      .trim()
      .min(6, t.validation.minLength(6))
      .max(20, t.validation.maxLength(20))
      .regex(PASSWORD_PATTERN, t.validation.passwordVerification)
      .default(''),
  })

export type SignInFormValues = z.infer<ReturnType<typeof signInSchema>>
