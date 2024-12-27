import { z } from 'zod'

const ApiProfileTypeSchema = z.object({
  id: z.number(),
  email: z.string(),
  emailIsConfirm: z.boolean(),
  userName: z.string(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  city: z.string().nullable(),
  country: z.string().nullable(),
  dateOfBirth: z.string().nullable(),
  aboutMe: z.string().nullable(),
  avatarUrl: z.string().nullable(),
  createdAt: z.string(),
  followingCount: z.number(),
  followersCount: z.number(),
  publicationsCount: z.number(),
})

export type ProfileDto = z.infer<typeof ApiProfileTypeSchema>
