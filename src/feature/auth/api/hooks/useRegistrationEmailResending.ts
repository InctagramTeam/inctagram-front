import { ErrorResponse, registrationEmailResendingArgs } from '@/feature'
import authApi from '@/feature/auth/api/auth-api'
import { useTranslation } from '@/shared'
import { toast } from '@/shared/ui/toast/use-toast'
import { useMutation } from '@tanstack/react-query'

export const useRegistrationEmailResending = () => {
  const { t } = useTranslation()

  const mutation = useMutation({
    mutationFn: async ({ email }: registrationEmailResendingArgs) => {
      return authApi.registrationEmailResending(email)
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
    onSuccess: data => {
      toast({
        description: t.notifications.emailVerification.onSuccess,
        variant: 'success',
      })
    },
  })

  return mutation
}
