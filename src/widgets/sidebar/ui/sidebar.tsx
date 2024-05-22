'use client'
import { DesktopSidebar, MobileSidebar } from '@/widgets/sidebar'
import { TabletSidebar } from './tablet-sidebar/tablet-sidebar'
import { useResponsiveSidebar } from '@/widgets/sidebar/model/hooks/use-responsive-sidebar'

type Props = {
  isCollapsed?: boolean
  setIsCollapsed?: (isCollapsed: boolean) => void
}

export const Sidebar = ({ isCollapsed, setIsCollapsed }: Props) => {
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

  return (
    <DesktopSidebar
      isCollapsed={isCollapsed}
      onToggleIsCollapsedClick={(isCollapsed: boolean) => setIsCollapsed?.(isCollapsed)}
    />
  )
}
