import { useEffect, useRef, useState } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { getCroppedImg } from '@/entities/posts/helpers/getCroppedImg'
import { CroppedAreaType } from '@/entities/posts/model/types/add-post-photo-store.types'

export const useEasyCrop = (currentImageId: string, image: null | string) => {
  const cropperRef = useRef<HTMLDivElement | null>(null)
  const currentImage = useAddPostPhotoStore(state =>
    state.images.find(image => image.id === currentImageId)
  )
  const addCroppedImage = useAddPostPhotoStore(state => state.addCroppedImage)
  const [croppedArea, setCroppedArea] = useState<CroppedAreaType>({ x: 0, y: 0 })
  const onCropChange = (newCroppedArea: { x: number; y: number }) => {
    setCroppedArea(newCroppedArea)
  }

  useEffect(() => {
    const currentCroppedArea = currentImage?.settings.croppedArea

    currentCroppedArea && setCroppedArea(currentCroppedArea)
  }, [currentImageId])
  const onCropComplete = async (
    croppedArea: {
      x: number
      y: number
    },
    croppedAreaPixels: {
      height: number
      width: number
      x: number
      y: number
    }
  ) => {
    const croppedImg = await getCroppedImg(image, croppedAreaPixels)

    addCroppedImage(croppedImg as string, currentImageId) // Сохраняем в Zustand
  }

  return { cropperRef, croppedArea, onCropChange, onCropComplete }
}
