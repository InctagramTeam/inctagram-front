'use client'

import { User } from '@/entities/profile'
import { FollowersInfoHeader } from '@/entities/profile/ui/followers-info-header/followers-info-header'
import { ProfileInfoDescription } from '@/entities/profile/ui/profile-info-description/profile-info-description'
import { ProfileInfoUserStats } from '@/entities/profile/ui/profile-info-user-stats/profile-info-user-stats'

type Props = {
  userInfo?: User
}

export const ProfileFollowerInfoBlock = ({ userInfo }: Props) => {
  return (
    <div className={`_profile-followers-info_ ml-[36px] w-full max-w-[734px] pl-[36px]`}>
      <FollowersInfoHeader profile={userInfo?.profile} />
      <ProfileInfoUserStats // TODO заполнить данными с бека, когда бэки добавят инфу в эндпоинт
        // following={userInfo?.following || 0}
        // followers={userInfo?.followers || 0}
        // publication={userInfo?.publication || 0}
        following={2218}
        followers={2358}
        publication={2764}
      />
      <ProfileInfoDescription aboutMe={userInfo?.profile?.aboutMe} />
    </div>
  )
}
