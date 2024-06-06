import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { getLayout } from '@/shared/layouts/base-layout/base-layout'

const Profile = () => {
  return (
    <PageWrapper title={'Profile | Instagram'}>
      <h1>Profile</h1>
    </PageWrapper>
  )
}

Profile.getLayout = getLayout
export default Profile
