import { forwardRef, ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState } from 'react'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  /** будет отображаться в момент загрузки */
  fallback?: ReactElement
  /** будет отображаться в случае ошибки */
  errorFallback?: ReactElement
}

/** AppImage - в случаях когда нужно применить нативный html tag: <img />
 * Применение: <AppImage fallback=<Skeleton width='200' height='200'className=`` src={post.img} alt={post.title} errorFallback={<IconWrapper />} /> />  */
export const AppImage = memo(
  forwardRef<HTMLImageElement, AppImageProps>((props, ref) => {
    const { className, src, alt = 'image', errorFallback, fallback, ...rest } = props
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    /** Вызовется до вмонтирования компонента (синхронно) */
    useLayoutEffect(() => {
      const img = new Image()
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

    return <img ref={ref} {...rest} className={className} src={src} alt={alt} />
  })
)
