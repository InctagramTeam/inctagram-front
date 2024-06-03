import { LocaleType } from 'locales'
import { z } from 'zod'
import { PASSWORD_PATTERN } from '@/shared/constants/regexs'

export const emailSchema = (t: LocaleType) => {
  return z.string().email({ message: t.validation.emailVerification }).default('')
}

export const passwordSchema = (t: LocaleType) => {
  return z
    .string()
    .trim()
    .min(6, t.validation.minLength(6))
    .max(20, t.validation.maxLength(20))
    .regex(PASSWORD_PATTERN, t.validation.passwordVerification)
    .default('')
}
