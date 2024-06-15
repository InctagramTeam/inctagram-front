import { PageWrapper, getBaseAppLayout } from '@/shared/layouts'

const Profile = () => {
  return (
    <PageWrapper title={'Profile | Instagram'}>
      <h1>Profile</h1>
    </PageWrapper>
  )
}

Profile.getLayout = getBaseAppLayout
export default Profile
