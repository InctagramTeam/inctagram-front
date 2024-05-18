import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'
import { Page } from '@/components/ui/page'

const Profile = () => {
  return (
    <Page>
      <HeadMeta title={'Profile'} />
      <h1>Profile</h1>
    </Page>
  )
}

Profile.getLayout = getLayout
export default Profile
