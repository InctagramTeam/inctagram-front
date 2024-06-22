import { useTranslation } from '@/shared'

import { FollowersInfoHeader } from './followers-info-header/followers-info-header'
import { ProfileInfoDescription } from './profile-info-description/profile-info-description'

export const ProfileFollowerInfo = () => {
  return (
    <div className={`_profile-followers-info_ ml-[36px] w-full max-w-[734px] pl-[36px]`}>
      <FollowersInfoHeader />
      {/* todo: Text - aboutMe текст что с сервера должен прийти.. */}
      <ProfileInfoDescription />
    </div>
  )
}
