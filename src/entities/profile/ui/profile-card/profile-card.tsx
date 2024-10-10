'use client'

import { useEffect, useState } from 'react'

import { ProfileGallery, User } from '@/entities/profile'
import { UserService, userService } from '@/entities/user/api/user-api'
import { Text } from '@/shared'

import { ProfileCardSkeleton } from '../profile-card-skeleton'
import { ProfileFollowerInfoBlock } from '../profile-followers-info'
import { UserAvatar } from '../user-avatar'

type ProfileCardProps = {
  className?: string
  data?: User
  isError?: boolean
  isLoading?: boolean
  readonly?: boolean
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { data, isError, isLoading } = props

  const [src, setSrc] = useState('')

  useEffect(() => {
    if (data) {
      userService.getAvatar(data.id).then(({ url }) => setSrc(url))
    }
  }, [data?.id])

  if (isLoading) {
    return <ProfileCardSkeleton />
  }

  if (isError) {
    return (
      <Text className={`text-red-600`} textAlign={'center'} variant={'H2'}>
        {/* todo: translate later */}
        Произошла ошибка при загрузке профиля. Попробуйте обновить страницу
      </Text>
    )
  }

  return (
    <div className={`_Profile_ w-full pl-6`}>
      <div className={`_Profile-top_ flex w-full justify-start pb-[50px]`}>
        <UserAvatar className={`h-[200px] w-[200px]`} src={src} />
        <ProfileFollowerInfoBlock userInfo={data} />
      </div>
      <ProfileGallery />
    </div>
  )
}
