import { LocaleType } from 'locales'
import { z } from 'zod'
import { emailSchema } from '@/shared/lib/utils'

export const forgotPasswordSchema = (t: LocaleType) =>
  z.object({
    email: emailSchema(t),
    recaptcha: z.boolean({ message: t.validation.recaptcha }),
  })

export type ForgotPasswordFormValues = z.infer<ReturnType<typeof forgotPasswordSchema>>
