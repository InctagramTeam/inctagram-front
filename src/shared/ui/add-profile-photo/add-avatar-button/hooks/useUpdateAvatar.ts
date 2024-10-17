import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userService } from '@/entities/user/api/user-api'
import { toast } from '@/shared/ui/toast/use-toast'

export const useUpdateAvatar = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (formData: FormData) => {
      return userService.updateAvatar(formData)
    },
    onError: (error: Error, _, context: any) => {
      toast({
        description: navigator.onLine
          ? error.message
          : 'You are currently offline. Changes may not be saved.',
        title: 'Error',
        variant: 'destructive',
      })

      if (context?.previousAvatar) {
        queryClient.setQueryData(['myProfile'], context.previousAvatar)
      }
    },
    onMutate: async (formData: FormData) => {
      await queryClient.cancelQueries({ queryKey: ['myProfile'] })
      const previousAvatar = queryClient.getQueryData(['myProfile'])
      const newAvatarUrl = URL.createObjectURL(formData.get('file') as Blob)

      queryClient.setQueryData(
        ['myProfile'],
        previousAvatar ? { ...previousAvatar, url: newAvatarUrl } : { url: newAvatarUrl }
      )

      return { previousAvatar }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myProfile'] })
      toast({
        description: 'The photo has been successfully updated.',
        title: 'Success',
        variant: 'default',
      })
    },
  })
}
