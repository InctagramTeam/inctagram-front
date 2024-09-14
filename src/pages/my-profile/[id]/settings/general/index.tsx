import React from 'react'
import { getSettingsLayout, TabContent } from '@/shared'
import { ProfileAvatarForm, ProfileInfoForm } from '@/feature/profile'

const General = () => {
  return (
    <TabContent value={'general'} className="flex">
      <ProfileAvatarForm onSubmit={() => {}} />
      <ProfileInfoForm className="grow" onSubmit={() => {}} />
    </TabContent>
  )
}

General.getLayout = getSettingsLayout
export default General
