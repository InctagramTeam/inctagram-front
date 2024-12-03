import React, { useEffect, useRef, useState } from 'react'

import { useAddPostPhotoStore } from '@/entities/posts'
import { cn } from '@/shared'
import Image from 'next/image'
import { A11y, Controller, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { FilterValue } from './filter-value-type'
import { getImageFilterClass } from './get-image-filter-class'

type SliderProps = {
  currentFilter: FilterValue
}

const getCanvasSettingFilter = (currentFilter: FilterValue) => {
  switch (currentFilter) {
    case 'brightness':
      return 'brightness(1.25)'
    case 'contrast':
      return 'contrast(1.25)'
    case 'grayscale':
      return 'grayscale(100%)'
    case 'hueRotate':
      return 'hue-rotate(90deg)'
    case 'invert':
      return 'invert(100%)'
    case 'saturate':
      return 'saturate(1.5)'
    case 'sepia':
      return 'sepia(100%)'
  }
}

export const PhotoCarouselFilters = ({ currentFilter }: SliderProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const [imgLoaded, setImgLoaded] = useState(false)
  const images = useAddPostPhotoStore(state => state.images)
  const saveImage = () => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const dataURL = canvas.toDataURL('image/png')

    //console.log(dataURL)
  }

  useEffect(() => {
    console.log(images)
  }, [images])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    const img = imgRef.current

    if (ctx && imgLoaded) {
      if (canvas) {
        canvas.width = img?.width || 500
        canvas.height = img?.height || 500
      }

      ctx.filter = getCanvasSettingFilter(currentFilter)
      ctx.drawImage(img, 0, 0, canvas?.width, canvas?.height)
      saveImage()
    }
  }, [currentFilter, imgLoaded])

  return (
    <Swiper
      allowTouchMove={false}
      className={'self-stretch'}
      modules={[Navigation, A11y, Controller]}
      navigation
      // onSlideChange={swiper => setCurrentImageId(images[swiper.activeIndex].id)}
      slidesPerGroup={1}
      slidesPerView={1}
      spaceBetween={12}
    >
      {images?.map(photo => (
        <SwiperSlide className={'cursor-default'} key={photo.id}>
          {/*<canvas className={'hidden object-cover'} ref={canvasRef} />*/}
          <Image
            alt={'Picture of the author'}
            className={cn('h-auto w-auto', getImageFilterClass(currentFilter))}
            height={500}
            onLoadingComplete={() => setImgLoaded(true)}
            ref={imgRef}
            src={photo.newSrc || photo.src}
            width={500}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
