import { create } from 'zustand'
import { IUser } from '@/entities/user/model/types/user-interface'
import { getStoreLocalStorage } from '@/shared/lib/utils/locale-storage/get-local-storage/get-local-storage'

interface IUserStoreType {
  user: IUser | null
  isLoading?: boolean
}

export const useUser = create<IUserStoreType>((set, get) => ({
  // initialState
  user: getStoreLocalStorage('user'),
  isLoading: false,
}))
