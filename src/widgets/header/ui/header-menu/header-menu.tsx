import {
  AuthButtons,
  MobileDropdown,
  NotificationProps,
  NotificationsDropdown,
} from '@/widgets/header/ui'
import { Flex, LG_BREAKPOINT, ReturnComponent, useResponsive, useTranslation } from '@/shared'
import { getLanguages, LangSelectSwitcher } from '@/feature/translate'
import { memo } from 'react'

type Props = {
  isAuth?: boolean
  logout?: () => void
  notifications?: NotificationProps[]
}
export const HeaderMenu = memo(({ isAuth, logout, notifications }: Props): ReturnComponent => {
  const { width } = useResponsive()
  const { t } = useTranslation()

  if (width === null) {
    return null
  }

  const isDesktop = width > LG_BREAKPOINT
  const sidebarItems = getLanguages(t)

  return (
    <Flex gap={'40'}>
      {isDesktop && <NotificationsDropdown notifications={notifications} />}

      {/* Селект для смены языка в Арр */}
      <LangSelectSwitcher width={width} sidebarItems={sidebarItems} />
      {isDesktop && !isAuth && (
        <Flex className={'flex-nowrap'} gap={'24'}>
          <AuthButtons />
        </Flex>
      )}
      {!isDesktop && <MobileDropdown logout={logout} />}
    </Flex>
  )
})
