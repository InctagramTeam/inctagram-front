import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Textarea, TextareaProps } from '@/components/ui/textarea/textarea'

type Props<T extends FieldValues> = Omit<TextareaProps, 'id' | 'onChange' | 'value'> &
  Omit<UseControllerProps<T>, 'defaultValue' | 'disabled' | 'rules'>

const ControlledTextarea = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name })

  return <Textarea error={error?.message} id={name} {...field} {...rest} />
}

ControlledTextarea.displayName = 'ControlledTextarea'
export { ControlledTextarea }
