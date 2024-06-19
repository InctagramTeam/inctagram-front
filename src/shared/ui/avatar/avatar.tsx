import { CSSProperties, useState } from 'react'
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

export const Avatar = ({
  avatarUrl,
  circle,
  className,
  iconSize = 48,
  style,
  wrapperSize = 300,
}: Props): ReturnComponent => {
  const [imageError, setImageError] = useState(false)

  return avatarUrl && !imageError ? (
    <Image
      alt="avatar"
      className={className}
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
}
