import React, { useState } from 'react'
import { Control } from 'react-hook-form'

import { ProfileInfoFormValues } from '@/feature/profile'
import { ControlledSelect } from '@/shared'

export const SelectGroup = ({ control }: { control: Control<ProfileInfoFormValues> }) => {
  //TODO - реализовать сохранение id страны для запроса
  const [countryId, setCountryId] = useState('Q159')

  return (
    <div className={'flex justify-between gap-6'}>
      <ControlledSelect
        className={'w-full'}
        control={control}
        label={'Select your country'}
        name={'country'}
        placeholder={'Country'}
        setCountryId={setCountryId}
        typeRequest={'countries'}
      />
      <ControlledSelect
        className={'w-full'}
        control={control}
        countryIds={countryId}
        label={'Select your city'}
        name={'city'}
        placeholder={'City'}
        typeRequest={'cities'}
      />
    </div>
  )
}

SelectGroup.displayName = 'SelectGroup'
