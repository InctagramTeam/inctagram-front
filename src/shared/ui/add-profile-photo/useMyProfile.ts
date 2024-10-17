import { useQuery } from '@tanstack/react-query'
import { userService } from '@/entities/user/api/user-api'

export const useMyProfile = () => {
  return useQuery({
    queryFn: async () => await userService.getProfile(),
    queryKey: ['myProfile'],
  })
}
