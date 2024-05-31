import * as React from 'react'

import { LG_BREAKPOINT } from '@/shared/constants'
import { useResponsive } from '@/shared/lib/hooks'
import { LangSelectSwitcher } from '@/shared/lib/translate'
import { ReturnComponent } from '@/shared/types'
import { Flex } from '@/shared/ui/flex'

import { AuthButtons } from '../auth-buttons'
import { MobileDropdown } from '../mobile-dropdown'
import { NotificationsDropdown } from '../notifications-dropdown'
import { NotificationProps } from '../notifications-dropdown-list'

type Props = {
  isAuth?: boolean
  logout?: () => void
  notifications?: NotificationProps[]
}
export const HeaderMenu = ({ isAuth, logout, notifications }: Props): ReturnComponent => {
  const { width } = useResponsive()

  if (width === null) {
    return null
  }

  const isDesktop = width > LG_BREAKPOINT

  return (
    <Flex gap={'40'}>
      {isDesktop && <NotificationsDropdown notifications={notifications} />}

      {/* Селект для смены языка в Арр */}
      <LangSelectSwitcher />
      {isDesktop && !isAuth && (
        <Flex className={'flex-nowrap'} gap={'24'}>
          <AuthButtons />
        </Flex>
      )}
      {!isDesktop && <MobileDropdown logout={logout} />}
    </Flex>
  )
}
