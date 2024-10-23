import { LangSelectSwitcher, getLanguages } from '@/feature/translate'
import { AuthRoutes, Button, Flex, ReturnComponent, useResponsive, useTranslation } from '@/shared'
import {
  AuthButtons,
  MobileDropdown,
  NotificationProps,
  NotificationsDropdown,
} from '@/widgets/header/ui'
import Link from 'next/link'

const renderNotificationsDropdown = (
  isMobile: boolean,
  notifications?: NotificationProps[]
): ReturnComponent => {
  if (isMobile) {
    return null
  }

  return <NotificationsDropdown notifications={notifications} />
}

/** Render-functions */
const renderLangSelectSwitcher = (
  sidebarItems: ReturnType<typeof getLanguages>
): ReturnComponent => {
  return <LangSelectSwitcher sidebarItems={sidebarItems} />
}

const renderAuthButtons = (isMobile: boolean, isAuth?: boolean): ReturnComponent => {
  if (!isMobile && !isAuth) {
    return (
      <Flex className={'flex-nowrap'} gap={'24'}>
        <AuthButtons />
      </Flex>
    )
  }

  return null
}

const renderMobileDropdown = (isMobile: boolean, logout?: () => void): ReturnComponent => {
  if (!isMobile) {
    return null
  }

  return <MobileDropdown logout={logout} />
}

export const HeaderMenuContent = ({
  isAuth,
  logout,
  notifications,
  sidebarItems,
}: {
  isAuth?: boolean
  logout?: () => void
  notifications?: NotificationProps[]
  sidebarItems: ReturnType<typeof getLanguages>
  t: ReturnType<typeof useTranslation>['t']
}): ReturnComponent => {
  const { md } = useResponsive()

  const isMobile = md

  const { t } = useTranslation()

  return (
    <Flex gap={'40'}>
      {renderNotificationsDropdown(isMobile, notifications)}
      <Button
        asComponent={Link}
        className={`m-[0] text-balance px-5 py-1.5`}
        href={AuthRoutes.SIGN_IN}
        variant={'link'}
      >
        {t.button.signIn}
      </Button>
      <Button
        asComponent={Link}
        className={`m-[0] text-balance px-5 py-1.5`}
        href={AuthRoutes.SIGN_UP}
        variant={'primary'}
      >
        {t.button.signUp}
      </Button>
      {renderLangSelectSwitcher(sidebarItems)}
      {renderAuthButtons(isMobile, isAuth)}
      {renderMobileDropdown(isMobile, logout)}
    </Flex>
  )
}
