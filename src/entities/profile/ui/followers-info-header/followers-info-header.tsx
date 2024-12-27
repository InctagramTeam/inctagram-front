import { useEffect, useState } from 'react'

import { Profile } from '@/entities/profile'
import authApi from '@/feature/auth/api/auth-api'
import { AppRoutes, Button, TABS_VARIANTS, Text, useTranslation } from '@/shared'
import { FlexRow } from '@/shared/ui/flex'
import Link from 'next/link'

type Props = {
  profile: Profile
  userId: number
}

export const FollowersInfoHeader = ({ profile, userId }: Props) => {
  const { t } = useTranslation()

  const [isOwnProfile, setIsOwnProfile] = useState(false)

  useEffect(() => {
    authApi
      .me()
      .then(authUser => {
        if (authUser?.id === userId) {
          setIsOwnProfile(true)
        }
      })
      .catch(() => setIsOwnProfile(false))
  }, [userId])

  return (
    <FlexRow className={`Header_ w-full items-center justify-between gap-[100px] p-[0_0_20px_0px]`}>
      <Text asComponent={'h2'} className={`title`} variant={'H1'}>
        {profile.firstName && profile.lastName
          ? profile.firstName + ' ' + profile.lastName
          : 'URL_Profile'}
      </Text>
      {isOwnProfile && (
        <Button asChild className={`px-6 py-[6px]`} variant={'secondary'}>
          <Link
            href={
              AppRoutes.PROFILE + userId + AppRoutes.PROFILE_SETTINGS + `/${TABS_VARIANTS.general}`
            }
          >
            {t.links.profileSettings}
          </Link>
        </Button>
      )}
    </FlexRow>
  )
}
