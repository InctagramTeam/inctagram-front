import { ErrorResponse, NewPasswordArgs, RecoveryPasswordArgs } from '@/feature'
import authApi from '@/feature/auth/api/auth-api'
import { toast } from '@/shared/ui/toast/use-toast'
import { useMutation } from '@tanstack/react-query'
import { log } from 'console'

export const useCreateNewPassword = () => {
  const mutation = useMutation({
    mutationKey: ['create-new-password'],
    mutationFn: async (formData: NewPasswordArgs) => {
      return authApi.createNewPassword(formData.code, formData.newPassword)
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
