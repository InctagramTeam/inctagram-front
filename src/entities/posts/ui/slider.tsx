import React, { useEffect, useRef, useState } from 'react'

import { cn } from '@/shared'
import Image from 'next/image'

import { FilterValue } from '../model/types/filter-value'
import { getImageFilterClass } from '../model/utils/get-image-filter-class'

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

export const Slider = ({ currentFilter }: SliderProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const [imgLoaded, setImgLoaded] = useState(false)

  const saveImage = () => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return
    }

    const dataURL = canvas.toDataURL('image/png')

    console.log(dataURL)
  }

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
    <div className={'self-stretch'}>
      <canvas className={'hidden object-cover'} ref={canvasRef} />
      <Image
        alt={'Picture of the author'}
        className={cn('h-full min-h-[500px] object-cover', getImageFilterClass(currentFilter))}
        height={500}
        onLoadingComplete={() => setImgLoaded(true)}
        ref={imgRef}
        src={'/man.png'}
        width={500}
      />
    </div>
  )
}
