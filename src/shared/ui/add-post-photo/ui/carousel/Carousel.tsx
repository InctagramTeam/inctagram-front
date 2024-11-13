import React from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { EasyCrop } from '@/shared/ui/add-post-photo/ui/easyCrop/EasyCrop'

export const Carousel = () => {
  const images = useAddPostPhotoStore(state => state.images)
  const cropped = images?.map((e, ind) => {
    return (
      <EasyCrop
        aspect={e.aspect}
        croppedArea={e.croppedArea}
        image={e.image}
        ind={ind}
        key={ind}
        zoom={e.zoom}
      />
    )
  })

  return (
    <>
      <div>{cropped}</div>
    </>
  )
}
