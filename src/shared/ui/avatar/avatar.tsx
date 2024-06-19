import React, { CSSProperties, forwardRef, useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { Nullable, ReturnComponent } from '@/shared'
import ImageIcon from '@/shared/assets/icons/ImageIcon'

type Props = {
  avatarUrl?: Nullable<string>
  circle?: boolean
  className?: string
  iconSize?: number
  style?: CSSProperties
  wrapperSize?: number
}

const Avatar = forwardRef<HTMLDivElement, Props>((props, ref): ReturnComponent => {
  const { avatarUrl, circle, className, iconSize = 48, style, wrapperSize = 204, ...rest } = props

  const [imageError, setImageError] = useState(false)

  return avatarUrl && !imageError ? (
    <Image
      alt="avatar"
      className={``}
      height={wrapperSize}
      onError={() => setImageError(true)}
      priority
      src={avatarUrl}
      style={{
        borderRadius: circle ? '50%' : '',
        ...style,
      }}
      width={wrapperSize}
    />
  ) : (
    <div
      {...rest}
      ref={ref}
      className={clsx(
        `flex shrink-0 items-center justify-center rounded-[2px] bg-Dark-500`,
        className
      )}
      style={{
        borderRadius: circle ? '50%' : '',
        height: `${wrapperSize}px`,
        width: `${wrapperSize}px`,
        ...style,
      }}
    >
      <ImageIcon
        style={{
          height: `${iconSize}px`,
          width: `${iconSize}px`,
        }}
      />
    </div>
  )
})

Avatar.displayName = 'Avatar'

export default Avatar
