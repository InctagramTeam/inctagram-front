import { create } from 'zustand'
// @ts-expect-error
import { persist } from 'zustand/middleware/persist'
// @ts-expect-error
import { devtools } from 'zustand/middleware/devtools'

type Post = Record<string, any>

type StoreType = {
  posts: Post[]
  createPost: (newPost: string) => void
  updatePost: (id: string, post: string) => void
  removePost: (id: string) => void
}

/** set() - обновляет объект начального стейта по ключу
 * get() - получение "инишл" стейта
 * usePosts - вызываем в компоненте..
 * */
export const usePosts = create<StoreType>(
  devtools(
    persist((set: (state: Record<string, any>) => void, get: StoreType) => ({
      /** "Инишл стейт": */
      posts: [],
      loading: false,
      error: null,
      /** Операции (методы) для изменения данных (стейта): */
      createPost: (newPost: Post) => {
        set((state: Record<string, any>) => {
          // добавляем в стейт новый пост
          return { posts: [...state.posts, { id: new Date().getDate(), newPost }] }
        })
      },
      updatePost: (id: string, post: string) => {
        const posts = get.posts
        // console.log(posts);
      },
      removePost: (id: string) => {},
    }))
  )
)
