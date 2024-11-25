import React, { useEffect, useRef } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { Button, Input } from '@/shared'
import { Plus } from '@/shared/assets/icons'
import { A11y, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { ThumbPhoto } from './thumb-photo'
import { useAddPhotosMenu } from './use-add-photos-menu'

type Props = {
  changeThumbSwiper: (swiper: SwiperClass | null) => void
  deleteImgCallback: (id: string) => void
  id: string
  thumb: SwiperClass | null
}

export const AddPhotosMenu = ({ deleteImgCallback, id, changeThumbSwiper, thumb }: Props) => {
  const images = useAddPostPhotoStore(state => state.images)
  const { inputRef, imgChangeCallback, handleInputClick } = useAddPhotosMenu()
  const thumbsSwiper = useRef<SwiperClass>() // Используем useRef для хранения слайдера

  return (
    <div className={'absolute bottom-[60px] left-[12px] right-[13px] z-2'} id={id}>
      <div className={'flex gap-[12px] rounded-[2px] bg-[rgba(0,0,0,0.5)] p-[12px]'}>
        <Swiper
          freeMode
          modules={[Navigation, A11y, Thumbs]}
          navigation
          onSwiper={swiper => {
            console.log('onSwiper')
            thumbsSwiper.current = swiper
            changeThumbSwiper(swiper)
          }}
          slidesPerView={'auto'}
          spaceBetween={12}
          watchSlidesProgress
        >
          {images?.map(photo => (
            <SwiperSlide className={'relative h-[80px] w-[80px]'} key={photo.id}>
              <ThumbPhoto deleteCallback={deleteImgCallback} id={photo.id} src={photo.src} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Input
          accept={'image/jpeg,image/png'}
          aria-hidden
          className={'hidden'}
          multiple
          onChange={imgChangeCallback}
          ref={inputRef}
          type={'file'}
        />
        {images?.length < 10 && (
          <Button className={'p-2'} onClick={handleInputClick} type={'button'} variant={'link'}>
            <Plus aria-hidden />
          </Button>
        )}
      </div>
    </div>
  )
}
