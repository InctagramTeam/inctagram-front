import { User } from '@/entities/user'
import { create } from 'zustand'

interface IUserStoreType {
  isLoading?: boolean
  setUser: (user: User | null) => void
  user: User | null
}

export const useUser = create<IUserStoreType>((set, get) => ({
  user: null,
  isLoading: false,
  setUser: (user: User | null) => set(() => ({ user: user })),
}))
