'use client'

import { Posts } from '@/entities/posts/model/types/posts.types'
import { Post } from '@/entities/posts/ui/post'
import { UsersCounter } from '@/entities/posts/ui/users-counter'
import { Flex } from '@/shared'

type Props = {
  posts?: Posts
}

export const PostsPage = (props: Props) => {
  const { posts } = props

  return (
    <div className={'flex flex-col gap-9'}>
      <UsersCounter value={posts?.usersCount} />

      <Flex gap={'12'} items={'start'} justify={'start'} wrap={'wrap'}>
        {posts?.items.map(post => <Post key={post.postId} {...post} />)}
      </Flex>
    </div>
  )
}
