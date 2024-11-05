import authApi from '@/feature/auth/api/auth-api'
import { useQuery } from '@tanstack/react-query'

export const useMeQuery = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      return await authApi.me()
    },
    retry: false,
  })
}
