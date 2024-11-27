import authApi from '@/feature/auth/api/auth-api'
import { AppRoutes } from '@/shared'
import saveToLocalStorage from '@/shared/lib/utils/locale-storage/save-local-storage'
import { toast } from '@/shared/ui/toast/use-toast'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'

export const useSingUpInGitHub = () => {
  const router = useRouter()

  const mutation = useMutation({
    mutationFn: async (code: string) => {
      return authApi.signInUpGitHub(code)
    },
    mutationKey: ['sign-UpInGitHub'],
    onError: (error: AxiosError) => {
      if (error) {
        toast({
          description: error.message,
          title: 'error',
          variant: 'destructive',
        })
      }
    },
    onSuccess: async () => {
      const user = await authApi.me()

      if (user) {
        saveToLocalStorage('user', user)

        await fetch(`/api/setUserIdCookie?userId=${user.id}`, {
          method: 'GET',
        })

        user.profile
          ? await router.replace(AppRoutes.PROFILE + user.id)
          : await router.replace(
              AppRoutes.PROFILE + user.id + AppRoutes.PROFILE_SETTINGS + '/general'
            )
      }
    },
  })

  return mutation
}
