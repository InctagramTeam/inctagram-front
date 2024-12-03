import React from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { EasyCrop } from '@/shared/ui/add-post-photo/easy-crop/easy-crop'
import { A11y, Controller, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

type Props = {
  setCurrentImageId: (id: string) => void
  thumbsSwiper: SwiperClass | null
}
export const Carousel = ({ thumbsSwiper, setCurrentImageId }: Props) => {
  const images = useAddPostPhotoStore(state => state.images)

  console.log(images, 'carousel')

  return (
    <Swiper
      allowTouchMove={false}
      className={'h-full w-full'}
      modules={[Navigation, A11y, Thumbs, Controller]}
      navigation
      onSlideChange={swiper => setCurrentImageId(images[swiper.activeIndex].id)}
      slidesPerGroup={1}
      slidesPerView={1}
      spaceBetween={12}
      thumbs={{ swiper: thumbsSwiper ? thumbsSwiper : null }}
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
