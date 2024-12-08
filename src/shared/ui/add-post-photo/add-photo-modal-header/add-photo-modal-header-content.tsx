import * as React from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import postsApi from '@/entities/posts/api/posts-api'
import { useCreateProfile } from '@/entities/profile/api'
import { ReturnComponent, useTranslation } from '@/shared'

import { AddPhotoModalHeader } from './add-photo-modal-header'

const base64ToFile = (base64, filename) => {
  const arr = base64.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], filename, { type: mime })
}

export const AddPhotoModalHeaderContent = (): ReturnComponent => {
  const { t } = useTranslation()
  const modalState = useAddPostPhotoStore(state => state.modalState)
  const setModalStateTo = useAddPostPhotoStore(state => state.setModalStateTo)
  const images = useAddPostPhotoStore(state => state.images)
  const description = useAddPostPhotoStore(state => state.description)
  const publicPost = async () => {
    const allSrc = images.map(image => image.filteredSrc || image.croppedSrc)

    const formData = new FormData()

    allSrc.forEach((src, index) => {
      if (src) {
        const file = base64ToFile(src, `image_${index}.png`) // Преобразуем base64 в файл

        // Проверяем, что файл имеет корректное расширение.
        if (file.type === 'image/jpeg' || file.type === 'image/png') {
          formData.append('files', file) // Добавляем файл в FormData
        } else {
          console.error('Неверный формат файла:', file.type)
        }
      }
    })

    await postsApi.createPost(formData)
  }

  if (modalState === 'cropping') {
    return (
      <AddPhotoModalHeader
        nextHandler={() => {
          setModalStateTo('filters')
        }}
        prevHandler={() => {
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
