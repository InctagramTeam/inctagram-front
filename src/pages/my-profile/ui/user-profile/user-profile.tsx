import { ProfileFollowerInfo } from '@/pages/my-profile/ui/profile-followers-info/profile-follower-info'
import { ProfilePhotos } from '@/pages/my-profile/ui/profile-photos/profile-photos'
import { UserAvatar } from '@/pages/my-profile/ui/user-avatar/user-avatar'

export const UserProfile = () => {
  return (
    <section className={`_Profile_ w-full pl-6`}>
      <div className={`_Profile-top_ flex w-full justify-start pb-[50px]`}>
        <UserAvatar classname={`w-full min-w-[200px] min-h-[200px]`} />
        <ProfileFollowerInfo />
      </div>
      <ProfilePhotos />
    </section>
  )
}
