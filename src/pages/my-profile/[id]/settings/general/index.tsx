import React from 'react'

import { ProfileAvatarForm, ProfileInfoForm, ProfileInfoFormValues } from '@/feature/profile'
import profileApi from '@/feature/profile/api/profile-api'
import { TabContent, getSettingsLayout } from '@/shared'

const General = () => {
  const onSubmitProfileSettings = (formData: ProfileInfoFormValues) => {
    profileApi.createProfile({ ...formData })
  }

  return (
    <TabContent className={'flex'} value={'general'}>
      <ProfileAvatarForm onSubmit={() => {}} />
      <ProfileInfoForm
        className={'grow'}
        // onSubmit={(formData: ProfileInfoFormValues) => {
        //   console.log(formData)
        // }}
        onSubmit={onSubmitProfileSettings}
      />
    </TabContent>
  )
}

General.getLayout = getSettingsLayout
export default General
