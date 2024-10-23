import { Post } from '@/entities/posts/post/post'
import { Flex } from '@/shared'
import { getBaseAppLayout } from '@/shared/layouts'
import { Navigations } from '@/widgets/main'
import { PageWrapper } from '@/widgets/page-wrapper'

function HomePage() {
  return (
    <PageWrapper paddingBlock={'24px'} title={'Main | Instagram'}>
      {/*<Navigations />*/}
      <div>счетчик постов</div>
      <Flex gap={'12'} items={'start'} justify={'start'} wrap={'wrap'}>
        <Post />
        <Post />
      </Flex>
    </PageWrapper>
  )
}

HomePage.getLayout = getBaseAppLayout
export default HomePage
