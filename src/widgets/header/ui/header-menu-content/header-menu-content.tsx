import { LangSelectSwitcher, getLanguages } from '@/feature/translate'
import { Flex, ReturnComponent, useResponsive, useTranslation } from '@/shared'
import {
  AuthButtons,
  MobileDropdown,
  NotificationProps,
  NotificationsDropdown,
} from '@/widgets/header/ui'

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

const renderMobileDropdown = (
  logout: () => void,
  isMobile: boolean,
  isAuth?: boolean
): ReturnComponent => {
  if (!isMobile || !isAuth) {
    return null
  }

  return <MobileDropdown logout={logout} />
}

export const HeaderMenuContent = ({
  isAuth,
  logout,
  notifications,
  sidebarItems,
  showButtons,
}: {
  isAuth?: boolean
  logout: () => void
  notifications?: NotificationProps[]
  showButtons?: boolean
  sidebarItems: ReturnType<typeof getLanguages>
  t: ReturnType<typeof useTranslation>['t']
}): ReturnComponent => {
  const { md } = useResponsive()

  const isMobile = md

  return (
    <Flex gap={'40'}>
      {renderNotificationsDropdown(isMobile, notifications)}
      {renderLangSelectSwitcher(sidebarItems)}
      {showButtons && renderAuthButtons(isMobile, isAuth)}
      {renderMobileDropdown(logout, isMobile, isAuth)}
    </Flex>
  )
}
