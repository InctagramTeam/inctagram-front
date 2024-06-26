'use client'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/shared/ui/checkbox'

/** Исключили:
 - rules: правила валидации react-hook-form -> используем валидатор Zod
 - defaultValue - так как используем в родительской компоненте
 */
type Props<T extends FieldValues> =
  /** Не имеем возможность контролировать компонент снаружи, нет возможности передать ему value, onChange */
  Omit<CheckboxProps, 'checked' | 'id' | 'onCheckedChange'> &
    Omit<UseControllerProps<T>, 'defaultValue'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  disabled,
  label,
  name,
  errorMessage,
  rules,
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
    rules,
    shouldUnregister,
  })

  return (
    <Checkbox
      {...rest}
      checked={checked}
      errorMessage={errorMessage}
      disabled={disabled}
      id={name}
      label={label}
      onCheckedChange={onValueChange}
    />
  )
}
