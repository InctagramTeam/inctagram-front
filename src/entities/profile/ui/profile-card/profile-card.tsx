'use client'

import { Profile } from '../../model/types/profile'
import { memo } from 'react'
import { ProfileCardSkeleton } from '../profile-card-skeleton'
import { ProfileFollowerInfoBlock } from '../profile-followers-info'
import { ProfilePhotos } from '../profile-photos'
import { UserAvatar } from '../user-avatar'
import { Text } from '@/shared'

type ProfileCardProps = {
  className?: string
  data?: Profile
  isLoading?: boolean
  isError?: boolean
  readonly?: boolean
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  let { data, isLoading, isError } = props

  if (isLoading) {
    return <ProfileCardSkeleton />
  }

  if (isError) {
    return (
      <Text className={`text-red-600`} variant={'H2'} textAlign={'center'}>
        {/* todo: translate later */}
        Произошла ошибка при загрузке профиля. Попробуйте обновить страницу
      </Text>
    )
  }

  return (
    <div className={`_Profile_ w-full pl-6`}>
      <div className={`_Profile-top_ flex w-full justify-start pb-[50px]`}>
        <UserAvatar className={`min-h-[200px] w-full min-w-[200px]`} />
        <ProfileFollowerInfoBlock />
      </div>
      <ProfilePhotos />
    </div>
  )
})
