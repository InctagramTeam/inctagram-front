import { SignInFormValues } from '@/feature'
import authApi from '@/feature/auth/api/auth-api'
import { AppRoutes } from '@/shared'
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
    onSuccess: _ => {
      router.replace(AppRoutes.MAIN)
    },
  })

  return mutation
}
