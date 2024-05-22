'use client'
import { DesktopSidebar, MobileSidebar } from '@/widgets/sidebar'
import { TabletSidebar } from './tablet-sidebar/tablet-sidebar'
import { useResponsiveSidebar } from '../model/hooks/use-responsive-sidebar'

export const Sidebar = () => {
  const { width, tabletBreakpoint_768, mobileBreakpoint_360 } = useResponsiveSidebar()

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
