import * as React from 'react'

import { base64ToFile, useAddPostPhotoStore } from '@/entities/posts'
import { useCreatePost } from '@/entities/posts/api/hooks/use-create-post'
import { ReturnComponent, useTranslation } from '@/shared'

import { AddPhotoModalHeader } from './add-photo-modal-header'

export const AddPhotoModalHeaderContent = (): ReturnComponent => {
  const { t } = useTranslation()
  const modalState = useAddPostPhotoStore(state => state.modalState)
  const setModalStateTo = useAddPostPhotoStore(state => state.setModalStateTo)
  const images = useAddPostPhotoStore(state => state.images)
  const description = useAddPostPhotoStore(state => state.description)
  const removeImages = useAddPostPhotoStore(state => state.removeImages)
  const { mutate: createPost } = useCreatePost()
  const publicPost = () => {
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
      isDraft: false,
    })
  }

  if (modalState === 'cropping') {
    return (
      <AddPhotoModalHeader
        nextHandler={() => {
          setModalStateTo('filters')
        }}
        prevHandler={() => {
          removeImages()
          setModalStateTo('add-photo')
        }}
        title={t.uploadPhoto.croppingTitle}
      />
    )
  }

  if (modalState === 'filters') {
    return (
      <AddPhotoModalHeader
        nextHandler={() => {
          setModalStateTo('publication')
        }}
        prevHandler={() => {
          setModalStateTo('cropping')
        }}
        title={'Filters'}
      />
    )
  }

  if (modalState === 'publication') {
    return (
      <AddPhotoModalHeader
        nextButtonText={'Publish'}
        nextHandler={publicPost}
        prevHandler={() => {
          setModalStateTo('filters')
        }}
        title={'Publication'}
      />
    )
  }
}
