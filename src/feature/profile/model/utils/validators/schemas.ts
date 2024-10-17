import {
  aboutMeSchema,
  dateSchema,
  firstOrLastNameSchema,
  usernameSchema,
} from '@/shared/lib/utils/validators'
import { LocaleType } from 'locales'
import { z } from 'zod'

export const profileInfoSchema = (t: LocaleType) =>
  z.object({
    aboutMe: aboutMeSchema(t),
    city: z.string().optional(),
    country: z.string().optional(),
    dateOfBirth: dateSchema(t),
    firstName: firstOrLastNameSchema(t),
    lastName: firstOrLastNameSchema(t),
    userName: usernameSchema(t),
  })

export type ProfileInfoFormValues = z.infer<ReturnType<typeof profileInfoSchema>>
