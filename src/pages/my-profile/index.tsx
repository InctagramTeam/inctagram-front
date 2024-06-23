import { UserProfile } from '@/pages/my-profile/ui/user-profile/user-profile'
import { PageWrapper, getBaseAppLayout } from '@/shared/layouts'

const MyProfilePage = () => {
  return (
    <PageWrapper paddingBlock={'36px'} title={'User | Instagram'}>
      <UserProfile />
    </PageWrapper>
  )
}

MyProfilePage.getLayout = getBaseAppLayout
// MyProfilePage.isOnlyUser = true

export default MyProfilePage
