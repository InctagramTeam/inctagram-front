'use client'
import { MD_BREAKPOINT, XS_BREAKPOINT } from '@/shared/constants'
import { useResponsive } from '@/shared/lib/hooks'

import { DesktopSidebar } from './desktop-sidebar/desktop-sidebar'
import { MobileSidebar } from './mobile-sidebar/mobile-sidebar'
import { TabletSidebar } from './tablet-sidebar/tablet-sidebar'

export const Sidebar = () => {
  const { width } = useResponsive()

  if (width === null) {
    return null
  }

  /** Отображение вида Сайдбара: мобилка, планшет или десктоп */
  if (width > XS_BREAKPOINT && width < MD_BREAKPOINT) {
    return <TabletSidebar />
  }

  if (width < XS_BREAKPOINT) {
    return <MobileSidebar />
  }

  return <DesktopSidebar />
}
