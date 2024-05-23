'use client'
import { useResponsiveSidebar } from '../model/hooks/use-responsive-sidebar'
import { DesktopSidebar } from './desktop-sidebar/desktop-sidebar'
import { MobileSidebar } from './mobile-sidebar/mobile-sidebar'
import { TabletSidebar } from './tablet-sidebar/tablet-sidebar'

export const Sidebar = () => {
  const { mobileBreakpoint_360, tabletBreakpoint_768, width } = useResponsiveSidebar()

  if (width === null) {
    return null
  }

  /** Отображение вида Сайдбара: мобилка, планшет или десктоп */
  if (width > mobileBreakpoint_360 && width < tabletBreakpoint_768) {
    return <TabletSidebar />
  }

  if (width < mobileBreakpoint_360) {
    return <MobileSidebar />
  }

  return <DesktopSidebar />
}
