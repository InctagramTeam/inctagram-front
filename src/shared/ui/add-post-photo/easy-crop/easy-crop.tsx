import React from 'react'
import Cropper from 'react-easy-crop'

import { CroppedArea } from '@/entities/posts/model/types/add-post-photo-store.types'
import { ReturnComponent } from '@/shared'

import { useEasyCrop } from './use-easy-crop'

type Props = {
  aspect: number
  croppedArea: CroppedArea
  currentImageId: string
  image: null | string
  zoom: number
}
export const EasyCrop = ({ aspect, image, currentImageId, zoom }: Props): ReturnComponent => {
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
          zoomWithScroll={false}
        />
      )}
    </div>
  )
}
