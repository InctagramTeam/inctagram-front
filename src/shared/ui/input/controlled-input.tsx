import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { InputProps } from '@/shared/ui/input/input'

import { Input } from '../input/index'

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
    field: { onChange, value, ...field },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return <Input {...rest} id={name} onChange={onChange} value={value} {...field} />
}
