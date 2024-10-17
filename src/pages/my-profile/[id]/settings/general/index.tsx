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
  //TODO: заменить на одну функцию с дженериками
  const { mutate: createProfile } = useCreateProfile()
  const { mutate: updateProfile } = useUpdateProfile()

  const submitCreateProfileHandler = (formData: ProfileInfoFormValues) => {
    const { lastName, userName, firstName, city, aboutMe, dateOfBirth } = formData

    createProfile({
      lastName,
      userName,
      firstName,
      city: city ?? '',
      aboutMe: aboutMe ?? '',
      dateOfBirth: format(dateOfBirth, 'dd-MM-yyyy'),
    })
  }

  const submitUpdateProfileHandler = (formData: ProfileInfoFormValues) => {
    const { lastName, userName, firstName, city, aboutMe, dateOfBirth } = formData

    updateProfile({
      lastName,
      userName,
      firstName,
      city: city ?? '',
      aboutMe: aboutMe ?? '',
      dateOfBirth: format(dateOfBirth, 'dd-MM-yyyy'),
    })
  }

  return (
    <TabContent className={'flex'} value={'general'}>
      <AddProfilePhotoWithCrop userId={user.id} />
      <ProfileInfoForm
        className={'grow'}
        onSubmit={user.profile ? submitUpdateProfileHandler : submitCreateProfileHandler}
        user={user}
      />
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
