'use client'
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
    field: { onChange, onBlur, value, ...field },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return <Input {...rest} {...field} onBlur={onBlur} id={name} onChange={onChange} value={value} />
}
