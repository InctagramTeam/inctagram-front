import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userService } from '@/entities/user/api/user-api'
import { toast } from '@/shared/ui/toast/use-toast'

export const useDeleteAvatar = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: userService.deleteAvatar,
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
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['myProfile'] })
      const previousAvatar = queryClient.getQueryData(['myProfile'])

      queryClient.setQueryData(['myProfile'], null)

      return { previousAvatar }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myProfile'] })
      toast({
        description: 'The photo has been successfully deleted.',
        title: 'Success',
        variant: 'default',
      })
    },
  })
}
