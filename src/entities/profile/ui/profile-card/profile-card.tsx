'use client'

import { Text } from '@/shared'

import { Profile } from '../../model/types/profile'
import { ProfileCardSkeleton } from '../profile-card-skeleton'
import { ProfileFollowerInfoBlock } from '../profile-followers-info'
import { ProfilePhotos } from '../profile-photos'
import { UserAvatar } from '../user-avatar'

type ProfileCardProps = {
  className?: string
  data?: Profile
  isError?: boolean
  isLoading?: boolean
  readonly?: boolean
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { data, isError, isLoading } = props

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
        <UserAvatar className={`min-h-[200px] w-full min-w-[200px]`} />
        <ProfileFollowerInfoBlock />
      </div>
      <ProfilePhotos />
    </div>
  )
}
