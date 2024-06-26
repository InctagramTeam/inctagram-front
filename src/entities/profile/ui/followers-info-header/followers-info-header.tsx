import { Button, Flex, Text, useTranslation } from '@/shared'
import Link from 'next/link'
import { FlexRow } from '@/shared/ui/flex'

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
        href={
          {
            // todo: данные с сервера для редиректа на страницу настроек конкретного профиля
            // pathname: AppRoutes.PROFILE + `/${data?.id}/settings`,
          }
        }
        variant={'secondary'}
      >
        Profile Settings
      </Button>
    </FlexRow>
  )
}
