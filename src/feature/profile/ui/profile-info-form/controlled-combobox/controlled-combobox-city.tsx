import React, { useEffect, useState } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { removeDublicateData, useQueryCities } from '@/feature/profile'
import { Combobox, ComboboxProps, useTranslation } from '@/shared'
import { useQueryClient } from '@tanstack/react-query'

type ControlledComboboxProps = {
  countryIds: string
  typeRequest: 'cities'
}

type Props<T extends FieldValues> = ControlledComboboxProps &
  Omit<
    ComboboxProps,
    | 'debounceInputValue'
    | 'fetchNextPage'
    | 'id'
    | 'isFetchingNextPage'
    | 'locations'
    | 'onChange'
    | 'setDebounceInputValue'
    | 'status'
    | 'value'
  > &
  UseControllerProps<T>

export const ControlledComboboxCity = <T extends FieldValues>({
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
  const queryClient = useQueryClient()

  const [debounceInputValue, setDebounceInputValue] = useState('')

  const { data, fetchNextPage, isFetchingNextPage, status } = useQueryCities({
    key: typeRequest,
    locale,
    countryIds,
    namePrefix: debounceInputValue,
  })

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['cities'] })
  }, [countryIds])

  const uniqueDataMap = removeDublicateData(data?.pages ?? [])

  return (
    <Combobox
      {...rest}
      {...field}
      debounceInputValue={debounceInputValue}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
      locations={uniqueDataMap}
      onChange={onChange}
      setDebounceInputValue={setDebounceInputValue}
      status={status}
      value={value}
    />
  )
}
