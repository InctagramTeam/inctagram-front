import { ErrorResponse, NewPasswordArgs, registrationEmailResendingArgs } from '@/feature'
import authApi from '@/feature/auth/api/auth-api'
import { toast } from '@/shared/ui/toast/use-toast'
import { useMutation } from '@tanstack/react-query'

export const useRegistrationEmailResending = () => {
  const mutation = useMutation({
    mutationFn: async (data: registrationEmailResendingArgs) => {
      return authApi.registrationEmailResending(data.email)
    },
    mutationKey: ['registration-email-resending'],
    onError: (error: ErrorResponse) => {
      if (error.response?.data?.errorsMessages) {
        toast({
          description: error.response.data.errorsMessages[0].message,
          title: 'error',
          variant: 'destructive',
        })
      }
    },
    onSuccess: data => {},
  })

  return mutation
}
