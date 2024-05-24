import * as React from 'react'
import { useState } from 'react'

import { MD_BREAKPOINT } from '@/shared/constants'
import { useResponsive } from '@/shared/lib/hooks'
import { Flex } from '@/shared/ui/flex'
import { LANGUAGES } from '@/widgets/header/model/constants'
import { AuthButtons } from '@/widgets/header/ui/auth-buttons'
import { LanguageSelection } from '@/widgets/header/ui/language-selection'
import { MobileDropdown } from '@/widgets/header/ui/mobile-dropdown'
import { NotificationsDropdown } from '@/widgets/header/ui/notifications-dropdown'
import { NotificationProps } from '@/widgets/header/ui/notifications-dropdown-list'

type Props = {
  isAuth?: boolean
  logout?: () => void
  notifications?: NotificationProps[]
}
export const HeaderMenu = ({ isAuth, logout, notifications }: Props) => {
  const { width } = useResponsive()
  const [value, setValue] = useState(LANGUAGES[0].value)

  if (width === null) {
    return null
  }

  const isDesktop = width > MD_BREAKPOINT

  return (
    <Flex className={'flex-nowrap'} gap={'40'}>
      {isDesktop && <NotificationsDropdown notifications={notifications} />}
      <LanguageSelection
        isMobile={!isDesktop}
        items={LANGUAGES}
        onValueChange={setValue}
        value={value}
      />
      {isDesktop && !isAuth && (
        <Flex className={'flex-nowrap'} gap={'24'}>
          <AuthButtons />
        </Flex>
      )}
      {!isDesktop && <MobileDropdown logout={logout} />}
    </Flex>
  )
}
