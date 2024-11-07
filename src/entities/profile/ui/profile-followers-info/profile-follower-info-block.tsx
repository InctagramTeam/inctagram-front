'use client'

import { User } from '@/entities/profile'
import { FollowersInfoHeader } from '@/entities/profile/ui/followers-info-header/followers-info-header'
import { ProfileInfoDescription } from '@/entities/profile/ui/profile-info-description/profile-info-description'
import { ProfileInfoUserStats } from '@/entities/profile/ui/profile-info-user-stats/profile-info-user-stats'

type Props = {
  user: User
}

export const ProfileFollowerInfoBlock = ({ user }: Props) => {
  return (
    <div className={`_profile-followers-info_ ml-[36px] w-full max-w-[734px] pl-[36px]`}>
      <FollowersInfoHeader profile={user?.profile} userId={user.id} />
      <ProfileInfoUserStats
        followers={user.followersCount}
        following={user.followingCount}
        publication={user.publicationsCount}
      />
      <ProfileInfoDescription aboutMe={user.profile?.aboutMe} />
    </div>
  )
}
