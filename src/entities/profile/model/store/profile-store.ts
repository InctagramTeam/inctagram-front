import { User } from '@/entities/profile'
import { create } from 'zustand'

interface UserStoreType {
  setUser: (user: User | null) => void
  user: User | null
}

export const useProfile = create<UserStoreType>((set, get) => ({
  user: null,
  setUser: (user: User | null) => set(() => ({ user: user })),
}))
