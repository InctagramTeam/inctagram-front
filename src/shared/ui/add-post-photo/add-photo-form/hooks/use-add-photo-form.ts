import { ChangeEvent, useRef } from 'react'

import { convertFileToBase64, useAddPostPhotoStore } from '@/entities/posts'
import { toast, useTranslation } from '@/shared'

export const useAddPhotoForm = () => {
  const { t } = useTranslation()
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const setModalStateTo = useAddPostPhotoStore(state => state.setModalStateTo)
  const addImage = useAddPostPhotoStore(state => state.addImage)
  const images = useAddPostPhotoStore(state => state.images)
  const imgChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target?.files[0]

      if (file.size > 20 * 1024 * 1024) {
        toast({
          title: 'error',
          description: t.pages.create.error,
          variant: 'destructive',
        })

        return
      }
      convertFileToBase64(file, (file64: string) => {
        if (images.length < 1) {
          setModalStateTo('cropping')
        }
        addImage(file64)
      })
    }
  }
  const handleAddImageClick = () => fileInputRef.current?.click()

  return { imgChangeCallback, handleAddImageClick, fileInputRef }
}
