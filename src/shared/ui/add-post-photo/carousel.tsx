import React, { useEffect } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { EasyCrop } from '@/shared/ui/add-post-photo/easy-crop'
import { A11y, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

type Props = {
  setCurrentImageId: (id: string) => void
  thumb: SwiperClass | null
}
export const Carousel = ({ thumb, setCurrentImageId }: Props) => {
  const images = useAddPostPhotoStore(state => state.images)

  return (
    <Swiper
      allowTouchMove={false}
      className={'h-full w-full'}
      modules={[Navigation, A11y, Thumbs]}
      navigation
      onSlideChange={swiper => {
        setCurrentImageId(images[swiper.activeIndex].id)
        // Синхронизация слайдеров
        if (thumb) {
          thumb.slideTo(swiper.activeIndex)
        }
      }}
      slidesPerGroup={1}
      slidesPerView={1}
      spaceBetween={12}
      thumbs={thumb ? { swiper: thumb } : undefined}
    >
      {images?.map(photo => (
        <SwiperSlide className={'cursor-default'} key={photo.id}>
          <EasyCrop
            aspect={photo.settings.aspect}
            croppedArea={photo.settings.croppedArea}
            currentImageId={photo.id}
            image={photo.src}
            zoom={photo.settings.zoom}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
