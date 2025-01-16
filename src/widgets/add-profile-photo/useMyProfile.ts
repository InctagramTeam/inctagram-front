import profileApi from '@/entities/profile/api/profile-api'
import { useQuery } from '@tanstack/react-query'

export const useMyProfile = () => {
  return useQuery({
    queryFn: async () => await profileApi.getProfile(),
    queryKey: ['myProfile'],
  })
}
