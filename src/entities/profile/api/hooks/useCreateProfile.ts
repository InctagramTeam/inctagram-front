import { createProfileRequest } from '@/entities/profile'
import profileApi from '@/entities/profile/api/profile-api'
import { ErrorResponse } from '@/feature'
import { toast } from '@/shared/ui/toast/use-toast'
import { useMutation } from '@tanstack/react-query'

export const useCreateProfile = () => {
  const mutation = useMutation({
    mutationFn: async ({
      firstName,
      lastName,
      userName,
      dateOfBirth,
      city,
      aboutMe,
    }: createProfileRequest) => {
      return profileApi.createProfile({ firstName, lastName, userName, dateOfBirth, city, aboutMe })
    },
    mutationKey: ['create-profile'],
    onError: (error: ErrorResponse) => {
      if (error.response?.data?.errorsMessages) {
        toast({
          description: error.response.data.errorsMessages[0].message,
          title: 'error',
          variant: 'destructive',
        })
      }
    },
    onSuccess: _ => {
      toast({
        description: 'Профиль успешно создан',
        title: 'Success',
        variant: 'default',
      })
    },
  })

  return mutation
}
