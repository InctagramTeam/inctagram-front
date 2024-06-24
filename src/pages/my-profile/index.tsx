import { getBaseAppLayout, PageWrapper } from '@/shared/layouts'
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
        isLoading={false}
        isError={true}
      />
    </PageWrapper>
  )
}

MyProfilePage.getLayout = getBaseAppLayout

/* todo: add role this page: */
// MyProfilePage.isOnlyUser = true

export default MyProfilePage
