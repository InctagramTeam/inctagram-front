'use client'
import { Button } from '@/shared'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './post-image-slider.css'

type Props = {
  images: string[]
}

export const PostImageSlider = (props: Props) => {
  const { images } = props

  return (
    <div className={'z-0'}>
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
              <Image alt={`Slide ${index}`} height={240} src={image} width={234} />
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
