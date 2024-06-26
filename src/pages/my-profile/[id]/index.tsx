import { getBaseAppLayout } from '@/shared'
import { PageWrapper } from '@/widgets/page-wrapper'
import dynamic from 'next/dynamic'

const DynamicProfileCard = dynamic(
  import('@/entities/profile/ui/profile-card/profile-card').then(module => module.ProfileCard)
)
const MyProfilePage = () => {
  return (
    <PageWrapper paddingBlock={'36px'} title={'User | Instagram'}>
      {/* todo: data for profile */}
      <DynamicProfileCard
        data={{ firstname: 'Alex', lastname: 'Pupkin' }}
        isError={false}
        isLoading={false}
      />
    </PageWrapper>
  )
}

MyProfilePage.getLayout = getBaseAppLayout

/* todo: add role this page: */
// MyProfilePage.isOnlyUser = true

export default MyProfilePage
