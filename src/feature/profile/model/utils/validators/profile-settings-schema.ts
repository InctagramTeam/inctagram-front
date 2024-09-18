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
    userName: usernameSchema(t),
    firstName: firstOrLastNameSchema(t),
    lastName: firstOrLastNameSchema(t),
    dateOfBirth: dateSchema(t).optional(),
    country: z.string().optional(),
    city: z.string().optional(),
    aboutMe: aboutMeSchema(t),
  })

export type ProfileInfoFormValues = z.infer<ReturnType<typeof profileInfoSchema>>
