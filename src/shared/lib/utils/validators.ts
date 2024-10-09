import { EMPTY_STRING, PASSWORD_PATTERN, USERNAME_PATTERN } from '@/shared'
import { ABOUT_ME_PATTERN, FIRST_OR_LAST_NAME_PATTERN } from '@/shared/constants/regexs'
import { differenceInYears } from 'date-fns'
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

export const firstOrLastNameSchema = (t: LocaleType) => {
  return z
    .string()
    .trim()
    .regex(FIRST_OR_LAST_NAME_PATTERN, t.validation.nameVerification)
    .min(1, t.validation.minLength(1))
    .max(50, t.validation.maxLength(50))
    .default(EMPTY_STRING)
}

export const dateSchema = (t: LocaleType) => {
  return z.date({ message: t.validation.dateOfBirthVerification }).refine(
    data => {
      const now = new Date()
      const birthDate = new Date(data)

      // Вычисляем разницу в годах
      const yearsBetweenDates = differenceInYears(now, birthDate)

      // Проверяем, что возраст больше 13 лет
      return yearsBetweenDates >= 13
    },
    {
      message: t.validation.minAgeDateOfBirthVerification,
    }
  )
}

export const aboutMeSchema = (t: LocaleType) => {
  return z
    .string()
    .trim()
    .regex(ABOUT_ME_PATTERN, t.validation.aboutMeVerification)
    .min(0, t.validation.minLength(0))
    .max(200, t.validation.maxLength(200))
    .default(EMPTY_STRING)
    .optional()
}

export const checkboxSchema = () => z.boolean()
