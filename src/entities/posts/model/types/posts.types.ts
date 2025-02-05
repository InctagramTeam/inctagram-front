export type PostImage = {
  fileId: string
  id: number
  order: number
  url: string
}

export type PostItem = {
  createdAt: string
  description: string
  id: number
  isDraft: boolean
  postImages: PostImage[]
}

export type Posts = {
  items: PostType[]
  page: number
  pagesCount: number
  usersCount: number
}

export type PostDto = {
  aboutMe: string
  avatarId: null | string
  comments: string[]
  createdAt: string
  description: string
  id: number
  postImages: PostImage[]
  username: string
}

export type PostType = {
  avatar_url: null | string
  comments: string[]
  createdAt: string
  description: string
  id: number
  postImages: PostImage[]
  updatedAt: string
  userId: number
  username: string
}

export type PostRequest = {
  items: PostDto[]
  usersCount: number
}
