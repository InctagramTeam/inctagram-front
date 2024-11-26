import React, { useState } from 'react'
import { Control, UseFormResetField } from 'react-hook-form'

import { ProfileInfoFormValues } from '@/feature/profile'
import { EMPTY_STRING, useTranslation } from '@/shared'

import { ControlledComboboxCity, ControlledComboboxCountry } from './controlled-combobox'

type Props = {
  control: Control<ProfileInfoFormValues>
  resetFieldForm: UseFormResetField<ProfileInfoFormValues>
}

export const ComboboxGroup = ({ control, resetFieldForm }: Props) => {
  const [countryId, setCountryId] = useState(EMPTY_STRING)

  const { t } = useTranslation()

  return (
    <div className={'flex justify-between gap-6'}>
      <ControlledComboboxCountry
        className={'w-full'}
        control={control}
        label={t.pages.profile.settings.combobox.country.label}
        name={'country'}
        placeholder={t.pages.profile.settings.combobox.country.placeholder}
        resetFieldForm={resetFieldForm}
        setCountryId={setCountryId}
        typeRequest={'countries'}
      />
      <ControlledComboboxCity
        className={'w-full'}
        control={control}
        countryIds={countryId}
        label={t.pages.profile.settings.combobox.city.label}
        name={'city'}
        placeholder={t.pages.profile.settings.combobox.city.placeholder}
        typeRequest={'cities'}
      />
    </div>
  )
}

ComboboxGroup.displayName = 'SelectGroup'
