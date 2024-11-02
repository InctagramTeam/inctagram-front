'use client'

import { Posts } from '@/entities/posts/model/types/posts.types'
import { Post } from '@/entities/posts/ui/post'
import { UsersCounter } from '@/entities/posts/ui/users-counter'
import { Flex } from '@/shared'

import s from './posts.module.scss'

type Props = {
  posts?: Posts
}

export const PostsPage = (props: Props) => {
  const { posts } = props

  return (
    <div className={s.posts}>
      <UsersCounter />

      <Flex gap={'12'} items={'start'} justify={'start'} wrap={'wrap'}>
        {posts?.items.map(post => <Post key={post.id} {...post} />)}
      </Flex>
    </div>
  )
}
