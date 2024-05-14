import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from 'src/components/ui/page-wrapper'

const Profile = () => {
  return (
    <PageWrapper title={'Profile | Instagram'}>
      <h1>Profile</h1>
    </PageWrapper>
  )
}

Profile.getLayout = getLayout
export default Profile
