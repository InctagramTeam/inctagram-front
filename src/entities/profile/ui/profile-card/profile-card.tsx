'use client'

import { PublicPost } from '@/entities/posts/model/types/posts.types'
import { Profile, ProfileGallery } from '@/entities/profile'
import { EMPTY_STRING, useTranslation } from '@/shared'
import { toast } from '@/shared/ui/toast/use-toast'

import { ProfileCardSkeleton } from '../profile-card-skeleton'
import { ProfileFollowerInfoBlock } from '../profile-followers-info'
import { UserAvatar } from '../user-avatar'

type ProfileCardProps = {
  className?: string
  isError?: boolean
  isLoading?: boolean
  posts: PublicPost[]
  profile: Profile
  readonly?: boolean
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation()
  const { profile, isError, isLoading, posts } = props

  if (isLoading) {
    return <ProfileCardSkeleton />
  }

  if (isError) {
    toast({
      description: t.errors.noProfile,
      title: 'error',
      variant: 'destructive',
    })

    return null
  }

  return (
    <div className={`_Profile_ w-full pl-6`}>
      <div className={`_Profile-top_ flex w-full justify-start pb-[50px]`}>
        <UserAvatar className={`h-[200px] w-[200px]`} src={profile.avatarUrl ?? EMPTY_STRING} />
        <ProfileFollowerInfoBlock profile={profile} />
      </div>
      <ProfileGallery posts={posts} />
    </div>
  )
}
