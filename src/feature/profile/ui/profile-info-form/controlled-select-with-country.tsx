'use client'

import { useEffect } from 'react'
import { FieldValues, UseControllerProps, UseFormResetField, useController } from 'react-hook-form'

import { ProfileInfoFormValues, removeDublicateData, useQueryCountries } from '@/feature/profile'
import { SelectBox, SelectProps, useTranslation } from '@/shared'

type ControlledSelectProps = {
  resetFieldForm: UseFormResetField<ProfileInfoFormValues>
  setCountryId: (id: string) => void
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

  const { data, fetchNextPage, isFetchingNextPage } = useQueryCountries({
    key: typeRequest,
    locale,
  })

  const uniqueDataMap = removeDublicateData(data?.pages ?? [])

  useEffect(() => {
    const countryWikiDataId = uniqueDataMap.find(country => country.name === value)?.wikiDataId

    if (countryWikiDataId) {
      resetFieldForm('city')
      setCountryId(countryWikiDataId)
    }
  }, [value])

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
