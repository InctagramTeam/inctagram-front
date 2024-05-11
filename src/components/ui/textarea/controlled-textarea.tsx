import { Textarea, TextareaProps } from '@/components/ui/textarea/textarea'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

type Props<T extends FieldValues> = Omit<TextareaProps, 'id' | 'value' | 'onChange'> &
  Omit<UseControllerProps<T>, 'disabled' | 'defaultValue' | 'rules'>

const ControlledTextarea = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name })

  return <Textarea error={error?.message} id={name} {...field} {...rest} />
}

ControlledTextarea.displayName = 'ControlledTextarea'
export { ControlledTextarea }
