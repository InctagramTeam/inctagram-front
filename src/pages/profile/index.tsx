import { PageWrapper, getBaseAppLayout } from '@/shared/layouts'
import { Avatar } from '@/shared/ui/avatar'

const Profile = () => {
  return (
    <PageWrapper title={'Profile | Instagram'} paddingBlock={'36xp'}>
      <div className={`Profile`}>
        <div className={`profile-top`}>
          <div className={`avatar-photo`}>
            <Avatar />
          </div>
          <Text asComponent="h2" className={`URL_Profile`} variant="h1"></Text>
        </div>
        <div className={`profile-top`}></div>
      </div>
    </PageWrapper>
  )
}

Profile.getLayout = getBaseAppLayout
export default Profile
