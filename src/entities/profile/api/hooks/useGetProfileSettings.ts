import profileApi from '@/entities/profile/api/profile-api'
import { useQuery } from '@tanstack/react-query'

export const useGetProfileSettings = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['profileSettings'],
    queryFn: async () => await profileApi.getProfileSettings(),
  })

  return { data, isError, isLoading }
}
