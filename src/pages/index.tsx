import { Posts } from '@/entities/posts/model/types/posts.types'
import { Post } from '@/entities/posts/post/post'
import { Flex } from '@/shared'
import { getBaseAppLayout } from '@/shared/layouts'
import { Navigations } from '@/widgets/main'
import { PageWrapper } from '@/widgets/page-wrapper'

function HomePage() {
  //mock-data

  const posts: Posts = {
    page: 0,
    pagesCount: 0,
    items: [
      {
        description: 'description 1',
        id: 1,
        isDraft: false,
        postImages: [
          {
            id: 1,
            fileId: 'p1',
            order: 0,
            url: '/images/post1.png',
          },
        ],
      },
      {
        description: 'description 2',
        id: 2,
        isDraft: false,
        postImages: [
          {
            id: 2,
            fileId: 'p2',
            order: 0,
            url: '/images/post2.png',
          },
        ],
      },
      {
        description: 'description 3',
        id: 3,
        isDraft: false,
        postImages: [
          {
            id: 3,
            fileId: 'p3',
            order: 0,
            url: '/images/post3.png',
          },
        ],
      },
      {
        description: 'description 4',
        id: 4,
        isDraft: false,
        postImages: [
          {
            id: 4,
            fileId: 'p4',
            order: 0,
            url: '/images/post4.png',
          },
        ],
      },
    ],
  }

  return (
    <PageWrapper paddingBlock={'24px'} title={'Main | Instagram'}>
      {/*<Navigations />*/}
      <div>счетчик постов</div>
      <Flex gap={'12'} items={'start'} justify={'start'} wrap={'wrap'}>
        {posts.items.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </Flex>
    </PageWrapper>
  )
}

HomePage.getLayout = getBaseAppLayout
export default HomePage
