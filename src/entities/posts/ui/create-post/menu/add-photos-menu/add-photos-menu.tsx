import React, { useRef } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { Button, ReturnComponent, cn } from '@/shared'
import { Plus } from '@/shared/assets/icons'
import { A11y, Controller, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { AddPhotoInput } from '../../add-post-form/add-photo-input'
import { ThumbPhoto } from './thumb-photo'

type Props = {
  changeThumbSwiper: (swiper: SwiperClass | null) => void
  className?: string
  deleteImgCallback: (id: string) => void
  id: string
}

export const AddPhotosMenu = ({
  deleteImgCallback,
  id,
  changeThumbSwiper,
  className,
}: Props): ReturnComponent => {
  const images = useAddPostPhotoStore(state => state.images)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleInputClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    inputRef.current?.click()
  }

  return (
    <div className={cn('absolute bottom-[60px] left-[12px] right-[13px] z-2', className)} id={id}>
      <div className={'flex gap-[12px] rounded-[2px] bg-[rgba(0,0,0,0.5)] p-[12px]'}>
        <Swiper
          className={'miniSlider relative !ml-0'}
          freeMode
          modules={[Navigation, A11y, Thumbs, Controller]}
          navigation
          onSwiper={changeThumbSwiper}
          slidesPerGroup={4}
          slidesPerView={'auto'}
          spaceBetween={12}
          watchSlidesProgress
        >
          {images?.map(photo => (
            <SwiperSlide className={'relative !h-[80px] !w-[80px]'} key={photo.id}>
              <ThumbPhoto deleteCallback={deleteImgCallback} id={photo.id} src={photo.baseSrc} />
            </SwiperSlide>
          ))}
        </Swiper>
        <AddPhotoInput ref={inputRef} />
        {images?.length < 10 && (
          <Button
            className={
              'h-[36px] w-[36px] shrink-0 basis-[36px] p-0 !text-Light-100 hover:!text-Primary-300 active:opacity-60'
            }
            onClick={handleInputClick}
            type={'button'}
            variant={'link'}
          >
            <Plus aria-hidden height={36} width={36} />
          </Button>
        )}
      </div>
    </div>
  )
}
