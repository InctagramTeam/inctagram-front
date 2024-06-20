import { getBaseAppLayout, PageWrapper } from '@/shared/layouts'
import { UserAvatar } from '@/pages/profile/my-profile/ui/user-avatar/user-avatar'
import { ProfileFollowerInfo } from '@/pages/profile/my-profile/ui/profile-followers-info/profile-follower-info'
import { ProfilePhotos } from '@/pages/profile/my-profile/ui/profile-photos/profile-photos'

const Profile = () => {
  return (
    <PageWrapper title={'User | Instagram'} paddingBlock={'36px'}>
      <section className={`_Profile_ w-full pl-6`}>
        <div className={`_Profile-top_ flex w-full justify-start pb-[50px]`}>
          <div className={`_Avatar-photo_ min-h-[160px] max-w-[160px]`}>
            <UserAvatar classname={`w-full min-w-[200px] min-h-[200px]`} />
          </div>
          <ProfileFollowerInfo />
        </div>
        <ul
          className={`profile-bottom-gallery_ grid grid-cols-[repeat(4,228px)] grid-rows-[repeat(2,234px)] gap-x-2`}
        >
          <ProfilePhotos />
        </ul>
      </section>
    </PageWrapper>
  )
}

Profile.getLayout = getBaseAppLayout
export default Profile
