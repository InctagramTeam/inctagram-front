import React from 'react'

import { ProfileAvatarForm, ProfileInfoForm, ProfileInfoFormValues } from '@/feature/profile'
import { AddProfilePhotoWithCrop, TabContent, getSettingsLayout } from '@/shared'

const General = () => {
  return (
    <TabContent className={'flex'} value={'general'}>
      <AddProfilePhotoWithCrop />
      <ProfileInfoForm
        className={'grow'}
        onSubmit={(formData: ProfileInfoFormValues) => {
          console.log(formData)
        }}
      />
    </TabContent>
  )
}

General.getLayout = getSettingsLayout
export default General
