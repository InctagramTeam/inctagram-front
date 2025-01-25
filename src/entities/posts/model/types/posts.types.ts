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
  items: PostItem[]
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

export type PublicPost = {
  comments: string[]
  createdAt: string
  description: string
  id: number
  postImages: PostImage[]
}
