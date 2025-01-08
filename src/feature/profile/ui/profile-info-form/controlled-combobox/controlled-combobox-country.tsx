import React, { useEffect, useState } from 'react'
import { FieldValues, UseControllerProps, UseFormResetField, useController } from 'react-hook-form'

import { ProfileInfoFormValues, removeDublicateData, useQueryCountries } from '@/feature/profile'
import { EMPTY_STRING, useTranslation } from '@/shared'
import { Combobox, ComboboxProps } from '@/shared/ui/combobox/combobox'

type ControlledComboboxProps = {
  resetFieldForm: UseFormResetField<ProfileInfoFormValues>
  setCountryId: (id: string) => void
  typeRequest: 'countries'
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

export const ControlledComboboxCountry = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  typeRequest,
  resetFieldForm,
  setCountryId,
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
  const [debounceInputValue, setDebounceInputValue] = useState(EMPTY_STRING)

  const { data, fetchNextPage, isFetchingNextPage, status } = useQueryCountries({
    key: typeRequest,
    locale,
    namePrefix: debounceInputValue,
  })

  const uniqueDataMap = removeDublicateData(data?.pages ?? [])

  useEffect(() => {
    const countryWikiDataId = uniqueDataMap.find(country => country.name === value)?.wikiDataId

    if (countryWikiDataId) {
      resetFieldForm('city', { defaultValue: EMPTY_STRING })
      setCountryId(countryWikiDataId)
    }
  }, [value])

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
