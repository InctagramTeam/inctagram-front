import { useEffect } from 'react'

import { base64ToFile, useAddPostPhotoStore } from '@/entities/posts'
import { useCreatePost } from '@/entities/posts/api/hooks/use-create-post'
import { AppRoutes } from '@/shared'
import { useRouter } from 'next/router'
export const usePublicPost = () => {
  const setDescription = useAddPostPhotoStore(state => state.setDescription)
  const { mutate: createPost, isSuccess } = useCreatePost()
  const router = useRouter()
  const images = useAddPostPhotoStore(state => state.images)
  const description = useAddPostPhotoStore(state => state.description)
  const removeImages = useAddPostPhotoStore(state => state.removeImages)
  const setModalStateTo = useAddPostPhotoStore(state => state.setModalStateTo)
  const publicPost = (isDraft: boolean = false) => {
    const allSrc = images.map(image => image.filteredSrc || image.croppedSrc)

    const formData = new FormData()

    allSrc.forEach((src, index) => {
      if (src) {
        const file = base64ToFile(src, `image_${index}.png`) // Преобразуем base64 в файл

        formData.append('files', file)
      }
    })

    createPost({
      formData,
      description,
      isDraft,
    })
  }

  const clearState = () => {
    setModalStateTo('add-photo')
    removeImages()
    setDescription('')

    router.replace(AppRoutes.MAIN)
  }

  useEffect(() => {
    isSuccess && clearState()
  }, [isSuccess])

  return { publicPost, setModalStateTo, removeImages, clearState }
}
