'use client'
import { UserAvatar } from '../user-avatar/user-avatar'
import { ProfileFollowerInfoBlock } from 'src/entities/profile/ui/profile-followers-info/profile-follower-info-block'
import { ProfilePhotos } from '../profile-photos/profile-photos'
import { Profile } from '@/entities/profile/model/types/profile'
import { memo } from 'react'
import { ProfileCardSkeleton } from '@/entities/profile/ui/profile-card-skeleton/profile-card-skeleton'
import { useToast } from '@/shared/ui/toast/use-toast'

type ProfileCardProps = {
  className?: string
  data?: Profile
  isLoading?: boolean
  isError?: boolean
  readonly?: boolean
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const { data, className, isLoading, isError, readonly } = props

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
