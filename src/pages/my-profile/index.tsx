import { getBaseAppLayout, PageWrapper } from '@/shared/layouts'
import { UserProfile } from '@/pages/my-profile/ui/user-profile/user-profile'

const MyProfilePage = () => {
  return (
    <PageWrapper paddingBlock={'36px'} title={'User | Instagram'}>
      <UserProfile />
    </PageWrapper>
  )
}

MyProfilePage.getLayout = getBaseAppLayout
export default MyProfilePage
