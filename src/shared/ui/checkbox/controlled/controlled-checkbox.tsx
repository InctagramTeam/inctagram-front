import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { Checkbox, CheckboxProps } from '@/shared/ui/checkbox/checkbox'

/** Исключили (Omit-ом)
 - rules: правила валидации react-hook-form -> используем валидатор Zod
 - defaultValue - так как используем в родительской компоненте
 */
type Props<T extends FieldValues> = Omit<UseControllerProps<T>, 'rules' | 'defaultValue'> &
  /** Не имеем возможность контролировать компонент снаружи, нет возможности передать ему value, onChange */
  Omit<CheckboxProps, 'checked' | 'onCheckedChange'>

export const ControlledCheckbox = <T extends FieldValues>({
  label,
  shouldUnregister,
  control,
  name,
  disabled,
  /** В ...rest попадут все пропсы: CheckboxProps */
  ...rest
}: Props<T>) => {
  const {
    field: { onChange: onValueChange, value: checked },
  } = useController({
    control,
    name,
    disabled,
    shouldUnregister,
  })

  return (
    <Checkbox
      {...rest}
      checked={checked}
      id={name}
      disabled={disabled}
      onCheckedChange={onValueChange}
      label={label}
      {...rest}
    />
  )
}
