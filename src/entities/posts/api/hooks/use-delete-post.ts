import postsApi from '@/entities/posts/api/posts-api'
import { handleMutationError, toast, useTranslation } from '@/shared'
import { useMutation } from '@tanstack/react-query'

export const useDeletePost = () => {
  const { t } = useTranslation()

  const mutation = useMutation({
    mutationFn: async (postId: string) => {
      return await postsApi.deletePost(postId)
    },
    mutationKey: ['delete-post'],
    onError: handleMutationError,
    onSuccess: () => {
      toast({
        description: t.notifications.postDeleted,
        title: 'Success',
        variant: 'default',
      })
    },
  })

  return mutation
}
