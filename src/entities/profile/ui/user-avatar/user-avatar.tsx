'use client'

import { memo } from 'react'

import { Avatar, AvatarFallback, AvatarImage, ReturnComponent } from '@/shared'

type Props = {
  className?: string
  src?: string
  userName?: string
}
export const UserAvatar = memo(({ className, src, userName }: Props): ReturnComponent => {
  return (
    <Avatar className={className}>
      <AvatarImage alt={'user-avatar'} src={src} />
      <AvatarFallback className={'bg-Light-900'}>{userName?.[0] || 'U'}</AvatarFallback>
    </Avatar>
  )
})
