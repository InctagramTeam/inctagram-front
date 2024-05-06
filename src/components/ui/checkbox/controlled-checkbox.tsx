import { FieldValues, UseControllerProps, useController } from 'react-hook-form'
import { Checkbox, CheckboxProps } from '@/components/ui/checkbox/checkbox'

export type ControlledCheckboxProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules' | 'shouldUnregister'
> &
  Omit<CheckboxProps, 'checked' | 'onValueChange'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  disabled,
  name,
  ...rest
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({ control, disabled, name })

  return <Checkbox {...rest} checked={value} disabled={disabled} onValueChange={onChange} />
}
