'use client'

import { memo } from 'react'

import { Avatar, AvatarFallback, AvatarImage, ReturnComponent } from '@/shared'

type Props = {
  className?: string
  src?: string
  userName?: string
  bgColor?: string
  children?: React.ReactNode
}
export const UserAvatar = memo(
  ({ className, bgColor, src, userName, children }: Props): ReturnComponent => {
    return (
      <Avatar className={className}>
        <AvatarImage alt={'user-avatar'} src={src} />
        <AvatarFallback className={`${bgColor || 'bg-Light-900'}`}>
          {children || userName?.[0] || 'U'}
        </AvatarFallback>
      </Avatar>
    )
  }
)
