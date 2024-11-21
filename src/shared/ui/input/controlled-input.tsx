'use client'
import { KeyboardEvent, useState } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { useTranslation } from '@/shared'
import { Input, InputProps } from '@/shared/ui'

type Props<T extends FieldValues> = Omit<InputProps, 'id' | 'onChange' | 'value'> &
  UseControllerProps<T>

export const ControlledInput = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  errorMessage,
  ...rest
}: Props<T>) => {
  const {
    field: { onBlur, onChange, value, ...field },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })
  const { t } = useTranslation()
  const [localError, setLocalError] = useState<null | string>(null)

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (['email', 'password', 'passwordConfirm', 'username'].includes(name)) {
      if (e.key.match(/\s/)) {
        e.preventDefault()
        setLocalError(t.validation.noSpaces)
      } else {
        setLocalError(null)
      }
    }
  }

  return (
    <Input
      {...rest}
      {...field}
      aria-invalid={!!errorMessage || !!localError}
      errorMessage={localError || errorMessage}
      id={name}
      onBlur={onBlur}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      value={value}
    />
  )
}
