import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/shared/ui/checkbox/checkbox'

/** Исключили:
 - rules: правила валидации react-hook-form -> используем валидатор Zod
 - defaultValue - так как используем в родительской компоненте
 */
type Props<T extends FieldValues> =
  /** Не имеем возможность контролировать компонент снаружи, нет возможности передать ему value, onChange */
  Omit<CheckboxProps, 'checked' | 'onCheckedChange'> &
    Omit<UseControllerProps<T>, 'defaultValue' | 'rules'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  disabled,
  label,
  name,
  shouldUnregister,
  /** В ...rest попадут все пропсы: CheckboxProps */
  ...rest
}: Props<T>) => {
  const {
    field: { onChange: onValueChange, value: checked },
  } = useController({
    control,
    disabled,
    name,
    shouldUnregister,
  })

  return (
    <Checkbox
      {...rest}
      checked={checked}
      disabled={disabled}
      id={name}
      label={label}
      onCheckedChange={onValueChange}
      {...rest}
    />
  )
}
