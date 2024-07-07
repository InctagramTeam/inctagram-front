import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { SignUpFormValues } from '@/feature'
import authApi from '@/feature/auth/api/auth-api'
import { IAuthResponse } from '@/entities/user/model/types/user'
import { AxiosResponse } from 'axios'

export const useSignUp = () => {
  const mutation = useMutation({
    mutationKey: ['sign-up'],
    mutationFn: async (formData: SignUpFormValues) => {
      return authApi.signUp(formData.username, formData.email, formData.password)
    },
    onSuccess: data => {
      console.log('Registration successful:', data)
    },
    onError: error => {
      console.error('Registration failed:', error)
    },
  })
  return mutation
}
