import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/components/ui/input/input'

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

  return <Input id={name} onChange={onChange} value={value} {...rest} {...field} />
}
