import React, { LegacyRef, forwardRef, useEffect, useRef } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { Button, Input } from '@/shared'
import { Plus } from '@/shared/assets/icons'
import { clsx } from 'clsx'
import { register } from 'swiper/element/bundle'
import { A11y, Controller, Navigation, Thumbs } from 'swiper/modules'
import { SwiperClass, SwiperSlide } from 'swiper/react'
import { SwiperRef } from 'swiper/swiper-react'

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

export const AddPhotosMenu = forwardRef<LegacyRef<SwiperRef> | undefined, Props>(
  ({ deleteImgCallback, id, changeThumbSwiper, className }, ref) => {
    const images = useAddPostPhotoStore(state => state.images)
    const { inputRef, imgChangeCallback, handleInputClick } = useAddPhotosMenu()

    useEffect(() => {
      register()

      if (ref?.current) {
        const params = {
          freeMode: true,
          modules: [Navigation, A11y, Thumbs, Controller],
          navigation: true,
          slidesPerView: 'auto',
          spaceBetween: 12,
          watchSlidesProgress: true,

          on: {
            init: swiper => {
              changeThumbSwiper(swiper)
            },
          },
        }

        Object.assign(ref?.current, params)

        ref?.current.initialize()
      }
    }, [])

    return (
      <div
        className={clsx('absolute bottom-[60px] left-[12px] right-[13px] z-2', className || '')}
        id={id}
      >
        <div className={'flex gap-[12px] rounded-[2px] bg-[rgba(0,0,0,0.5)] p-[12px]'}>
          <swiper-container init={false} ref={ref}>
            {images?.map(photo => (
              <SwiperSlide className={'relative h-[80px] w-[80px]'} key={photo.id}>
                <ThumbPhoto deleteCallback={deleteImgCallback} id={photo.id} src={photo.src} />
              </SwiperSlide>
            ))}
          </swiper-container>
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
)
