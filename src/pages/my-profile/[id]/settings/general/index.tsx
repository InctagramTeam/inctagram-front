import React from 'react'
import { getSettingsLayout, TabContent } from '@/shared'
import { ProfileAvatarForm, ProfileInfoForm, ProfileInfoFormValues } from '@/feature/profile'

const General = () => {
  return (
    <TabContent value={'general'} className="flex">
      <ProfileAvatarForm onSubmit={() => {}} />
      <ProfileInfoForm
        className="grow"
        onSubmit={(formData: ProfileInfoFormValues) => {
          console.log(formData)
        }}
      />
    </TabContent>
  )
}

General.getLayout = getSettingsLayout
export default General
