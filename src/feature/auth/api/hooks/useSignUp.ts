import { ErrorResponse, SignUpFormValues } from '@/feature'
import authApi from '@/feature/auth/api/auth-api'
import { toast } from '@/shared/ui/toast/use-toast'
import { useMutation } from '@tanstack/react-query'

export const useSignUp = () => {
  const mutation = useMutation({
    mutationFn: async (formData: SignUpFormValues) => {
      return authApi.signUp(formData.username, formData.email, formData.password)
    },
    mutationKey: ['sign-up'],
    onError: (error: ErrorResponse) => {
      if (error.response?.data?.errorsMessages) {
        toast({
          description: error.response.data.errorsMessages[0].message,
          title: 'error',
          variant: 'destructive',
        })
      }
    },
    onSuccess: () => {},
  })

  return mutation
}
