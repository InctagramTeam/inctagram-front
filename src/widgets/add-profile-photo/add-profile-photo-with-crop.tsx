import { UserAvatar } from '@/entities/profile'
import { useProfile } from '@/entities/profile/model/store/profile-store'
import ImageOutlineIcon from '@/shared/assets/icons/ImageOutlineIcon'
import { createImageUrlFromPhotoFile } from '@/shared/lib/utils/create-image-url-from-photo-file'
import { AddAvatarButton } from '@/widgets/add-profile-photo/add-avatar-button/addAvatarButton'
import { DeleteAvatarButton } from '@/widgets/add-profile-photo/delete-avatar-button/delete-avatar-button'

import 'react-image-crop/dist/ReactCrop.css'

export const AddProfilePhotoWithCrop = ({ profileAvatar }: { profileAvatar: null | string }) => {
  const { localAvatar } = useProfile()

  const file = localAvatar?.get('file') as File
  const imageUrl = createImageUrlFromPhotoFile(file)

  const avatarUrl = profileAvatar ?? (imageUrl || '')

  return (
    <div className={'flex flex-col gap-y-6 py-[1.5rem]'}>
      <div className={`relative h-[192px] w-[192px]`}>
        <UserAvatar bgColor={'bg-Dark-500'} className={`h-full w-full`} src={avatarUrl}>
          <ImageOutlineIcon />
        </UserAvatar>
        {profileAvatar && <DeleteAvatarButton />}
      </div>
      <AddAvatarButton profileAvatar={profileAvatar} />
    </div>
  )
}
