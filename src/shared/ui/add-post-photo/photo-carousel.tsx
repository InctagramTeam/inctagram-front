import React from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { ReturnComponent, cn } from '@/shared'
import Image from 'next/image'
import { A11y, Controller, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

type Props = {
  className?: string
  onSlideChange?: (swiper: SwiperClass) => void
}
export const PhotoCarousel = ({ onSlideChange, className }: Props): ReturnComponent => {
  const images = useAddPostPhotoStore(state => state.images)

  return (
    <Swiper
      a11y
      className={cn('relative m-0 max-h-[515px] w-full max-w-[490px] self-stretch', className)}
      modules={[Navigation, A11y, Controller, Pagination]}
      navigation
      onSlideChange={onSlideChange}
      pagination={
        images.length > 1
          ? {
              clickable: true,
            }
          : false
      }
      slidesPerGroup={1}
      slidesPerView={1}
      spaceBetween={12}
    >
      {images?.map(photo => (
        <SwiperSlide className={'flex cursor-default flex-col justify-center '} key={photo.id}>
          <Image
            alt={'Picture of the author'}
            className={'h-auto w-auto object-cover'}
            height={photo.settings.pixelSizes.height}
            src={photo.filteredSrc || photo.croppedSrc || ''}
            width={photo.settings.pixelSizes.width}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
