import { SignInFormValues } from '@/feature'
import authApi from '@/feature/auth/api/auth-api'
import { handleSignInSuccess } from '@/feature/auth/model/utils/handleLoginSuccess'
import { handleMutationError } from '@/shared/lib/utils/error-handling/handleMutationError'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export const useSignIn = () => {
  const router = useRouter()

  const mutation = useMutation({
    mutationFn: async (formData: SignInFormValues) => {
      return authApi.singIn(formData.email, formData.password)
    },
    mutationKey: ['sign-in'],
    onError: handleMutationError,
    onSuccess: async () => {
      await handleSignInSuccess(router)
    },
  })

  return mutation
}
