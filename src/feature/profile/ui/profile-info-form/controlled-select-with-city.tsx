'use client'

import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { removeDublicateData, useQueryCities } from '@/feature/profile'
import { SelectBox, SelectProps, useTranslation } from '@/shared'

type ControlledSelectProps = {
  countryIds: string
  typeRequest: 'cities'
}

type Props<T extends FieldValues> = ControlledSelectProps &
  Omit<
    SelectProps,
    'fetchNextPage' | 'id' | 'isFetchingNextPage' | 'locations' | 'onChange' | 'value'
  > &
  UseControllerProps<T>

export const ControlledSelectWithCity = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  typeRequest,
  countryIds,
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

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useQueryCities({
    key: typeRequest,
    locale,
    countryIds,
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
