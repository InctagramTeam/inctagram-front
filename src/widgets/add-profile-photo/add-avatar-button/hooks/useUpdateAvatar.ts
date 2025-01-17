import { userService } from '@/entities/user/api/user-api'
import { useTranslation } from '@/shared'
import { toast } from '@/shared/ui/toast/use-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateAvatar = () => {
  const { t } = useTranslation()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (formData: FormData) => {
      return userService.updateAvatar(formData)
    },
    onError: (error: Error, _, context: any) => {
      toast({
        description: navigator.onLine
          ? error.message
          : t.pages.profile.addProfilePhoto.updateAvatar.onError,
        title: t.label.error,
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
        description: t.pages.profile.addProfilePhoto.updateAvatar.onSuccess,
        title: t.label.success,
        variant: 'default',
      })
    },
  })
}
