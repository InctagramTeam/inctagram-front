'use client'
import React, { useState } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { ReturnComponent } from '@/shared'

import { FiltersList } from './filteres-list'
import { PhotoCarouselFilters } from './photo-carousel-filters'

export const FiltersPhoto = (): ReturnComponent => {
  const images = useAddPostPhotoStore(state => state.images)
  const [currentImageId, setCurrentImageId] = useState<string>(images[0].id)

  return (
    <div className={'flex items-start'}>
      <PhotoCarouselFilters setCurrentImageId={setCurrentImageId} />
      <FiltersList currentImageId={currentImageId} />
    </div>
  )
}
