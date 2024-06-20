import { LangSelectSwitcher, getLanguages } from '@/feature/translate'
import { Flex, useTranslation } from '@/shared'
import {
  AuthButtons,
  MobileDropdown,
  NotificationProps,
  NotificationsDropdown,
} from '@/widgets/header/ui'

const renderNotificationsDropdown = (isDesktop: boolean, notifications?: NotificationProps[]) => {
  if (!isDesktop) {
    return
  }

  return <NotificationsDropdown notifications={notifications} />
}

/** Render-function */
const renderLangSelectSwitcher = (width: number, sidebarItems: ReturnType<typeof getLanguages>) => {
  return <LangSelectSwitcher sidebarItems={sidebarItems} width={width} />
}

const renderAuthButtons = (isDesktop: boolean, isAuth?: boolean) => {
  if (isDesktop && !isAuth) {
    return (
      <Flex className={'flex-nowrap'} gap={'24'}>
        <AuthButtons />
      </Flex>
    )
  }

  return null
}

const renderMobileDropdown = (isDesktop: boolean, logout?: () => void) => {
  if (isDesktop) {
    return
  }

  return <MobileDropdown logout={logout} />
}

export const HeaderMenuContent = ({
  isAuth,
  isDesktop,
  logout,
  notifications,
  sidebarItems,
  t,
  width,
}: {
  isAuth?: boolean
  isDesktop: boolean
  logout?: () => void
  notifications?: NotificationProps[]
  sidebarItems: ReturnType<typeof getLanguages>
  t: ReturnType<typeof useTranslation>['t']
  width: number
}) => (
  <Flex gap={'40'}>
    {renderNotificationsDropdown(isDesktop, notifications)}
    {renderLangSelectSwitcher(width, sidebarItems)}
    {renderAuthButtons(isDesktop, isAuth)}
    {renderMobileDropdown(!isDesktop, logout)}
  </Flex>
)
