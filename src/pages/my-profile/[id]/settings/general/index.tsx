import React from 'react'

import { ParsedUrlQuery } from 'querystring'

import { User } from '@/entities/profile'
import { useCreateProfile, useUpdateProfile } from '@/entities/profile/api'
import profileApi from '@/entities/profile/api/profile-api'
import { ProfileInfoForm, ProfileInfoFormValues } from '@/feature/profile'
import { AddProfilePhotoWithCrop, TabContent, getSettingsLayout } from '@/shared'
import { format } from 'date-fns'
import { GetServerSideProps } from 'next'

const General = ({ user }: { user: User }) => {
  const { mutate: createProfile } = useCreateProfile()
  const { mutate: updateProfile } = useUpdateProfile()

  const submitProfileHandler = (formData: ProfileInfoFormValues) => {
    const { userName, firstName, lastName, dateOfBirth, city, aboutMe } = formData

    const profile = {
      userName,
      firstName,
      lastName,
      dateOfBirth: format(dateOfBirth, 'MM-dd-yyyy'),
      city: city ?? '',
      aboutMe: aboutMe ?? '',
    }

    user.profile ? updateProfile(profile) : createProfile(profile)
  }

  return (
    <TabContent className={'flex'} value={'general'}>
      <AddProfilePhotoWithCrop />
      <ProfileInfoForm className={'grow'} onSubmit={submitProfileHandler} user={user} />
    </TabContent>
  )
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getServerSideProps = (async context => {
  const { id } = context.params as Params

  const user = await profileApi.getProfile(id)

  return { props: { user } }
}) satisfies GetServerSideProps<{ user: User }>

General.getLayout = getSettingsLayout
export default General
