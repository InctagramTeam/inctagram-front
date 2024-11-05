'use client'
import { FocusEvent } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/shared/ui'

type Props<T extends FieldValues> = Omit<InputProps, 'id' | 'onChange' | 'value'> &
  UseControllerProps<T>

export const ControlledInput = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
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

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    onBlur()
    if (name === 'username') {
      onChange(e.target.value.trim())
    }
  }

  return (
    <Input {...rest} {...field} id={name} onBlur={handleBlur} onChange={onChange} value={value} />
  )
}
