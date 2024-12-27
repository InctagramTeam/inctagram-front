import { z } from 'zod'

export type updateProfileRequest = {
  aboutMe: string
  city: string
  country: string
  dateOfBirth: string
  firstName: string
  lastName: string
  userName: string
}

export const ProfileSchema = z.object({
  id: z.number(),
  userName: z.string(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  aboutMe: z.string().nullable(),
  avatarUrl: z.string().nullable(),
  followingCount: z.number(),
  followersCount: z.number(),
  publicationsCount: z.number(),
})

export type Profile = z.infer<typeof ProfileSchema>

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
