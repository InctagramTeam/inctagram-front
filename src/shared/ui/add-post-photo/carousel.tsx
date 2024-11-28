import React, { LegacyRef, forwardRef, useEffect } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { EasyCrop } from '@/shared/ui/add-post-photo/easy-crop'
import { register } from 'swiper/element/bundle'
import { A11y, Controller, Navigation, Thumbs } from 'swiper/modules'
import { SwiperClass, SwiperSlide } from 'swiper/react'
import { SwiperRef } from 'swiper/swiper-react'

import 'swiper/css'
import 'swiper/css/navigation'

type Props = {
  setCurrentImageId: (id: string) => void
  thumbsSwiper: SwiperClass | null
}
export const Carousel = forwardRef<LegacyRef<SwiperRef> | undefined, Props>(
  ({ thumbsSwiper, setCurrentImageId }, ref) => {
    const images = useAddPostPhotoStore(state => state.images)

    useEffect(() => {
      register()

      if (ref && ref?.current) {
        const params = {
          allowTouchMove: false,
          modules: [Navigation, A11y, Thumbs, Controller],
          navigation: true,
          slidesPerGroup: 1,
          slidesPerView: 1,
          spaceBetween: 12,
          thumbs: { swiper: thumbsSwiper },
          className: 'h-full w-full',
          on: {
            update: swiper => {
              console.log(swiper, 'update')
            },
            slideChange: () => {
              //setCurrentImageId(images[swiperMainRef.current.swiper.activeIndex].id)
            },
          },
        }

        Object.assign(ref?.current, params)

        ref?.current.initialize()
      }
    }, [thumbsSwiper])

    return (
      <swiper-container init={false} ref={ref}>
        {images?.map(photo => (
          <SwiperSlide className={'cursor-default'} key={photo.id}>
            <EasyCrop
              aspect={photo.settings.aspect}
              croppedArea={photo.settings.croppedArea}
              currentImageId={photo.id}
              image={photo.src}
              zoom={photo.settings.zoom}
            />
          </SwiperSlide>
        ))}
      </swiper-container>
    )
  }
)
