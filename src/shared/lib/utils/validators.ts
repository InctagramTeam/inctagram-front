import { EMPTY_STRING } from '@/shared/constants'
import { PASSWORD_PATTERN } from '@/shared/constants/regexs'
import { LocaleType } from 'locales'
import { z } from 'zod'

export const emailSchema = (t: LocaleType) => {
  return z.string().email({ message: t.validation.emailVerification }).default(EMPTY_STRING)
}

export const passwordSchema = (t: LocaleType) => {
  return z
    .string()
    .trim()
    .min(6, t.validation.minLength(6))
    .max(20, t.validation.maxLength(20))
    .regex(PASSWORD_PATTERN, t.validation.passwordVerification)
    .default(EMPTY_STRING)
}
