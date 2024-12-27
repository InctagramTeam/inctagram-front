import { z } from 'zod'

export const ApiUserSchema = z.object({
  id: z.number(),
  userName: z.string(),
  email: z.string(),
  isBlocked: z.boolean(),
})

export type UserDto = z.infer<typeof ApiUserSchema>
