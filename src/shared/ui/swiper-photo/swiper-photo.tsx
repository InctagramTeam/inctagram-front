import React from 'react'

import { PostImage } from '@/entities/posts/model/types/posts.types'
import Image from 'next/image'
import { A11y, Controller, Navigation, Pagination, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'

const SwiperPhoto = ({ images }: { images: PostImage[] }) => {
  return (
    <Swiper
      allowTouchMove={false}
      className={'relative m-0 min-h-[515px] w-full max-w-[490px] self-stretch'}
      modules={[Navigation, A11y, Thumbs, Controller, Pagination]}
      navigation
      pagination={{ clickable: true }}
      slidesPerGroup={1}
      slidesPerView={1}
      spaceBetween={12}
    >
      {images?.map(photo => (
        <SwiperSlide className={'cursor-default '} key={photo.id}>
          <Image
            alt={'Picture of the author'}
            className={'h-full w-auto object-cover'}
            fill
            src={photo.url}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperPhoto
