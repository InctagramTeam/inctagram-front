import React from 'react'

import { ParsedUrlQuery } from 'querystring'

import { User } from '@/entities/profile'
import { useCreateProfile, useUpdateProfile } from '@/entities/profile/api'
import profileApi from '@/entities/profile/api/profile-api'
import { useProfile } from '@/entities/profile/model/store/profile-store'
import { ProfileInfoForm, ProfileInfoFormValues } from '@/feature/profile'
import {
  EMPTY_STRING,
  TABS_VARIANTS,
  TabContent,
  getSettingsLayout,
  useTranslation,
} from '@/shared'
import { AddProfilePhotoWithCrop } from '@/shared/ui/add-profile-photo'
import { useUpdateAvatar } from '@/shared/ui/add-profile-photo/add-avatar-button/hooks/useUpdateAvatar'
import { toast } from '@/shared/ui/toast/use-toast'
import { format } from 'date-fns'
import { GetServerSideProps } from 'next'

const General = ({ user }: { user: User | null }) => {
  const { t } = useTranslation()
  const { mutate: createProfile } = useCreateProfile()
  const { mutate: updateProfile } = useUpdateProfile()
  const { mutate: updateAvatar } = useUpdateAvatar()

  const updateAvatarHandler = (formData: FormData) => {
    if (navigator.onLine) {
      updateAvatar(formData)
    } else {
      toast({
        description: t.pages.profile.addProfilePhoto.errors.offline,
        title: t.label.error,
        variant: 'destructive',
      })
    }
  }
  const { localAvatar } = useProfile()

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
    localAvatar && updateAvatarHandler(localAvatar)
  }

  return (
    <TabContent className={'flex'} value={TABS_VARIANTS.general}>
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
