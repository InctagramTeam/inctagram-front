import React, { useRef, useState } from 'react'
import Cropper from 'react-easy-crop'

import { useAddPostPhotoStore } from '@/entities/posts'
import { getCroppedImg } from '@/entities/posts/helpers/getCroppedImg'
import { CroppedAreaType } from '@/entities/posts/model/types/add-post-photo-store.types'
type Props = {
  aspect: number
  croppedArea: any
  currentImageId: string
  image: null | string
  zoom: number
}
export const EasyCrop = ({ aspect, image, currentImageId, zoom }: Props) => {
  const cropperRef = useRef<HTMLDivElement | null>(null)
  const addCroppedImage = useAddPostPhotoStore(state => state.addCroppedImage)
  const [croppedArea, setCroppedArea] = useState<CroppedAreaType>({ x: 0, y: 0 })
  const onCropChange = (newCroppedArea: { x: number; y: number }) => {
    setCroppedArea(newCroppedArea)
  }
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

  return (
    <div ref={cropperRef}>
      {image && (
        <Cropper
          aspect={aspect}
          crop={croppedArea}
          image={image || ''}
          onCropChange={onCropChange}
          onCropComplete={onCropComplete}
          zoom={zoom}
        />
      )}
    </div>
  )
}
