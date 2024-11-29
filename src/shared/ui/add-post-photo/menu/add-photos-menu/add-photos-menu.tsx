import React from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { Button, Input } from '@/shared'
import { Plus } from '@/shared/assets/icons'
import { clsx } from 'clsx'
import { A11y, Controller, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { ThumbPhoto } from './thumb-photo'
import { useAddPhotosMenu } from './use-add-photos-menu'

type Props = {
  changeThumbSwiper: (swiper: SwiperClass | null) => void
  className?: string
  deleteImgCallback: (id: string) => void
  id: string
}

export const AddPhotosMenu = ({ deleteImgCallback, id, changeThumbSwiper, className }) => {
  const images = useAddPostPhotoStore(state => state.images)
  const { inputRef, imgChangeCallback, handleInputClick } = useAddPhotosMenu()

  return (
    <div
      className={clsx('absolute bottom-[60px] left-[12px] right-[13px] z-2', className || '')}
      id={id}
    >
      <div className={'flex gap-[12px] rounded-[2px] bg-[rgba(0,0,0,0.5)] p-[12px]'}>
        <Swiper
          freeMode
          modules={[Navigation, A11y, Thumbs, Controller]}
          navigation
          onSwiper={changeThumbSwiper}
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
