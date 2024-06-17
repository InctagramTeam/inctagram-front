import * as React from 'react'

import { LG_BREAKPOINT } from '@/shared/constants'
import { getLanguages, LangSelectSwitcher, useResponsive, useTranslation } from '@/shared/lib'
import { ReturnComponent } from '@/shared/types'
import { Flex } from '@/shared/ui/flex'
import {
  AuthButtons,
  MobileDropdown,
  NotificationProps,
  NotificationsDropdown,
} from '@/widgets/header/ui'

type Props = {
  isAuth?: boolean
  logout?: () => void
  notifications?: NotificationProps[]
}
export const HeaderMenu = ({ isAuth, logout, notifications }: Props): ReturnComponent => {
  const { width } = useResponsive()
  const { t } = useTranslation()

  console.log('HeaderMenu')

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
}
