import { PostsPage } from '@/entities/posts/ui/posts/posts'
import { getBaseAppLayout } from '@/shared/layouts'
import { Counter } from '@/shared/ui/counter'
import { PageWrapper } from '@/widgets/page-wrapper'

function HomePage() {
  return (
    <PageWrapper paddingBlock={'24px'} title={'Main | Instagram'}>
      {/*<Navigations />*/}

      <PostsPage />
    </PageWrapper>
  )
}

HomePage.getLayout = getBaseAppLayout
export default HomePage
