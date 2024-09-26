import { ImgHTMLAttributes, ReactElement, forwardRef, memo, useLayoutEffect, useState } from 'react'

import Image from 'next/image'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  errorFallback?: ReactElement
  fallback?: ReactElement
  height?: number // добавляем высоту
  width?: number // добавляем ширину
}

export const AppImage = memo(
  forwardRef<HTMLImageElement, AppImageProps>((props, ref) => {
    const {
      alt = 'image',
      className,
      errorFallback,
      fallback,
      height = 300,
      src,
      width = 300,
      ...rest
    } = props // задаем дефолтные размеры
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useLayoutEffect(() => {
      const img = new window.Image()

      img.src = src ?? ''
      img.onload = () => {
        setIsLoading(false)
      }
      img.onerror = () => {
        setIsLoading(false)
        setHasError(true)
      }
    }, [src])

    if (isLoading && fallback) {
      return fallback
    }

    if (hasError && errorFallback) {
      return errorFallback
    }

    return (
      <Image
        ref={ref as any}
        {...rest}
        alt={alt}
        className={className}
        height={height} // передаем высоту
        layout={'responsive'} // можно указать layout для автоматической подгонки
        src={src ?? ''}
        width={width} // передаем ширину
      />
    )
  })
)
