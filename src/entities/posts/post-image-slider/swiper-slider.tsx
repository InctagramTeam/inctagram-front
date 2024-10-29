'use client'
import { AuthRoutes, Button } from '@/shared'
import { AppImage } from '@/shared/ui/app-image'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './swiper-slider.css'

type Props = {
  images: string[]
}

export const SwiperSlider = (props: Props) => {
  const { images } = props

  // todo move to Posts
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
            <Button asComponent={Link} href={'/'}>
              <AppImage alt={`Slide ${index}`} src={image} />
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
