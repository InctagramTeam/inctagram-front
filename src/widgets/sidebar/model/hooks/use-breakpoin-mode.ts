import { useMemo } from 'react'

import {
  LG_BREAKPOINT,
  SM_BREAKPOINT,
  useLayoutContext,
  useResponsive,
  useTranslation,
} from '@/shared'

import { getBaseLinks, getSidebarLinks } from '../ulils/sidebar-links'

export const useBreakpointMode = () => {
  const { isCollapsed } = useLayoutContext()
  const { width } = useResponsive()
  const { t } = useTranslation()

  const tablet = width && width > SM_BREAKPOINT && width < LG_BREAKPOINT
  const mobile = width && width < SM_BREAKPOINT
  const desktop = width && width > LG_BREAKPOINT
  const onlyIcons = tablet || isCollapsed

  const mobileSidebarLinks = useMemo(() => {
    return getBaseLinks(t)
  }, [t])
  const sidebarLinks = useMemo(() => {
    return getSidebarLinks(t)
  }, [t])

  return {
    desktop,
    isCollapsed,
    mobile,
    mobileSidebarLinks,
    onlyIcons,
    sidebarLinks,
    t,
    width,
  }
}
