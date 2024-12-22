'use client'
import React, { useState } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { ReturnComponent, useTranslation } from '@/shared'
import { SwiperClass } from 'swiper/react'

import { PhotoCarousel } from '../photo-carousel'
import { FilterItem } from './filter-item/filter-item'
import { filtersList } from './filters-list-data'

export const FiltersPhoto = (): ReturnComponent => {
  const images = useAddPostPhotoStore(state => state.images)
  const [currentImageId, setCurrentImageId] = useState<string>(images[0].id)
  const { t } = useTranslation()

  const onSlideChange = (swiper: SwiperClass) => {
    setCurrentImageId(images[swiper.activeIndex].id)
  }

  return (
    <div className={'flex items-start'}>
      <PhotoCarousel onSlideChange={onSlideChange} />
      <div
        className={
          'grid w-full max-w-[480px] grid-cols-3 gap-[24px] self-start px-[55px] py-[24px]'
        }
      >
        <span className={'sr-only'}>{t.uploadPhoto.filter}</span>
        {filtersList.map(item => (
          <FilterItem
            currentImageId={currentImageId}
            key={item.value}
            label={item.label}
            value={item.value}
          />
        ))}
      </div>
    </div>
  )
}
