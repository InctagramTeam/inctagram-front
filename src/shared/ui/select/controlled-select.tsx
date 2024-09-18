'use client'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { SelectBox, SelectProps } from '@/shared/ui'

type Props<T extends FieldValues> = Omit<SelectProps, 'id' | 'onChange' | 'value'> &
  UseControllerProps<T>

export const ControlledSelect = <T extends FieldValues>({
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

  return <SelectBox {...rest} {...field} onChange={onChange} value={value} />
}
