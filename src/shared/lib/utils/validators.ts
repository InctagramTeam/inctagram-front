import { EMPTY_STRING } from '@/shared/constants'
import { PASSWORD_PATTERN } from '@/shared/constants/regexs'
import { LocaleType } from 'locales'
import { z, ZodObject, ZodRawShape } from 'zod'

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

/**
 * Функция для проверки совпадения value в двух полях (password и confirmPassword)
 * message — текст ошибки, если значения в полях не совпадает
 */
export const passwordConfirmationCheck =
  <T extends ZodRawShape>(
    passwordField: keyof T & string,
    passwordConfirmField: keyof T & string,
    message: string
  ) =>
  (schema: ZodObject<T>) =>
    schema.refine(
      (data: { [K in keyof T]: K extends keyof T ? z.infer<(typeof schema.shape)[K]> : never }) =>
        data[passwordField] === data[passwordConfirmField] && data[passwordConfirmField].length > 0,
      {
        message,
        path: [passwordConfirmField],
      }
    )
