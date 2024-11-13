import React, { useRef, useState } from 'react'
import Cropper from 'react-easy-crop'

import { useAddPostPhotoStore } from '@/entities/posts'
import { getCroppedImg } from '@/entities/posts/helpers/getCroppedImg'
type Props = {
  aspect: number
  croppedArea: any
  image: null | string
  ind: number
  zoom: number
}
export const EasyCrop = ({ aspect, image, ind, zoom }: Props) => {
  const cropperRef = useRef<HTMLDivElement>(null)
  const addCroppedImage = useAddPostPhotoStore(state => state.addCroppedImage)
  const [croppedArea, setCroppedArea] = useState({ x: 0, y: 0 })
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

    addCroppedImage(croppedImg as string, ind) // Сохраняем в Zustand
  }

  debugger

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
