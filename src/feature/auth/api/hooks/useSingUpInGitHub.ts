import authApi from '@/feature/auth/api/auth-api'
import { handleSignInSuccess } from '@/feature/auth/model/utils/handleLoginSuccess'
import { handleMutationError } from '@/shared/lib/utils/error-handling/handleMutationError'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export const useSingUpInGitHub = () => {
  const router = useRouter()

  const mutation = useMutation({
    mutationFn: async (code: string) => {
      return authApi.signInUpGitHub(code)
    },
    mutationKey: ['sign-UpInGitHub'],
    onError: handleMutationError,
    onSuccess: async () => {
      await handleSignInSuccess(router)
    },
  })

  return mutation
}
