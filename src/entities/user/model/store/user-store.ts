import { IUser } from '@/entities/user/model/types/user.types'
import { create } from 'zustand'

interface IUserStoreType {
  isLoading?: boolean
  setUser: (user: IUser | null) => void
  user: IUser | null
}

export const useUser = create<IUserStoreType>((set, get) => ({
  user: null,
  isLoading: false,
  setUser: (user: IUser | null) => set(() => ({ user: user })),
}))
