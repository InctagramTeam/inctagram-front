import { useMutation } from '@tanstack/react-query'
import { ErrorResponse, SignUpFormValues } from '@/feature'
import authApi from '@/feature/auth/api/auth-api'
import { toast } from '@/shared/ui/toast/use-toast'

export const useSignUp = () => {
  const mutation = useMutation({
    mutationKey: ['sign-up'],
    mutationFn: async (formData: SignUpFormValues) => {
      return authApi.signUp(formData.username, formData.email, formData.password)
    },
    onSuccess: data => {
      console.log(data)
    },
    onError: (error: ErrorResponse) => {
      if (error.response?.data?.errorsMessages) {
        toast({
          title: 'error',
          description: error.response.data.errorsMessages[0].message,
          variant: 'destructive',
        })
      }
    },
  })
  return mutation
}
