import * as React from 'react'

import { UserAvatar } from '@/entities/profile'
import ImageOutlineIcon from '@/shared/assets/icons/ImageOutlineIcon'

import 'react-image-crop/dist/ReactCrop.css'
import { DeleteAvatarButton } from '@/shared/ui/add-profile-photo/delete-avatar-button/delete-avatar-button'
import { AddAvatarButton } from '@/shared/ui/add-profile-photo/add-avatar-button/addAvatarButton'
import { useMyProfile } from '@/shared/ui/add-profile-photo/useMyProfile'

export const AddProfilePhotoWithCrop = ({ userId }: { userId: number }) => {
  const { data: myProfile } = useMyProfile()

  return (
    <div className={'flex flex-col gap-y-6 py-[1.5rem]'}>
      <div className={`relative h-[192px] w-[192px]`}>
        <UserAvatar
          bgColor={'bg-Dark-500'}
          className={`h-full w-full`}
          src={
            `https://incubatogramdata.storage.yandexcloud.net/${myProfile?.profile.avatarId}` || '' //Todo исправить на бэке начало ссылки.
          }
        >
          <ImageOutlineIcon />
        </UserAvatar>
        {myProfile?.profile.avatarId && <DeleteAvatarButton />}
      </div>
      <AddAvatarButton />
    </div>
  )
}
