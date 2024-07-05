'use client'

import Image, { ImageProps } from 'next/image'
import { EMPTY_STRING, ReturnComponent } from '@/shared'
import { clsx } from 'clsx'

type Props = {
  alt?: string
  src: string
  className?: string
}

export type GalleryImageType = Props & Omit<ImageProps, keyof Props>
export const GalleryImage = ({
  alt,
  src,
  className,
  ...rest
}: GalleryImageType): ReturnComponent => (
  <Image
    alt={alt ?? EMPTY_STRING}
    className={clsx(`h-full w-full contain-content`, className)}
    height={228}
    src={src} // `/man.png`
    width={234}
    {...rest}
  />
)

GalleryImage.displayName = 'GalleryImage'
