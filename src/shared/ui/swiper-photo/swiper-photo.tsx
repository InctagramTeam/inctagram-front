import React from 'react'

import { PostImage } from '@/entities/posts/model/types/posts.types'
import { EasyCrop } from '@/entities/posts/ui/create-post/easy-crop/easy-crop'
import Image from 'next/image'
import { A11y, Controller, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'

const SwiperPhoto = ({ images }: { images: PostImage[] }) => {
  return (
    <Swiper
      allowTouchMove={false}
      className={'relative m-0 min-h-[515px] w-full max-w-[490px] self-stretch'}
      modules={[Navigation, A11y, Thumbs, Controller]}
      navigation
      pagination={{ clickable: true }}
      // onSlideChange={swiper => setCurrentImageId(images[swiper.activeIndex].id)}
      slidesPerGroup={1}
      slidesPerView={1}
      spaceBetween={12}
      // thumbs={{ swiper: thumbsSwiper ? thumbsSwiper : null }}
    >
      {images?.map(photo => (
        <SwiperSlide className={'cursor-default '} key={photo.id}>
          <div className={'relative h-full w-full'}>
            <Image
              alt={'Picture of the author'}
              className={'h-full w-auto object-cover'}
              fill
              src={photo.url}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperPhoto
