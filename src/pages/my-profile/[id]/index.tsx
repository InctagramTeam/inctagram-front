import { ParsedUrlQuery } from 'querystring'

import postsApi from '@/entities/posts/api/posts-api'
import { PublicPost } from '@/entities/posts/model/types/posts.types'
import { User } from '@/entities/profile'
import profileApi from '@/entities/profile/api/profile-api'
import { getBaseAppLayout } from '@/shared'
import { PageWrapper } from '@/widgets/page-wrapper'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'

const DynamicProfileCard = dynamic(
  import('@/entities/profile/ui/profile-card/profile-card').then(module => module.ProfileCard)
)

const MyProfilePage = ({
  user,
  posts,
  isError,
  isLoading,
}: {
  isError: boolean
  isLoading: boolean
  posts: PublicPost[]
  user: User | null
}) => {
  return (
    <PageWrapper paddingBlock={'36px'} title={'User | Instagram'}>
      {user ? (
        <DynamicProfileCard isError={isError} isLoading={isLoading} user={user} />
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

  const user = await profileApi.getProfile(id)
  const posts = await postsApi.getUserPosts(id)

  return { props: { user, posts } }
}) satisfies GetServerSideProps<{ posts: PublicPost[]; user: User | null }>

MyProfilePage.getLayout = getBaseAppLayout

/* todo: add role this page: */
// MyProfilePage.isOnlyUser = true

export default MyProfilePage
