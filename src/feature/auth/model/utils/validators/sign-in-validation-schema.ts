import { z } from 'zod'
import { LocaleType } from 'locales'
import { emailSchema, passwordSchema } from '@/shared/lib/utils'

export const signInSchema = (t: LocaleType) =>
  z.object({
    email: emailSchema(t),
    password: passwordSchema(t),
  })

export type SignInFormValues = z.infer<ReturnType<typeof signInSchema>>
