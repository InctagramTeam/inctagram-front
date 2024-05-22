'use client'
import { useEffect, useState } from 'react'

import { DesktopSidebar, MobileSidebar } from '@/widgets/sidebar'

import { TabletSidebar } from './tablet-sidebar/tablet-sidebar'

type Props = {
  isCollapsed?: boolean
  setIsCollapsed?: (isCollapsed: boolean) => void
}

export const Sidebar = ({ isCollapsed, setIsCollapsed }: Props) => {
  const [width, setWidth] = useState<null | number>(null)
  const mobileBreakpoint_360 = 360
  const tabletBreakpoint_768 = 768

  const toggleSidebarView = (isCollapsed: boolean) => setIsCollapsed?.(isCollapsed)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)
      const handleWindowResize = () => setWidth(window.innerWidth)

      window.addEventListener('resize', handleWindowResize)

      return () => window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

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

  return <DesktopSidebar isCollapsed={isCollapsed} onToggleIsCollapsedClick={toggleSidebarView} />
}
