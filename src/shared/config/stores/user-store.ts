import { createStore } from 'zustand/vanilla'

export type UserState = {
  userId: null | number
}

export type UserActions = {
  updateUserId: (id: number) => void
}

export type UserStore = UserActions & UserState

export const defaultInitState: UserState = {
  userId: null,
}

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()(set => ({
    ...initState,
    updateUserId: newUserId => set(() => ({ userId: newUserId })),
  }))
}
