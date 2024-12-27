import React from 'react'

import { ParsedUrlQuery } from 'querystring'

import { ProfileSettings } from '@/entities/profile'
import { useUpdateProfile } from '@/entities/profile/api'
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
import { toast } from '@/shared/ui/toast/use-toast'
import { AddProfilePhotoWithCrop } from '@/widgets/add-profile-photo'
import { useUpdateAvatar } from '@/widgets/add-profile-photo/add-avatar-button/hooks/useUpdateAvatar'
import { format } from 'date-fns'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import useSWR, { unstable_serialize } from 'swr'

const General = ({ profileSettings }: { profileSettings: ProfileSettings | null }) => {
  const { t } = useTranslation()
  const { mutate: updateProfile } = useUpdateProfile()
  const { mutate: updateAvatar } = useUpdateAvatar()
  const router = useRouter()

  const { data } = useSWR('/profile', () => profileApi.getProfileById('6'))

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

  if (!profileSettings) {
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

    updateProfile(profile)

    localAvatar && updateAvatarHandler(localAvatar)
  }

  return (
    <TabContent className={'flex'} value={TABS_VARIANTS.general}>
      <AddProfilePhotoWithCrop />
      <ProfileInfoForm
        className={'grow'}
        onSubmit={submitProfileHandler}
        profileSettings={profileSettings}
      />
    </TabContent>
  )
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getServerSideProps = (async context => {
  const { id } = context.params as Params

  const profileSettings = await profileApi.getProfileSettings(id)

  return {
    props: {
      profileSettings,
      fallback: {
        '/profileSettings': profileSettings,
      },
    },
  }
}) satisfies GetServerSideProps<{ profileSettings: ProfileSettings | null }>

General.getLayout = getSettingsLayout
export default General
