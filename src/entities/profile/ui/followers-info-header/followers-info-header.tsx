import { AppRoutes, Button, Text, useTranslation } from '@/shared'
import { FlexRow } from '@/shared/ui/flex'
import Link from 'next/link'

export const FollowersInfoHeader = () => {
  const { t } = useTranslation()

  return (
    <FlexRow className={`Header_ w-full items-center justify-between gap-[100px] p-[0_0_20px_0px]`}>
      <Text asComponent={'h2'} className={`title`} variant={'H1'}>
        URL_Profile
      </Text>
      <Button
        asComponent={Link}
        className={`px-6 py-[6px]`}
        //TODO - поменять роут PROFILE - убрать id - получать его из query параметров AppRoutes.PROFILE + `/${data?.id}` + AppRoutes.PROFILE_SETTINGS,
        href={AppRoutes.PROFILE + AppRoutes.PROFILE_SETTINGS + '/general'}
        variant={'secondary'}
      >
        Profile Settings
      </Button>
    </FlexRow>
  )
}
