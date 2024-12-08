import React from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { ReturnComponent } from '@/shared'
import Image from 'next/image'
import { A11y, Controller, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const PhotoCarousel = (): ReturnComponent => {
  const images = useAddPostPhotoStore(state => state.images)

  return (
    <Swiper
      className={'m-0 w-full max-w-[490px] self-stretch'}
      modules={[Navigation, A11y, Controller]}
      navigation
      slidesPerGroup={1}
      slidesPerView={1}
      spaceBetween={12}
    >
      {images?.map(photo => (
        <SwiperSlide className={'cursor-default'} key={photo.id}>
          <Image
            alt={'Picture of the author'}
            className={'h-auto w-auto'}
            height={500}
            src={photo.filteredSrc || photo.croppedSrc || ''}
            width={490}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
