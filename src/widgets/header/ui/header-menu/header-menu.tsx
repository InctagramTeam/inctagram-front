import { memo } from 'react'

import { getLanguages } from '@/feature/translate'
import { ReturnComponent, useTranslation } from '@/shared'
import { NotificationProps } from '@/widgets/header/ui'

import { HeaderMenuContent } from '../header-menu-content'

type Props = {
  isAuth?: boolean
  logout?: () => void
  notifications?: NotificationProps[]
}
export const HeaderMenu = memo(({ isAuth, logout, notifications }: Props): ReturnComponent => {
  const { t } = useTranslation()

  const sidebarItems = getLanguages(t)

  return (
    <HeaderMenuContent
      isAuth={isAuth}
      logout={logout}
      notifications={notifications}
      sidebarItems={sidebarItems}
      t={t}
    />
  )
})
