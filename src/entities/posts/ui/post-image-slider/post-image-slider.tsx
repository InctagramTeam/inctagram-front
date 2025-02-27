'use client'
import { AppRoutes, Button } from '@/shared'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {
  images: string[]
  userId: number
}

export const PostImageSlider = (props: Props) => {
  const { images, userId } = props

  return (
    <div className={'z-0'}>
      <Swiper
        className={'miniSlider'}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={50}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Button asChild>
              <Link href={AppRoutes.PROFILE + userId}>
                <Image alt={`Slide ${index}`} height={240} src={image} width={234} />
              </Link>
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
