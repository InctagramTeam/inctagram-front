import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type Post = Record<string, any>

type StoreType = {
  createPost: (newPost: Post) => void
  posts: Post[]
  removePost: (id: string) => void
  updatePost: (id: string, post: Post) => void
}
export const usePosts = create<StoreType>(
  devtools(
    persist<StoreType>(
      (set, get) => ({
        createPost: (newPost: Post) => {
          set(state => ({ posts: [...state.posts, { ...newPost, id: new Date().toISOString() }] }))
        },
        posts: [],
        removePost: (id: string) => {
          set(state => ({ posts: state.posts.filter(post => post.id !== id) }))
        },
        updatePost: (id: string, updatedPost: Post) => {
          set(state => ({
            posts: state.posts.map(post => (post.id === id ? { ...post, ...updatedPost } : post)),
          }))
        },
      }),
      {
        name: 'post-storage', // имя для localStorage
      }
    )
  ) as unknown as () => StoreType
)
