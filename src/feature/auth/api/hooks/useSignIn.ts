import { SignInFormValues } from '@/feature'
import authApi from '@/feature/auth/api/auth-api'
import { AppRoutes } from '@/shared'
import saveToLocalStorage from '@/shared/lib/utils/locale-storage/save-local-storage'
import { toast } from '@/shared/ui/toast/use-toast'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'

export const useSignIn = () => {
  const router = useRouter()

  const mutation = useMutation({
    mutationFn: async (formData: SignInFormValues) => {
      return authApi.singIn(formData.email, formData.password)
    },
    mutationKey: ['sign-in'],
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
        // Cookies.set('userId', String(user.id), { secure: true, sameSite: 'strict' })

        router.replace(AppRoutes.PROFILE + user.id)
      }
    },
  })

  return mutation
}
