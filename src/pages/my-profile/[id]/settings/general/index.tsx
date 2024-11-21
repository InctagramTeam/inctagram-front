import React from 'react'

import { ParsedUrlQuery } from 'querystring'

import { User } from '@/entities/profile'
import { useCreateProfile, useUpdateProfile } from '@/entities/profile/api'
import profileApi from '@/entities/profile/api/profile-api'
import { ProfileInfoForm, ProfileInfoFormValues } from '@/feature/profile'
import { AddProfilePhotoWithCrop, EMPTY_STRING, TabContent, getSettingsLayout } from '@/shared'
import { format } from 'date-fns'
import { GetServerSideProps } from 'next'

const General = ({ user }: { user: User | null }) => {
  const { mutate: createProfile } = useCreateProfile()
  const { mutate: updateProfile } = useUpdateProfile()

  if (!user) {
    return null
  }

  const submitProfileHandler = (formData: ProfileInfoFormValues) => {
    const { userName, firstName, lastName, dateOfBirth, country, city, aboutMe } = formData

    const profile = {
      userName,
      firstName,
      lastName,
      dateOfBirth: format(dateOfBirth, 'MM-dd-yyyy'),
      country: country ?? EMPTY_STRING,
      city: city ?? EMPTY_STRING,
      aboutMe: aboutMe ?? EMPTY_STRING,
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
}) satisfies GetServerSideProps<{ user: User | null }>

General.getLayout = getSettingsLayout
export default General
