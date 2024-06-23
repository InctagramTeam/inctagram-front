import { getBaseAppLayout, PageWrapper } from '@/shared/layouts'
import dynamic from 'next/dynamic'

const DynamicUserProfile = dynamic(
  import('../my-profile/ui/user-profile/user-profile').then(module => module.UserProfile)
)
const MyProfilePage = () => {
  return (
    <PageWrapper paddingBlock={'36px'} title={'User | Instagram'}>
      <DynamicUserProfile />
    </PageWrapper>
  )
}

MyProfilePage.getLayout = getBaseAppLayout

/* todo: add role this page: */
// MyProfilePage.isOnlyUser = true

export default MyProfilePage
