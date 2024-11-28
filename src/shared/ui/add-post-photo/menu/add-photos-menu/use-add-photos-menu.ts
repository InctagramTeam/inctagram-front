import React, { ChangeEvent, useCallback, useRef } from 'react'

import { convertFileToBase64, useAddPostPhotoStore } from '@/entities/posts'

export const useAddPhotosMenu = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const addImage = useAddPostPhotoStore(state => state.addImage)

  const imgChangeCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target?.files[0]

      convertFileToBase64(file, (file64: string) => {
        addImage(file64)
      })
    }
  }, [])
  const handleInputClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    inputRef.current?.click()
  }

  return { imgChangeCallback, handleInputClick, inputRef }
}
