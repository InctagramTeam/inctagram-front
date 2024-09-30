import { useMutation } from '@tanstack/react-query'
import authApi from '@/feature/auth/api/auth-api'
import { toast } from '@/shared/ui/toast/use-toast'
import { useRouter } from 'next/router'
import { AxiosError } from 'axios'
import { AuthRoutes } from '@/shared'

export const useLogout = () => {
  const router = useRouter()
  const mutation = useMutation({
    mutationKey: ['logout'],
    mutationFn: async () => {
      return authApi.logout()
    },
    onSuccess: _ => {
      router.replace(AuthRoutes.SIGN_IN)
    },
    onError: (error: AxiosError) => {
      if (error) {
        toast({
          title: 'error',
          description: error.message,
          variant: 'destructive',
        })
      }
    },
  })
  return mutation
}
