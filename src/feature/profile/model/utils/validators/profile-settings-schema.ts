import {
  aboutMeSchema,
  dateSchema,
  firstOrLastNameSchema,
  usernameSchema,
} from '@/shared/lib/utils/validators'
import { LocaleType } from 'locales'
import { z } from 'zod'

export const profileSettingsSchema = (t: LocaleType) =>
  z.object({
    userName: usernameSchema(t),
    firstName: firstOrLastNameSchema(t),
    lastName: firstOrLastNameSchema(t),
    dateOfBirth: dateSchema(t),
    city: z.string().optional(),
    aboutMe: aboutMeSchema(t),
  })

export type ProfileSettingsFormValues = z.infer<ReturnType<typeof profileSettingsSchema>>
