import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { getLayout } from '@/components/Layout/Layout'

const Profile = () => {
  return (
    <>
      <HeadMeta title={'Profile'} />
      <h1>Profile</h1>
    </>
  )
}

Profile.getLayout = getLayout
export default Profile
