import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/ui/page'

const Profile = () => {
  return (
    <PageWrapper title={'Profile | Instagram'}>
      <h1>Profile</h1>
    </PageWrapper>
  )
}

Profile.getLayout = getLayout
export default Profile
