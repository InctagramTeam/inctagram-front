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

  console.log('posts=', posts)
  //mock-data
  const mockposts: Posts = {
    page: 0,
    pagesCount: 0,
    items: [
      {
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incdipiscing elit, sed do eiusmod tempor inipiscing elit, sed do eiusmod tempor incdipiscing elit, sed do eiusmod tempor incd.mpor incd.mpor incd.mpo1234567890',
        id: 1,
        isDraft: false,
        postImages: [
          {
            id: 1,
            fileId: 'p1',
            order: 0,
            url: '/images/post1.png',
          },
          {
            id: 2,
            fileId: 'p2',
            order: 0,
            url: '/images/post2.png',
          },
          {
            id: 3,
            fileId: 'p3',
            order: 0,
            url: '/images/post3.png',
          },
          {
            id: 4,
            fileId: 'p4',
            order: 0,
            url: '/images/post4.png',
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
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incdipiscing elit, sed do eiusmod tempor inipiscing elit, sed do eiusmod tempor incdipiscing elit, sed do eiusmod tempor incd.mpor incd.mpor incd.mpo1234567890',
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
    <div className={s.posts}>
      <UsersCounter />

      <Flex gap={'12'} items={'start'} justify={'start'} wrap={'wrap'}>
        {mockposts.items.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </Flex>
    </div>
  )
}
