import { ErrorResponse, RecoveryPasswordArgs } from '@/feature'
import authApi from '@/feature/auth/api/auth-api'
import { toast } from '@/shared/ui/toast/use-toast'
import { useMutation } from '@tanstack/react-query'

export const usePasswordRecovery = () => {
  const mutation = useMutation({
    mutationFn: async (formData: RecoveryPasswordArgs) => {
      return authApi.passwordRecovery(formData.email, formData.recaptchaValue)
    },
    mutationKey: ['password-recovery'],
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
