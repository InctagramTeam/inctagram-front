import { ErrorResponse } from '@/feature'
import { toast, useTranslation } from '@/shared'
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
        description: t.notifications.postCreated,
        title: 'Success',
        variant: 'default',
      })
    },
  })

  return mutation
}
