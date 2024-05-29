'use client'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { Input, InputProps } from '@/shared/ui/input/input'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputProps, 'id' | 'onChange' | 'value'>

export const ControlledInput = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return <Input {...rest} {...field} id={name} onChange={onChange} value={value} />
}
