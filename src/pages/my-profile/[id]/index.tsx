import { ParsedUrlQuery } from 'querystring'

import postsApi from '@/entities/posts/api/posts-api'
import { Profile } from '@/entities/profile'
import profileApi from '@/entities/profile/api/profile-api'
import { getBaseAppLayout } from '@/shared'
import { PageWrapper } from '@/widgets/page-wrapper'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'

const DynamicProfileCard = dynamic(
  import('@/entities/profile/ui/profile-card/profile-card').then(module => module.ProfileCard)
)

const MyProfilePage = ({
  profile,
  isError,
  isLoading,
}: {
  isError: boolean
  isLoading: boolean
  profile: Profile | null
}) => {
  return (
    <PageWrapper paddingBlock={'36px'} title={'User | Instagram'}>
      {profile ? (
        <DynamicProfileCard isError={isError} isLoading={isLoading} profile={profile} />
      ) : (
        <div className={'flex items-center justify-center'}>Профиль не найден</div>
      )}
    </PageWrapper>
  )
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getServerSideProps = (async context => {
  const { id } = context.params as Params

  const profile = await profileApi.getProfileById(id)

  return { props: { profile } }
}) satisfies GetServerSideProps<{ profile: Profile | null }>

MyProfilePage.getLayout = getBaseAppLayout

/* todo: add role this page: */
// MyProfilePage.isOnlyUser = true

export default MyProfilePage
