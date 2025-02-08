import { handleMutationError, toast, useTranslation } from '@/shared'
import { useMutation } from '@tanstack/react-query'

import postsApi from '../../api/posts-api'
import { CreatePostRequest } from '../../model/types/posts-api.types'

export const useCreatePost = () => {
  const { t } = useTranslation()

  const mutation = useMutation({
    mutationFn: async ({ formData, description, isDraft }: CreatePostRequest) => {
      return postsApi.createPost({ description, isDraft, formData })
    },
    mutationKey: ['create-post'],
    onError: handleMutationError,
    onSuccess: (_, variables) => {
      toast({
        description: variables.isDraft ? t.notifications.draftSaved : t.notifications.postCreated,
        title: 'Success',
        variant: 'default',
      })
    },
  })

  return mutation
}
