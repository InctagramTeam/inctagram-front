import { ErrorResponse, RecoveryPasswordArgs } from '@/feature'
import authApi from '@/feature/auth/api/auth-api'
import { toast } from '@/shared/ui/toast/use-toast'
import { useMutation } from '@tanstack/react-query'
import { log } from 'console'

export const usePasswordRecovery = () => {
  const mutation = useMutation({
    mutationKey: ['password-recovery'],
    mutationFn: async (formData: RecoveryPasswordArgs) => {
      return authApi.passwordRecovery(formData.email, formData.recaptchaValue)
    },
    onSuccess: data => {
      console.log(data)
    },
    onError: (error: ErrorResponse) => {
      console.log(error)

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
