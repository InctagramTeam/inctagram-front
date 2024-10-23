type PostImage = {
  fileId: string
  id: number
  order: number
  url: string
}

export type PostItem = {
  description: string
  id: number
  isDraft: boolean
  postImages: PostImage[]
}

export type Posts = {
  items: PostItem[]
  page: number
  pagesCount: number
}
