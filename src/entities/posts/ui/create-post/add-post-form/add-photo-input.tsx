import React, { ChangeEvent, forwardRef } from 'react'

import { convertFileToBase64, useAddPostPhotoStore } from '@/entities/posts'
import { Input, ReturnComponent, toast, useTranslation } from '@/shared'

export const AddPhotoInput = forwardRef<HTMLInputElement>((_, ref): ReturnComponent => {
  const { t } = useTranslation()
  const images = useAddPostPhotoStore(state => state.images)
  const addImage = useAddPostPhotoStore(state => state.addImage)
  const setModalStateTo = useAddPostPhotoStore(state => state.setModalStateTo)
  const modalState = useAddPostPhotoStore(state => state.modalState)
  const getToastWithError = (description: string) => {
    return toast({
      title: 'error',
      description,
      variant: 'destructive',
    })
  }

  const imgChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const files = Array.from(e.target?.files)

      files.forEach(file => {
        if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
          getToastWithError(t.uploadPhoto.fileFormat)

          return
        }

        if (file.size > 20 * 1024 * 1024) {
          getToastWithError(t.uploadPhoto.maxSize)

          return
        }

        convertFileToBase64(file, (file64: string) => {
          if (images.length < 1 && modalState === 'add-photo') {
            setModalStateTo('cropping')
          }
          addImage(file64)
        })
      })
    }
  }

  return (
    <Input
      accept={'image/jpeg,image/png'}
      aria-hidden
      className={'hidden'}
      multiple
      onChange={imgChangeCallback}
      ref={ref}
      type={'file'}
    />
  )
})
