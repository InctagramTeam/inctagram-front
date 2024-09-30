import React from 'react'
import { ControlledSelect } from '@/shared'
import { Control } from 'react-hook-form'
import { ProfileInfoFormValues } from '@/feature/profile'

export const SelectGroup = ({ control }: { control: Control<ProfileInfoFormValues> }) => {
  return (
    <div className="flex justify-between gap-6">
      <ControlledSelect
        control={control}
        label="Select your country"
        placeholder="Country"
        name="country"
        // options={options}
        className="w-full"
      />
      <ControlledSelect
        control={control}
        label="Select your city"
        placeholder="City"
        name="city"
        // options={options}
        className="w-full"
      />
    </div>
  )
}

SelectGroup.displayName = 'SelectGroup'
