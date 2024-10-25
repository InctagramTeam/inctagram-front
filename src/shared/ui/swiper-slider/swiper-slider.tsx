'use client'
import { AppImage } from '@/shared/ui/app-image'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './swiper-slider.css'

type Props = {
  images: string[]
}

export const SwiperSlider = (props: Props) => {
  const { images } = props

  return (
    <div className={'swiper'}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={50}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <AppImage alt={`Slide ${index}`} src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
