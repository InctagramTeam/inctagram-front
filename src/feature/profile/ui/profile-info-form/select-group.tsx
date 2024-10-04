import React, { useState } from 'react'
import { Control } from 'react-hook-form'

import { ProfileInfoFormValues } from '@/feature/profile'
import { ControlledSelect } from '@/shared'

export const SelectGroup = ({ control }: { control: Control<ProfileInfoFormValues> }) => {
  const [countryId, setCountryId] = useState()

  return (
    <div className={'flex justify-between gap-6'}>
      <ControlledSelect
        className={'w-full'}
        control={control}
        label={'Select your country'}
        name={'country'}
        placeholder={'Country'}
      />
      <ControlledSelect
        className={'w-full'}
        control={control}
        label={'Select your city'}
        name={'city'}
        placeholder={'City'}
      />
    </div>
  )
}

SelectGroup.displayName = 'SelectGroup'
