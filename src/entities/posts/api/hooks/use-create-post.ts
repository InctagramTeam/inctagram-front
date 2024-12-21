import { ErrorResponse } from '@/feature'
import { toast, useTranslation } from '@/shared'
import { handleMutationError } from '@/shared/lib/utils/error-handling/handleMutationError'
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
    onSuccess: _ => {
      toast({
        description: t.notifications.postCreated,
        title: 'Success',
        variant: 'default',
      })
    },
  })

  return mutation
}
