import { Profile } from '@/entities/profile'
import { create } from 'zustand'

interface ProfileStoreType {
  localAvatar: FormData | null
  profile: Profile | null
  setUserAvatar: (localAvatar: FormData | null) => void
}

export const useProfile = create<ProfileStoreType>(set => ({
  profile: null,
  localAvatar: null,

  setUserAvatar: localAvatar => set(() => ({ localAvatar: localAvatar })),
}))
