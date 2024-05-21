import { getLayout } from '@/shared/layouts/layout'
import { PageWrapper } from '@/shared/layouts/page-wrapper'

const Profile = () => {
  return (
    <PageWrapper title={'Profile | Instagram'}>
      <h1>Profile</h1>
    </PageWrapper>
  )
}

Profile.getLayout = getLayout
export default Profile
