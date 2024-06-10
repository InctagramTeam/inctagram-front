import { LocaleType } from 'locales'
import { z } from 'zod'
import { passwordSchema } from '@/shared/lib/utils'
import { EMPTY_STRING } from '@/shared/constants'

export const createPasswordSchema = (t: LocaleType) =>
  z.object({
    password: passwordSchema(t),
    passwordConfirm: z.string().default(EMPTY_STRING),
  })

export type CreatePasswordFormValues = z.infer<ReturnType<typeof createPasswordSchema>>
