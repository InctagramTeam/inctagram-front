import { ComponentPropsWithoutRef } from 'react'

import { CreatePasswordFormValues } from '@/feature/auth/model/utils/validators'
import { useTranslation } from '@/shared/lib/hooks'
import { Card } from '@/shared/ui/card'
import { clsx } from 'clsx'

type Props = {
  className?: string
  disabled?: boolean
  onSubmit: (formData: CreatePasswordFormValues) => void
} & Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'>
export const CreatePasswordForm = ({ className, disabled, onSubmit, ...rest }: Props) => {
  const { t } = useTranslation()

  const classes = {
    form: clsx(`max-w-[380px] w-full p-[1.5rem]`, className),
  }

  return <Card asComponent={'form'} className={classes.form} {...rest}></Card>
}

CreatePasswordForm.displayName = 'CreatePasswordForm'
