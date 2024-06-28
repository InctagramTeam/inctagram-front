import { EMPTY_STRING, PASSWORD_PATTERN, USERNAME_PATTERN } from '@/shared'
import { LocaleType } from 'locales'
import { z } from 'zod'

export const usernameSchema = (t: LocaleType) => {
  return z
    .string()
    .trim()
    .regex(USERNAME_PATTERN, { message: t.validation.userNameVerification })
    .min(6, t.validation.minLength(6))
    .max(30, t.validation.maxLength(30))
    .default(EMPTY_STRING)
}
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

type CheckboxOpts = {
  trueValue?: any
}

export const checkboxSchema = ({ trueValue = 'on' }: CheckboxOpts = {}) =>
  z.union([z.literal(trueValue).transform(() => true), z.literal(undefined).transform(() => false)])
// z.literal(true)
