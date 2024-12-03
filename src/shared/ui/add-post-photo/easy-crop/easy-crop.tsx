import React from 'react'
import Cropper from 'react-easy-crop'

import { useAddPostPhotoStore } from '@/entities/posts'
import { CroppedAreaType } from '@/entities/posts/model/types/add-post-photo-store.types'
import { useEasyCrop } from '@/shared/ui/add-post-photo/easy-crop/use-easy-crop'

type Props = {
  aspect: number
  croppedArea: CroppedAreaType
  currentImageId: string
  image: null | string
  zoom: number
}
export const EasyCrop = ({ aspect, image, currentImageId, zoom }: Props) => {
  const { cropperRef, croppedArea, onCropChange, onCropComplete } = useEasyCrop(
    currentImageId,
    image
  )

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
