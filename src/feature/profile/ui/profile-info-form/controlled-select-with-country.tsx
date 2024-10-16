'use client'

import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { removeDublicateData, useQueryCountries } from '@/feature/profile'
import { SelectBox, SelectProps, useTranslation } from '@/shared'

type ControlledSelectProps = {
  typeRequest: 'countries'
}

type Props<T extends FieldValues> = ControlledSelectProps &
  Omit<
    SelectProps,
    'fetchNextPage' | 'id' | 'isFetchingNextPage' | 'locations' | 'onChange' | 'value'
  > &
  UseControllerProps<T>

export const ControlledSelectWithCountry = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  typeRequest,
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

  const { locale } = useTranslation()

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useQueryCountries({
    key: typeRequest,
    locale,
  })

  const uniqueDataMap = removeDublicateData(data?.pages ?? [])

  return (
    <SelectBox
      {...rest}
      {...field}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
      locations={uniqueDataMap}
      onChange={onChange}
      value={value}
    />
  )
}
