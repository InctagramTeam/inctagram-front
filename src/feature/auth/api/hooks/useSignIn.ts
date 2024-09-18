import { useMutation } from '@tanstack/react-query'
import { SignInFormValues } from '@/feature'
import authApi from '@/feature/auth/api/auth-api'
import { toast } from '@/shared/ui/toast/use-toast'
import { useRouter } from 'next/router'
import { AxiosError } from 'axios'
import { AppRoutes } from '@/shared'

export const useSignIn = () => {
  const router = useRouter()
  const mutation = useMutation({
    mutationKey: ['sign-in'],
    mutationFn: async (formData: SignInFormValues) => {
      return authApi.singIn(formData.email, formData.password)
    },
    onSuccess: _ => {
      router.replace(AppRoutes.MAIN)
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
