'use client'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { useTranslation } from '@/shared'
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
    field: { onBlur, onChange, value, ...field },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  const { locale, t } = useTranslation()

  return <SelectBox {...rest} {...field} locale={locale} onChange={onChange} value={value} />
}
