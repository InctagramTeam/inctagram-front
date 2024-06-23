import { UserAvatar } from '../user-avatar/user-avatar'
import { ProfileFollowerInfo } from '../profile-followers-info/profile-follower-info'
import { ProfilePhotos } from '../profile-photos/profile-photos'

export const ProfileCard = () => {
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
