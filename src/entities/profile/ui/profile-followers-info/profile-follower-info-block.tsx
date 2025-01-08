'use client'

import { Profile } from '@/entities/profile'
import { FollowersInfoHeader } from '@/entities/profile/ui/followers-info-header/followers-info-header'
import { ProfileInfoDescription } from '@/entities/profile/ui/profile-info-description/profile-info-description'
import { ProfileInfoUserStats } from '@/entities/profile/ui/profile-info-user-stats/profile-info-user-stats'

type Props = {
  profile: Profile
}

export const ProfileFollowerInfoBlock = ({ profile }: Props) => {
  return (
    <div className={`_profile-followers-info_ ml-[36px] w-full max-w-[734px] pl-[36px]`}>
      <FollowersInfoHeader profile={profile} userId={profile.id} />
      <ProfileInfoUserStats
        followers={profile.followersCount}
        following={profile.followingCount}
        publication={profile.publicationsCount}
      />
      <ProfileInfoDescription aboutMe={profile.aboutMe ?? 'Not information'} />
    </div>
  )
}
