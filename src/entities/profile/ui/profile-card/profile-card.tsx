'use client'

import { Profile } from '../../model/types/profile'
import { memo } from 'react'
import { useToast } from '@/shared/ui/toast/use-toast'
import { ProfileCardSkeleton } from '../profile-card-skeleton'
import { ProfileFollowerInfoBlock } from '../profile-followers-info'
import { ProfilePhotos } from '../profile-photos'
import { UserAvatar } from '../user-avatar'

type ProfileCardProps = {
  className?: string
  data?: Profile
  isLoading?: boolean
  isError?: boolean
  readonly?: boolean
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const { data, isLoading, isError } = props

  const { toast } = useToast()

  if (isLoading) {
    return <ProfileCardSkeleton />
  }

  if (isError) {
    toast({
      variant: 'destructive',
      title: 'Произошла непредвиденная ошибка.',
      description: 'TПерезагрузите страницу.',
    })
  }

  return (
    <section className={`_Profile_ w-full pl-6`}>
      <div className={`_Profile-top_ flex w-full justify-start pb-[50px]`}>
        <UserAvatar className={`min-h-[200px] w-full min-w-[200px]`} />
        <ProfileFollowerInfoBlock />
      </div>
      <ProfilePhotos />
    </section>
  )
})
