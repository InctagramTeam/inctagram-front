import { useTranslation } from '@/shared'
import { FollowersInfoHeader } from '@/pages/profile/ui/profile-followers-info/followers-info-header/followers-info-header'
import { ProfileInfoDescription } from '@/pages/profile/ui/profile-followers-info/profile-info-description/profile-info-description'

export const ProfileFollowerInfo = () => {
  const { t } = useTranslation()

  return (
    <div className={`_profile-followers-info_ ml-[36px] w-full max-w-[734px] pl-[36px]`}>
      <FollowersInfoHeader />
      {/* todo: Text - aboutMe текст что с сервера должен прийти.. */}
      <div className={`_description_ w-full text-balance pb-[53px] pt-[23px]`}>
        <ProfileInfoDescription />
      </div>
    </div>
  )
}
