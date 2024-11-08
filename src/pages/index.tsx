import { Posts } from '@/entities/posts'
import postsApi from '@/entities/posts/api/posts-api'
import { PostsPage } from '@/entities/posts/ui/posts/posts'
import { getBaseAppLayout } from '@/shared/layouts'
import { PageWrapper } from '@/widgets/page-wrapper'
import { GetServerSideProps } from 'next'

type HomePageProps = {
  posts: Posts
}

function HomePage({ posts }: HomePageProps) {
  return (
    <PageWrapper paddingBlock={'24px'} title={'Main | Instagram'}>
      {/*<Navigations />*/}

      <PostsPage posts={posts} />
    </PageWrapper>
  )
}

export const getServerSideProps: GetServerSideProps<{ posts: Posts }> = async context => {
  const posts = await postsApi.getPublicPosts()

  return { props: { posts } }
}

HomePage.getLayout = getBaseAppLayout
export default HomePage
