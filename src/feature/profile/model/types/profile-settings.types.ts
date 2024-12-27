import { z } from 'zod'

export const ProfileSettingsSchema = z.object({
  id: z.number(),
  userName: z.string(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  city: z.string().nullable(),
  country: z.string().nullable(),
  dateOfBirth: z.string().nullable(),
  aboutMe: z.string().nullable(),
  avatarUrl: z.string().nullable(),
})

export type ProfileSettings = z.infer<typeof ProfileSettingsSchema>
