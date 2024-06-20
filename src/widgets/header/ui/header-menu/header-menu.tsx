import { NotificationProps } from '../notifications-dropdown-list'
import { LG_BREAKPOINT, ReturnComponent, useResponsive, useTranslation } from '@/shared'
import { getLanguages } from '@/feature/translate'
import { memo } from 'react'
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
      isDesktop={isDesktop}
      notifications={notifications}
      sidebarItems={sidebarItems}
      isAuth={isAuth}
      logout={logout}
      width={width}
      t={t}
    />
  )
})
