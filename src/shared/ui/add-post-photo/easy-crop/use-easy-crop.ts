import { useEffect, useRef, useState } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { getCroppedImg } from '@/entities/posts/helpers/get-cropped-img'
import { CroppedArea } from '@/entities/posts/model/types/add-post-photo-store.types'

export const useEasyCrop = (currentImageId: string, image: null | string) => {
  const cropperRef = useRef<HTMLDivElement | null>(null)
  const currentImage = useAddPostPhotoStore(state =>
    state.images.find(image => image.id === currentImageId)
  )
  const setCroppedImage = useAddPostPhotoStore(state => state.setSrc)
  const setOptions = useAddPostPhotoStore(state => state.setOptions)
  const [croppedArea, setCroppedArea] = useState<CroppedArea>({ x: 0, y: 0 })
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

    setCroppedImage({
      id: currentImageId,
      newSrc: croppedImg,
      type: 'cropped',
    }) // Сохраняем в Zustand

    setOptions({
      options: 'pixelSizes',
      id: currentImageId,
      value: { height: croppedAreaPixels.height, width: croppedAreaPixels.width },
    })
  }

  return { cropperRef, croppedArea, onCropChange, onCropComplete }
}
