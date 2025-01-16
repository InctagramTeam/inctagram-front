'use client'

import React from 'react'

import { useUpdateProfile } from '@/entities/profile/api'
import { useGetProfileSettings } from '@/entities/profile/api/hooks/useGetProfileSettings'
import { useProfile } from '@/entities/profile/model/store/profile-store'
import { ProfileInfoForm, ProfileInfoFormValues } from '@/feature/profile'
import { ProfileInfoFormSkeleton } from '@/feature/profile/ui/profile-info-form/profile-info-form-skeleton'
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

const General = () => {
  const { t } = useTranslation()

  const { mutate: updateProfile } = useUpdateProfile()
  const { mutate: updateAvatar } = useUpdateAvatar()
  const { data: profileSettings, isLoading, isError } = useGetProfileSettings()

  const { localAvatar } = useProfile()

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
      {isLoading ? (
        <ProfileInfoFormSkeleton />
      ) : profileSettings ? (
        <>
          <AddProfilePhotoWithCrop profileAvatar={profileSettings.avatarUrl} />
          <ProfileInfoForm
            className={'grow'}
            onSubmit={submitProfileHandler}
            profileSettings={profileSettings}
          />
        </>
      ) : (
        <div>Профиль не найден!</div>
      )}
    </TabContent>
  )
}

General.getLayout = getSettingsLayout
export default General
