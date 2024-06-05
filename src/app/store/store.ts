import { create } from 'zustand'
// @ts-expect-error
import { devtools } from 'zustand/middleware/devtools'
// @ts-expect-error
import { persist } from 'zustand/middleware/persist'

type Post = Record<string, any>

type StoreType = {
  createPost: (newPost: string) => void
  posts: Post[]
  removePost: (id: string) => void
  updatePost: (id: string, post: string) => void
}

/** set() - обновляет объект начального стейта по ключу
 * get() - получение "инишл" стейта
 * usePosts - вызываем в компоненте..
 * */
export const usePosts = create<StoreType>(
  devtools(
    persist((set: (state: Record<string, any>) => void, get: StoreType) => ({
      /** Операции (методы) для изменения данных (стейта): */
      createPost: (newPost: Post) => {
        set((state: Record<string, any>) => {
          // добавляем в стейт новый пост
          return { posts: [...state.posts, { id: new Date().getDate(), newPost }] }
        })
      },
      error: null,
      loading: false,
      /** "Инишл стейт": */
      posts: [],
      removePost: (id: string) => {},
      updatePost: (id: string, post: string) => {
        const posts = get.posts
        // console.log(posts);
      },
    }))
  )
)
