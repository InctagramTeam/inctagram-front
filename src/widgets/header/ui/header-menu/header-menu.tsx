import { memo } from 'react'

import { getLanguages } from '@/feature/translate'
import { LG_BREAKPOINT, ReturnComponent, useResponsive, useTranslation } from '@/shared'
import { NotificationProps } from '@/widgets/header/ui'

import { HeaderMenuContent } from '../header-menu-content'

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
    <HeaderMenuContent
      isAuth={isAuth}
      isDesktop={isDesktop}
      logout={logout}
      notifications={notifications}
      sidebarItems={sidebarItems}
      t={t}
      width={width}
    />
  )
})
