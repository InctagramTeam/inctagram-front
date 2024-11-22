import { UserAvatar } from '@/entities/profile'
import { useProfile } from '@/entities/profile/model/store/profile-store'
import ImageOutlineIcon from '@/shared/assets/icons/ImageOutlineIcon'
import { createImageUrlFromPhotoFile } from '@/shared/lib/utils/create-image-url-from-photo-file'
import { AddAvatarButton } from '@/shared/ui/add-profile-photo/add-avatar-button/addAvatarButton'
import { DeleteAvatarButton } from '@/shared/ui/add-profile-photo/delete-avatar-button/delete-avatar-button'
import { useMyProfile } from '@/shared/ui/add-profile-photo/useMyProfile'

import 'react-image-crop/dist/ReactCrop.css'

export const AddProfilePhotoWithCrop = () => {
  const { data: myProfile } = useMyProfile()
  const { localAvatar } = useProfile()

  if (!myProfile) {
    return null
  }

  const file = localAvatar?.get('file') as File
  const imageUrl = createImageUrlFromPhotoFile(file)

  const avatarUrl = myProfile.profile?.url ?? (imageUrl || '')

  return (
    <div className={'flex flex-col gap-y-6 py-[1.5rem]'}>
      <div className={`relative h-[192px] w-[192px]`}>
        <UserAvatar bgColor={'bg-Dark-500'} className={`h-full w-full`} src={avatarUrl}>
          <ImageOutlineIcon />
        </UserAvatar>
        {myProfile.profile?.url && <DeleteAvatarButton />}
      </div>
      <AddAvatarButton profile={myProfile.profile} />
    </div>
  )
}
